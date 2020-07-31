import React from 'react';
import { render } from '@testing-library/react';
import Avatar from '../Avatar';

const props = {
  userProfile: '',
  value: '',
  name: '',
  id: '',
  handleUpload: jest.fn()
}

describe('Avatar', () => {
  it('Render layout without errors', () => {
    props.userProfile = "Tuan Luong";
    props.value = 'http://api.terralogic.ngrok.io/-MDDGhxOchRFf0e72XHt_1596091615109_f1.png';
    props.name = 'avatar';
    props.id = 'avatar';

  })
})