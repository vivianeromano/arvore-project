import styled from 'styled-components';

const typePixel = {
    l1: '#ebedf0',
    l2: '#9be9a8',
    l3: '#40c463',
    l4: '#30a14e',
    l5: '#216e39',
};
export const Pixel = styled.li`
    list-style: none;
    width: 11px;
    height: 11px;
    border-radius: 2px;
    box-shadow: inset 0 0 0 1px rgba(27, 31, 35, 0.04);
    margin: 3px 2px;
    background-color: ${(props) => typePixel[props.type]};
`;
