import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Qui suis-je ?" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={200} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="photo de profile" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={300} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, recusandae, voluptatum consequatur incidunt veritatis non nostrum itaque possimus delectus atque, placeat voluptatibus inventore velit. Hic sed provident quasi nisi, maiores rerum consectetur voluptas aut corporis debitis eius magnam, saepe aliquam.'}
                </p>
                <p className="about-wrapper__info-text">
                  En 2020, j&apos;ai entamé ma reconversion professionnelle en intégrant la
                  formation{' '}
                  <span className="special-text">Développeur Web Fullstack JavaScript</span> de
                  l&apos;école O&apos;Clock. Durant cette formation, j&apos;ai acquis de solides
                  compétences en Back et en Front, avec une spécialisation en React.
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, a?'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Linked in
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
