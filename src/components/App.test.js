import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('Content Builder Text', () => {
  const { getByText} = render(<App />);
  const element = getByText("Content Builder");
  //expect(element).toBeInTheDocument();
    
});
