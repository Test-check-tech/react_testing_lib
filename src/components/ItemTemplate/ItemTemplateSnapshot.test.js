import React from 'react';
import { render } from '@testing-library/react';
import Template from './ItemTemplate';

it("Snapshot", () => {
  const { asFragment,getByText }   = render(<Template />);
  expect(asFragment()).toMatchSnapshot();  

});