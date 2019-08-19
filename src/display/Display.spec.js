// Test away!
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Display from './Display'
import 'jest-dom/extend-expect'



describe('<Display />', () => {

    //lock test
    it('should display lock when locked', () => {
        const component = render(<Display closed ={true} locked={true}/>)
        component.getByText('Locked')
    })

    //unlocked test
    it('should display unlocked when unlocked', () => {
        const component = render(<Display closed={true} locked={false}/>)
        component.getByText('Unlocked')
    })

    //red led when closed
    it('should display red led when closed', () => {
        const component = render(<Display closed={true} locked={false}/>)
        const closedDisplay = component.getByText('Closed')
        expect(closedDisplay).toHaveClass('red-led')
    })

    //green led when open
    it('should display green led when open', () => {
        const component = render(<Display closed={false} locked={false}/>)
        const openDisplay = component.getByText('Open')
        expect(openDisplay).toHaveClass('green-led')
    })

    //red led
    it('should display red while locked', () =>{
        const component = render(<Display closed={true} locked={true}/>)
        const display = component.getByText('Locked')
        expect(display).toHaveClass('red-led')
    })

    //green led
    it('should display green while unlocked', () => {
        const component = render(<Display closed={true} locked={false}/>)
        const display = component.getByText('Unlocked')
        expect(display).toHaveClass('green-led')
    })
})
