import React from 'react';
import { Dropdown } from 'react-bootstrap';

import PropTypes from 'prop-types';
// STYLES
import * as S from './styles';

function MenuYear({ years, yearSelected, onSelectYear }) {
    return (
        <S.DropdownButton
            id="dropdown-basic-button"
            title={String(yearSelected)}
        >
            {years
                .sort((a, b) => b - a)
                .map((year) => (
                    <Dropdown.Item
                        key={year}
                        onClick={() => onSelectYear(year)}
                    >
                        {year}
                    </Dropdown.Item>
                ))}
        </S.DropdownButton>
    );
}

MenuYear.propTypes = {
    years: PropTypes.arrayOf(PropTypes.string).isRequired,
    yearSelected: PropTypes.number.isRequired,
    onSelectYear: PropTypes.func.isRequired,
};

export default MenuYear;
