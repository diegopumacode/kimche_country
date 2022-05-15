import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';

const mocks = [];

test('render app', () => {
  const components = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>,
  );
  expect(components).toMatchSnapshot();
});
