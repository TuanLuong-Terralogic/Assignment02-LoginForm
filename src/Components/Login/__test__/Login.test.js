import React from 'react';
import Login from '../Login';
import { shallow } from 'enzyme';

const props = {
  handleSubmit: jest.fn(),
  user: {
    msg: '',
    isAuthenticated: null,
    loading: null,
  },
}

describe('Login', () => {
  const component = shallow(<Login {...props} />);
  const instance = component.instance();
  const loginClick = jest.spyOn(instance, 'handleSubmit');
  it('it should login with click', () => {
    expect(loginClick).toHaveBeenCalled();
  })
})