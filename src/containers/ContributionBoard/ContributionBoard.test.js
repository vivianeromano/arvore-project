/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';

import ContributionBoard from './index';

const yearSelected = {
    year: 2017,
    totalCount: 31,
    contributions: [{ date: '2017-06-10', count: 31 }],
};

describe('Test PixelBoard', () => {
    test('should render component default', async () => {
        const { getAllByTestId } = render(
            <ContributionBoard yearSelected={yearSelected} />
        );
        const board = getAllByTestId('board');
        const pixel = getAllByTestId('pixel_board');
        expect(board.length).toEqual(53);
        expect(pixel.length).toEqual(365);
    });
});
