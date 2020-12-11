import styled from 'styled-components';
import ContainerBootstrap from 'react-bootstrap/Container';
import CardBootstrap from 'react-bootstrap/Card';

export const Container = styled(ContainerBootstrap)`
    margin-top: 10%;
    max-width: 860px;
    padding: 1em 10px;
`;

export const Card = styled(CardBootstrap)`
    margin-top: 5px;
`;

export const CountContribution = styled.label`
    color: #24292e;
    font-size: 16px;
    margin-bottom: 0;
`;
