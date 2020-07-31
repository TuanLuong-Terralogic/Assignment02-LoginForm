import React from 'react';
import Logo from '../Logo';
import { render } from '@testing-library/react';

describe('Logo', () => {
  it('it should render without error', () => {
    const { getByTestId } = render(<Logo className="brand" />);
    expect(getByTestId('logo')).toHaveTextContent('start your personal photo experience');
  })
})