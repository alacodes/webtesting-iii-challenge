// Test away
import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {

    //snapshot attempt, wish me luck
    //this sick move generates a DOM tree
    //Remember: snapshots are a JSON rep. of the DOM tree

    it('matches the snapshot', () => {
        const tree = renderer.create(<Dashboard />)
        expect(tree.toJSON()).toMatchSnapshot()
    })
    
    it('should render controls with display', () => {
        const { getByText } = render(<Dashboard />)
            getByText(/unlocked/i)
            getByText(/lock gate/i)
            getByText(/open/i)
            getByText(/close gate/i)
    })
})