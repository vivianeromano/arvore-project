import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

// COMPONENTS
import Footer from '../Footer';

// STYLES
import * as S from './styles';

function CardContribution({ children }) {
    return (
        <S.Card>
            <Card.Body>
                <Row>
                    <S.ColWeek md={1}>
                        <S.RowWeek>
                            <S.ColDay>Mon</S.ColDay>
                            <S.ColDay>Wen</S.ColDay>
                            <Col>Fri</Col>
                        </S.RowWeek>
                    </S.ColWeek>
                    <Col md={11}>
                        <Row>
                            <Col>Jan</Col>
                            <S.ColMonth>Feb</S.ColMonth>
                            <S.ColMonth>Mar</S.ColMonth>
                            <S.ColMonth>Apr</S.ColMonth>
                            <S.ColMonth>May</S.ColMonth>
                            <S.ColMonth>Jun</S.ColMonth>
                            <S.ColMonth>Jul</S.ColMonth>
                            <S.ColMonth>Aug</S.ColMonth>
                            <S.ColMonth>Sep</S.ColMonth>
                            <S.ColMonth>Oct</S.ColMonth>
                            <S.ColMonth>Nov</S.ColMonth>
                            <S.ColMonth>Dec</S.ColMonth>
                        </Row>
                        <Row>
                            <Col>{children}</Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer />
                    </Col>
                </Row>
            </Card.Body>
        </S.Card>
    );
}

CardContribution.propTypes = {
    children: PropTypes.element.isRequired,
};

export default CardContribution;
