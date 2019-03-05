import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect'

import Count from './Count';
import DashBoard from './Dashboard'

describe('<Count />', ()=>{
  it('renders without crashing', () => {
    const helpers =render(<Count/>)
  });
  it('strikes render strikes', () =>{
      const {getByText} =render(<DashBoard/>);
      const {getByTestId} =render(<Count/>);
      const strikeBtn = getByText(/strike/i);
      fireEvent.click(strikeBtn);
      expect(getByTestId(/strikeDot/i)).toBeInTheDocument();
  })
})
