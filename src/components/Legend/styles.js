import styled from 'styled-components';

export const LegendContribution = styled.div`
    font-size: 11px;
    color: #586069;

    ul {
        display: inline-block;
        list-style: none;
        margin: 0 5px;

        li {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 2px;
            box-shadow: inset 0 0 0 1px rgba(27, 31, 35, 0.04);
            margin: 0 2px;
        }
        .day-l1-bg {
            background-color: #ebedf0;
        }
        .day-l2-bg {
            background-color: #9be9a8;
        }
        .day-l3-bg {
            background-color: #40c463;
        }
        .day-l4-bg {
            background-color: #30a14e;
        }
        .day-l5-bg {
            background-color: #216e39;
        }
    }
`;
