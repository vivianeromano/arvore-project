import React from 'react';

// STYLES
import * as S from './styles';

function Legend() {
    return (
        <S.LegendContribution>
            Less
            <ul>
                <li className="day-l1-bg"> </li>
                <li className="day-l2-bg"> </li>
                <li className="day-l3-bg"> </li>
                <li className="day-l4-bg"> </li>
                <li className="day-l5-bg"> </li>
            </ul>
            More
        </S.LegendContribution>
    );
}

export default Legend;
