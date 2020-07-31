import React from 'react';
import Images from '../Images';
import { render } from '@testing-library/react';

describe('Images', () => {
  it('It should render comonent without errors', () => {
    const { getByTestId } = render(<Images className="img-container" />);
    expect(getByTestId('images')).toHaveTextContent('');
  })
})