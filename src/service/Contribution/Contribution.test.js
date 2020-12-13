/* eslint-disable */
import {
    getContributionOnYearsService,
    getContributionByYear,
    getContributionDay,
} from './index';

const dataMock = [
    { date: '2016-12-02', count: 45 },
    { date: '2017-06-10', count: 31 },
];
describe('Test Contribution Service', () => {
    test('should have return contribution on years', () => {
        const contributionOnYears = getContributionOnYearsService(
            dataMock,
            2020
        );
        expect(Object.keys(contributionOnYears).length).toEqual(3);
        expect(contributionOnYears).toEqual({ 2016: 45, 2017: 31, 2020: 0 });
    });

    test('should have return contribution by year', () => {
        const contributionByYear = getContributionByYear(dataMock, 2017);
        expect(contributionByYear).toEqual([{ date: '2017-06-10', count: 31 }]);
    });

    test('should have return 31 contribution by day', () => {
        const contributionDay = getContributionDay(
            [{ date: '2017-06-10', count: 31 }],
            6,
            10
        );
        expect(contributionDay).toEqual(31);
    });
    test('should have return 0 contribution by day', () => {
        const contributionDay = getContributionDay(
            [{ date: '2017-06-10', count: 31 }],
            7,
            10
        );
        expect(contributionDay).toEqual(0);
    });
});
