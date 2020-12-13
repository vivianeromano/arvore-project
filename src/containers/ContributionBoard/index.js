import React from 'react';
import PropTypes from 'prop-types';
import * as shortid from 'shortid';
// SERVICE
import { getContributionDay } from '../../service/Contribution';

// COMPONENTS
import PixelBoard from '../../components/PixelBoard';

// UTILS
import { splitArray } from '../../util/ArrayUtils';

import * as S from './style';

function ContributionBoard({ yearSelected }) {
    const board = () => {
        const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const daysOfYear = months.reduce((acc, month) => {
            const totalDayMonth = new Date(
                yearSelected.year,
                month,
                0
            ).getDate();
            return acc.concat(
                Array.from({ length: totalDayMonth }, (_, i) => i + 1).map(
                    (day) => {
                        const contributionsDay = getContributionDay(
                            yearSelected.contributions,
                            month,
                            day
                        );
                        return {
                            day,
                            month,
                            count: contributionsDay,
                        };
                    }
                )
            );
        }, []);

        const getTypePixel = (count) => {
            if (count > 30) {
                return 'l5';
            }
            if (count > 20) return 'l4';
            if (count > 10) return 'l3';
            if (count > 1) return 'l2';
            return 'l1';
        };

        return splitArray(daysOfYear, 7).map((group) => (
            <S.GroupPixel key={shortid.generate()} data-testid="board">
                {group.map((value) => (
                    <PixelBoard
                        key={shortid.generate()}
                        type={getTypePixel(value.count)}
                        data={{ ...value, year: yearSelected.year }}
                    />
                ))}
            </S.GroupPixel>
        ));
    };
    return board();
}

ContributionBoard.propTypes = {
    yearSelected: PropTypes.shape({
        year: PropTypes.number.isRequired,
        totalCount: PropTypes.number.isRequired,
        contributions: PropTypes.arrayOf(
            PropTypes.shape({
                date: PropTypes.string,
                count: PropTypes.number,
            })
        ).isRequired,
    }).isRequired,
};

export default ContributionBoard;
