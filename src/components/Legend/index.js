import React from 'react';

// COMPONENTS
import PixelBoard from '../PixelBoard';
// STYLES
import * as S from './styles';

function Legend() {
    return (
        <S.LegendContribution>
            Less
            <ul>
                <PixelBoard />
                <PixelBoard type="l2" />
                <PixelBoard type="l3" />
                <PixelBoard type="l4" />
                <PixelBoard type="l5" />
            </ul>
            More
        </S.LegendContribution>
    );
}

export default Legend;
