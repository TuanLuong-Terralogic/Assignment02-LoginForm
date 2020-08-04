import React from 'react';
import Login from '../Login';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, fireEvent, wait } from '@testing-library/react'

configure({ adapter: new Adapter() });

const props = {
  onSubmit: jest.fn(),
  user: {
    msg: '',
    isAuthenticated: null,
    loading: null,
  },
}

describe('Login', () => {
  // test('It should be filled', async () => {
  //   const { container } = render(<Login />);
  //   const email = container.querySelector('input[name="email"]');
  //   const password = container.querySelector('input[name="password"]');
  //   const submit = container.querySelector('button[type="submit"]');

  //   props.isAuthenticated = true;
  //   await wait(() => {
  //     fireEvent.change(email, {
  //       target: {
  //         value: 'luongdoquangtuan@gmail.com'
  //       }
  //     });
  //     fireEvent.change(password, {
  //       target: {
  //         value: '123456789@Ab'
  //       }
  //     });
  //   });

  //   await wait(() => {
  //     fireEvent.click(submit)
  //   });
  //   expect(props.onSubmit).toHaveBeenCalled();

  // })\
  it('it should be rendered', () => {
    const wrapper = shallow(<Login {...props} />);
    // expect(wrapper.className).;
  })
})