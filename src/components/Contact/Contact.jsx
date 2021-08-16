import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ContactForm from '../Form/Form';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn } = contact;
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [isOpenedSuccessMessage, setIsOpenedSuccessMessage] = useState(false);
  const successMessage = 'Votre message a bien été envoyé';

  const OpenContactModal = () => {
    setIsOpenedModal(true);
  };

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        {!isOpenedModal && !isOpenedSuccessMessage && (
          <Fade bottom duration={1000} delay={200} distance="30px">
            <div className="contact-wrapper">
              <p className="contact-wrapper__text">
                {cta || 'Would you like to work with me? Awesome!'}
              </p>
              <a
                role="button"
                type="button"
                className="cta-btn cta-btn--resume"
                onClick={OpenContactModal}
                onKeyDown={OpenContactModal}
                tabIndex={0}
              >
                {btn || "Let's Talk"}
              </a>
            </div>
          </Fade>
        )}
        {isOpenedModal && (
          <Fade bottom duration={1000} delay={200} distance="30px">
            <ContactForm
              setIsOpenedModal={setIsOpenedModal}
              setIsOpenedSuccessMessage={setIsOpenedSuccessMessage}
            />
          </Fade>
        )}
        {isOpenedSuccessMessage && <div className="success-message">{successMessage}</div>}
      </Container>
    </section>
  );
};

export default Contact;
