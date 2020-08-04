import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from '../Loading';

configure({ adapter: new Adapter() });

describe('Loading', () => {
  it('it should render', () => {
    const component = shallow(<Loading />);
    expect(component).toMatchSnapshot();
    expect(component.find('div').props().className).toBe('loading')
  })
})