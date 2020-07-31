import React from 'react';
import LoginLayout from '../LoginLayout';
import { shallow } from 'enzyme';

let props = {
  user: {},
  login: jest.fn()
}

describe('<LoginLayout />', () => {

  const wrapper = shallow(<LoginLayout {...props} />);
  it('Return true', () => {
    // expect(wrapper).tobeTruthy();
    expect(props.login).toHaveBeenCalled();
  })
})