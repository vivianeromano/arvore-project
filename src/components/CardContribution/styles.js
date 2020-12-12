import styled from 'styled-components';
import CardBootstrap from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

export const Card = styled(CardBootstrap)`
    margin-top: 5px;
    font-size: 10px;
    color: #24292e;
`;

export const ColWeek = styled(Col)`
    max-width: 4.5em;
    padding-right: 0;
`;
export const ColMonth = styled(Col)`
    padding-left: 0;
    padding-right: 0;
`;
export const RowWeek = styled(Row)`
    margin-top: 1.2em;
`;

export const ColDay = styled(Col)`
    margin-bottom: 1.5em;
`;
