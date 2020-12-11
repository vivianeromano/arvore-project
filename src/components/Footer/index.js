import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Legend from '../Legend';

import * as S from './styles';

function Footer() {
    return (
        <footer>
            <Row>
                <Col className="align-self-center">
                    <S.LinkContributions href="https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile">
                        Learn how we count contributions.
                    </S.LinkContributions>
                </Col>
                <Col className="text-right align-self-center">
                    <Legend />
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;
