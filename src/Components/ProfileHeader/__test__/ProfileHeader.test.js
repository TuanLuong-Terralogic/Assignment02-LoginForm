import React from 'react';
import { render } from '@testing-library/react';
import ProfileHeader from '../ProfileHeader';

describe('Profile Header', () => {
  it('It should render layout withou errors', () => {
    const { getByTestId } = render(<ProfileHeader className="header-container" />);
    expect(getByTestId('header')).toHaveTextContent('My Profile', 'Manage your profile and contact information')
  })
  // it('It should render layout withou errors', () => {
  //   const { getByTestId } = render(<ProfileHeader className="header-container" />);
  //   expect(getByTestId('header')).toHaveTextContent('My Profile')
  // })
})