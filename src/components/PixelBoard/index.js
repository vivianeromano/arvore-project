import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';

// UTILS
import { convertMonth } from '../../util/DateUtils';
// STYLES
import * as S from './style';

function PixelBoard({ type, data }) {
    return data ? (
        <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={
                <Tooltip>
                    <strong>No contributions</strong> on{' '}
                    {convertMonth[data.month]} {data.day}, {data.year}
                </Tooltip>
            }
        >
            <S.Pixel type={type} />
        </OverlayTrigger>
    ) : (
        <S.Pixel type={type} />
    );
}

PixelBoard.defaultProps = {
    type: 'l1',
    data: null,
};
PixelBoard.propTypes = {
    type: PropTypes.string,
    data: PropTypes.shape({
        month: PropTypes.number,
        day: PropTypes.number,
        year: PropTypes.number,
    }),
};

export default PixelBoard;
