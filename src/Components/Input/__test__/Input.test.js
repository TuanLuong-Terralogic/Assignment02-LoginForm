import React from 'react';
import { shallow, configure } from 'enzyme';
import Input from '../Input';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let props = {
  clName: '',
  labelName: '',
  id: '',
  type: '',
  plHol: '',
  name: '',
  eyeType: '',
  onChange: jest.fn(),
  value: '',
  defaultValue: ''
}

describe('Input', () => {
  it('it should render password input', () => { 
    props.clName = 'form-group';
    props.labelName = 'Password';
    props.id = 'password';
    props.type = 'password';
    props.plHol = 'Enter your password';
    props.name = 'password';
    props.eyeType = 'eye';

    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find('password-wrapper')).toHaveReturned();
  })

  it('it should render text input', () => {
    props.clName = 'form-group detail';
    props.labelName = 'Email';
    props.id = 'email';
    props.type = 'email';
    props.plHol = 'Enter your email';
    props.name = 'email';
    props.eyeType = '';

    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find('form-group detail')).toHaveReturned();
  })
})