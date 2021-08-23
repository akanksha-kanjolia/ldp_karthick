import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
    test('renders button component', () => {
        render(<Button/>);
    })
})

it("Button renders with name", () =>{
    const {getByTestId} = render(<Button children="button label"/>);
    expect(getByTestId("button")).toHaveTextContent("button label");
})