import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// COMPONENTS
import Footer from '../../components/Footer';
import MenuYear from '../../components/MenuYear';

// SERVICES
import {
    listContributionsService,
    getContributionOnYearsService,
} from '../../service/Contribution';

// STYLES
import * as S from './styles';

function Contribution() {
    const [years, setYears] = useState({});
    const [yearSelected, setYearSelected] = useState({
        year: new Date().getFullYear(),
        count: 0,
    });

    const getContributionOnYears = (data) => {
        const currentYear = new Date().getFullYear();
        const dataYears = getContributionOnYearsService(data, currentYear);
        setYears(dataYears);
        setYearSelected({ year: currentYear, count: dataYears[currentYear] });
    };

    const getContributions = async () => {
        try {
            const { data } = await listContributionsService();
            getContributionOnYears(data);
            // chamar funcao para listar os anos
        } catch (error) {
            alert(error.message);
        }
    };

    const onSelectYear = (value) => {
        setYearSelected({ year: Number(value), count: years[value] });
    };

    useEffect(() => {
        getContributions();
    }, []);

    return (
        <S.Container>
            <Row>
                <Col className="align-self-center">
                    <S.CountContribution>
                        {yearSelected.count} contributions in the last year
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
                    <S.Card>
                        <Card.Body>
                            <Footer />
                        </Card.Body>
                    </S.Card>
                </Col>
            </Row>
        </S.Container>
    );
}

export default Contribution;
