import React from 'react';
import LoginLayout from '../LoginLayout';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
let props = {
  user: {},
  login: jest.fn()
}

describe('<LoginLayout />', () => {

  const wrapper = shallow(<LoginLayout {...props} />);
  it('Return true', () => {
    // expect(wrapper).tobeTruthy();
    expect(wrapper).toBeTruthy();
  })
})