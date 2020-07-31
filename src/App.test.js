import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

let props = {
  userLoaded: jest.fn()
}

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('run useEffect', () => {
  const wrapper = shallow(<App {...props} />);
})
