import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../Loading';
describe('Loading', () => {
  it('it should render', () => {
    const component = shallow(<Loading />);
  })
})