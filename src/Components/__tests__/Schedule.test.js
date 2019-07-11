import React from 'react'
import Enzyme, {mount, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';


import Schedule from '../DashBoardComponents/Schedule'


Enzyme.configure({adapter: new Adapter()})

describe('schedule renders', () => {
    it('renders without crashing', () => {
       
 shallow(<Schedule />);
     });
 });

 describe('schedule page displays', () =>{
    it('schedule page loads', () => {
        const wrapper = shallow(<Schedule/>)
        expect(wrapper.contains('.schedule')).toBeDefined()
    })
    it('should be selectable by class "foo"', function() {
        expect(shallow(<Schedule />).is('.schedule')).toBe(true);
      });
})