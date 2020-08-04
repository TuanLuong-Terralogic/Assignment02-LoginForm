import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from '../Profile';

configure({ adapter: new Adapter() });

let props = {
  profile: {},
  user: {
    loading: false,
    isAuthenticated: false
  },
  handleUpdateProfile: jest.fn(),
  handleUploadImage: jest.fn(),
  handleClick: jest.fn(),
  handleOnSubmit: jest.fn(),
  handleUpdateAll: jest.fn()
}

describe('Profile', () => {
  it('it should render without error', () => {
    props.user.loading = true;
    props.user.isAuthenticated = true;

    const wrapper = shallow(<Profile {...props} />);

    expect(wrapper.find('profile-wrapper')).toHaveReturned();
  })
})