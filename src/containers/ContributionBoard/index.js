import React from 'react';

// COMPONENTS
import PixelBoard from '../../components/PixelBoard';

// UTILS
import { splitArray } from '../../util/ArrayUtils';

import * as S from './style';

function ContributionBoard() {
    const board = () => {
        const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const daysOfYear = months.reduce((acc, month) => {
            const totalDayMonth = new Date(2020, month, 0).getDate();
            return acc.concat(
                Array.from({ length: totalDayMonth }, (_, i) => i + 1).map(
                    (day) => ({
                        day,
                        month,
                    })
                )
            );
        }, []);
        return splitArray(daysOfYear, 7, []).map((group) => (
            <S.GroupPixel>
                {group.map((value) => (
                    <PixelBoard data={{ ...value, year: 2020 }} />
                ))}
            </S.GroupPixel>
        ));
    };
    return <>{board()}</>;
}
export default ContributionBoard;
