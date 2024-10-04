import { render, screen } from '@testing-library/react';
import GetData from '../GetData.js';


describe('api call testing', ()=>{
  it('renders learn react link',async () => {
    render(<GetData/>);
    const employeeElement = await screen.findByTestId("employee1");
    expect(employeeElement).toBeInTheDocument()
  });
})