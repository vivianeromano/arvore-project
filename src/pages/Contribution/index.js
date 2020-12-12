import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

// COMPONENTS
import MenuYear from '../../components/MenuYear';
import CardContribution from '../../components/CardContribution';
// CONTAINERS
import ContributionBoard from '../../containers/ContributionBoard';

// SERVICES
import {
    listContributionsService,
    getContributionOnYearsService,
    getContributionByYear,
} from '../../service/Contribution';

// STYLES
import * as S from './styles';

function Contribution() {
    const [years, setYears] = useState({});
    const [contributions, setContributions] = useState([]);
    const [yearSelected, setYearSelected] = useState({
        year: new Date().getFullYear(),
        totalCount: 0,
        contributions: [],
    });

    const onSelectYear = (year) => {
        const contributionsByYear = getContributionByYear(contributions, year);
        setYearSelected({
            year: Number(year),
            totalCount: years[year] || 0,
            contributions: contributionsByYear,
        });
    };

    const getContributionOnYears = (data) => {
        setContributions(data);
        const currentYear = new Date().getFullYear();
        const dataYears = getContributionOnYearsService(data, currentYear);
        setYears(dataYears);
        onSelectYear(currentYear);
    };

    const getContributions = async () => {
        try {
            const { data } = await listContributionsService();
            getContributionOnYears(data);
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        getContributions();
    }, []);

    return (
        <S.Container>
            <Row>
                <Col className="align-self-center">
                    <S.CountContribution>
                        {yearSelected.totalCount} contributions in the last year
                    </S.CountContribution>
                </Col>
                <Col className="text-right">
                    <MenuYear
                        years={Object.keys(years)}
                        onSelectYear={onSelectYear}
                        yearSelected={yearSelected.year}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardContribution>
                        <ContributionBoard yearSelected={yearSelected} />
                    </CardContribution>
                </Col>
            </Row>
        </S.Container>
    );
}

export default Contribution;
