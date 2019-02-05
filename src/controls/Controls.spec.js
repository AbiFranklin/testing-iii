import Display from '../display/Display';
import React from 'react';
import { render, cleanup, fireEvent, getByTestId } from 'react-testing-library';
import Controls from './Controls';
import 'jest-dom/extend-expect';


afterEach(cleanup);

describe('Controls Component', () => {
    it('buttons that toggle state', () => {
        const component = render(<Controls />);
        component.getByTestId(/closebutton/i);
        component.getByTestId(/lockbutton/i);
    });

    it('botton displays "close gate" if currently open', () => {
        const component = render(<Controls />);
        const button = component.getByTestId(/closebutton/i);
        component.getByText('Close Gate');
    });

    it('botton displays "close gate" if currently open', () => {
        const component = render(<Controls />);
        const button = component.getByTestId(/closebutton/i);
        fireEvent.click(button);
        component.getByText('Open Gate');
    });
});

// Test away!
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is closed
// - the locked toggle button is disabled if the gate is open