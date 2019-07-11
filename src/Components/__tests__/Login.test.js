import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import LogInForm from '../LogInForm';


Enzyme.configure({adapter: new Adapter()})


 describe('login displays imputs', () =>{
     it('renders inputs', () => {
         const wrapper = shallow(<LogInForm/>)
         expect(wrapper.contains('.LogInForm')).toBeDefined()
     })
 })
 describe('login displays buttons', () =>{
    it('renders buttons', () => {
        const wrapper = shallow(<LogInForm/>)
        expect(wrapper.contains('.link')).toBeDefined()
    })
})
describe('login displays', () =>{
    it('page loads', () => {
        const wrapper = shallow(<LogInForm/>)
        expect(wrapper.contains('.Loginpage')).toBeDefined()
    })
})
