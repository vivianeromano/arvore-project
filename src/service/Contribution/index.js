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
