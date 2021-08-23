import React from 'react';
import { render } from '@testing-library/react';
import Header from "./header";

describe('Header', () => {
    test('renders header component', () => {
        render(<Header/>);
    })
});

describe('Header', () => {
    test('renders header component', () => {
        const header = render(<Header/>);
        // header.getByTestId("addbook").simulate("click");
        // expect(header.getByTestId("dialog")).toBeEnabled();

    })
});

