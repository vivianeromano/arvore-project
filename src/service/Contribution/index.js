import * as axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function listContributionsService() {
    try {
        const { data } = await axios.get(`${baseUrl}/contributions`);
        return { data };
    } catch (error) {
        throw new Error('Erro ao listar as contribuições');
    }
}

export function getContributionOnYearsService(data, currentYear) {
    return data
        .map((value) => ({
            year: new Date(value.date).getFullYear(),
            count: value.count,
        }))
        .reduce(
            (acc, elm) => {
                if (acc[elm.year]) {
                    return {
                        ...acc,
                        [elm.year]: acc[elm.year] + elm.count,
                    };
                }
                return { ...acc, [elm.year]: elm.count };
            },
            { [currentYear]: 0 }
        );
}

export function getContributionByYear(contributions, year) {
    return contributions.filter((value) => {
        const date = new Date(value.date);
        return date.getFullYear() === parseInt(year, 10);
    });
}

export function getContributionDay(contributions, month, day) {
    return contributions
        .filter((value) => {
            const date = new Date(value.date);
            return date.getMonth() + 1 === month && date.getDate() === day;
        })
        .reduce((acc, elm) => acc + elm.count, 0);
}
