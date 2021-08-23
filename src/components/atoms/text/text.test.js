import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import Text from "./text";

describe('Text', () => {
    test('renders ext component', () => {
        render(<Text/>);
    })
})

it("Text renders with content", () =>{
    const {getByTestId} = render(<Text children="Hello Blinkist!!!"/>);
    expect(getByTestId("text")).toHaveTextContent("Hello Blinkist!!!");
})