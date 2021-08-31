import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { propTypes } from 'react-bootstrap/esm/Image';

const Form = ({ setIsOpenedModal, setIsOpenedSuccessMessage }) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm('service_0jjsdwq', 'template_4ro3ic9', event.target, 'user_sTvU3kUzQYadK6QCToy8C')
      .then(() => {
        setIsOpenedSuccessMessage(true);
        setIsOpenedModal(false);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        className="close-btn"
        onClick={() => setIsOpenedModal(false)}
        onKeyDown={() => setIsOpenedModal(false)}
        role="button"
        tabIndex={0}
      >
        X
      </div>
      <h2 className="form-title">Formulaire de contact</h2>
      {/* <div className="form-content"> */}
      <div className="form-row" role="listitem">
        <div className="col">
          <input
            className="form-control"
            type="text"
            id="firstName"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Prénom *"
            value={firstName}
            required
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            type="text"
            id="lastName"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Nom *"
            value={lastName}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <input
            className="form-control"
            type="text"
            id="company"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Société"
            value={company}
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Téléphone"
            value={phone}
          />
        </div>
      </div>
      <input
        className="form-control"
        type="mail"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email *"
        value={email}
        required
      />
      <textarea
        className="form-control"
        id="message"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message *"
        value={message}
      />
      {/* </div> */}
      <input className="btn btn-primary button btn-lg" type="submit" value="Envoyer" />
    </form>
  );
};

Form.propTypes = { setIsOpenedModal: propTypes.func, setIsOpenedSuccessMessage: propTypes.func };

Form.defaultProps = {
  setIsOpenedModal: () => {},
  setIsOpenedSuccessMessage: () => {},
};
export default Form;
