import React from 'react';
import { shallow } from 'enzyme';
import ImageValid from '../index';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

let props = {
  fileValid: false
}

describe('Return Noti', () => {
  it('To be true', () => {
    const { getByTestId } = render(<ImageValid {...props} className="invisible" />)
    expect(getByTestId('image')).toHaveTextContent('Invalid type');
  })

  it('To be false', () => {
    props.fileValid = true;
    const { getByTestId } = render(<ImageValid {...props} className="visible" />)
    expect(getByTestId('image')).toHaveTextContent('Invalid type');
  })
})
