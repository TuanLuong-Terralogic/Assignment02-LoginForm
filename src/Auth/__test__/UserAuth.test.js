import React from 'react';
import UserAuth from '../UserAuth';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let props = {
  user: {
    isAuthenticated: true,
    loading: false
  },
};

describe('<UserAuth />', () => {
  const component = shallow(<UserAuth {...props} />);

})