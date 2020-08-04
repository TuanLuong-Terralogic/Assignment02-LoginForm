import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModalUpload from '../ModalUpload';

configure({ adapter: new Adapter() });

let props = {
  id: '',
  name: '',
  handleUploadImage: jest.fn()
}

describe('ModalUpload', () => {
  it('it should be rendered wihtout errors', () => {
    const wrapper = shallow(<ModalUpload {...props} />)
  })
})