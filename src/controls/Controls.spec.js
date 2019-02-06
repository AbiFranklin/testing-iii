import React from 'react';
import { render, cleanup, fireEvent, getByTestId, getByText } from 'react-testing-library';
import Controls from './Controls';
import 'jest-dom/extend-expect';


afterEach(cleanup);

describe('Controls Component', () => {
    afterEach(cleanup);

    it('buttons that toggle state', () => {
        const component = render(<Controls />);
        component.getByTestId(/closebutton/i);
        component.getByTestId(/lockbutton/i);
    });


    it('button displays "close gate" if currently open', () => {
        const component = render(<Controls />);
        component.getByText(/close gate/i);
    });



});

