import React from 'react';
import Images from '../Images';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

describe('Images', () => {
  it('It should render comonent without errors', () => {
    const { getByAltText } = render(<Images className="img-container" />);
    expect(getByAltText('images')).toHaveContentText('solution-expert');
  })
})