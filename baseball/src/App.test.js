import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect'

import App from './App';

describe('<App />', ()=>{
  it('renders without crashing', () => {
    const helpers =render(<App/>)
  });
  it('renders "lets play ball"', ()=>{
    const {getByText} =render(<App/>);
    const text = getByText(/let's play ball/i);
    expect(text).toBeInTheDocument();
  });
  
})
