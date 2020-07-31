import React from 'react';
import Login from '../Login';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
    const site = component.find('.btn-login')
    site.simulate('click');
    instance.onMouseEnter();
    expect(loginClick).toHaveBeenCalled();
  })
})