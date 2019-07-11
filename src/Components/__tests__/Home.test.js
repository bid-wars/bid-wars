import React from 'react'
import Enzyme, {mount, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import Home from '../Home'


Enzyme.configure({adapter: new Adapter()})

describe('Home renders', () => {
    it('renders without crashing', () => {
       
 shallow(<Home />);
     });
 });
 describe('home page displays', () =>{
    it('home page loads', () => {
        const wrapper = shallow(<Home/>)
        expect(wrapper.contains('.homePage')).toBeDefined()
    })
})
describe('logo displays', () =>{
    it('logo displays', () => {
        const wrapper = shallow(<Home/>)
        expect(wrapper.contains('.logo')).toBeDefined()
    })
})
describe('links displays', () =>{
    it('links displays', () => {
        const wrapper = shallow(<Home/>)
        expect(wrapper.contains('.link')).toBeDefined()
    })
})
describe('icons load', () =>{
    it('icons load', () => {
        const wrapper = shallow(<Home/>)
        expect(wrapper.contains('.icons')).toBeDefined()
    })
})
describe('bottom sections load', () =>{
    it('bottom sections load', () => {
        const wrapper = shallow(<Home/>)
        expect(wrapper.contains('.bottomnav')).toBeDefined()
    })
    it('should be selectable by class "topbanner"', function() {
        expect(shallow(<Home />).contains('.topbanner')).toBeDefined()
      });
      it('should be selectable by class "navholder"', function() {
        expect(shallow(<Home />).contains('.navholder')).toBeDefined()
      });
      it('should be selectable by class "topnav"', function() {
        expect(shallow(<Home />).contains('.topnav')).toBeDefined()
      });
})