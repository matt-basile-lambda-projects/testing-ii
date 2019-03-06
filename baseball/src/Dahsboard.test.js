import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect'

import Dashboard from './Dashboard';

describe('<Dashboard />', ()=>{
  it('renders without crashing', () => {
    const helpers =render(<Dashboard/>)
    
  });
  
})
