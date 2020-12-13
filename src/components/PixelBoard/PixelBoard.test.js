/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';

import PixelBoard from './index';

describe('Test PixelBoard', () => {
    test('should render component default', async () => {
        const { getByTestId } = render(<PixelBoard />);
        const li = getByTestId('pixel_board');
        expect(li).toBeInTheDocument();
    });
});
