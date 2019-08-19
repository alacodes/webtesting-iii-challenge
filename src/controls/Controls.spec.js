// Test away!
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import 'jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import { toBeDisabled } from 'jest-dom'
import Controls from './Controls'

describe('<Control />', () => {
    //snapshot: component
    //this sick move generates a DOM tree
    //Remember: snapshots are a JSON rep. of the DOM tree

    it('matches the snapshot', () =>{
        const tree = renderer.create(<Controls />)
        expect(tree.toJSON()).toMatchSnapshot()
    })

    expect.extend({toBeDisabled})

    //disable lock/unlock while gate is open
    it('should disable lock/unlock button while the gate is open', ()=> {
        const {getByText} = render(<Controls closed={false}/>)
        const button = getByText(/lock gate/i)
        expect(button).toBeDisabled()
    })

    //do the same for the open/close button when closed
    it('should disable open/close button when locked', () => {
        const{getByText} = render(<Controls locked={true}/>)
        const button = getByText(/close gate/i)
        expect(button).toBeDisabled()
    })

    //button render for closed and locked
    it('should render a button to toggle closed and locked', () => {
        const {getByText} = render(<Controls />)
        getByText(/close gate/i)
        getByText(/lock gate/i)
    })

    //button toggle to change on click
    it('should toggle on button click', () => {
        const toggleClosed = jest.fn()
        const {getByText} = render(<Controls toggleClosed={toggleClosed}/>)
        const button = getByText(/close gate/i)
        fireEvent.click(button)
        expect(toggleClosed).toHaveBeenCalledTimes(1)
    })
})