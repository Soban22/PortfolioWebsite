import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  const form = useRef();
  
  // State to manage modal visibility
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs.sendForm('service_otzcinn', 'template_fg3vppp', form.current, 'T90TQtdOTst5qFTD7')
      .then((result) => {
        // Show the modal when message is successfully sent
        setShowModal(true);
        console.log(result.text);
        
      }, (error) => {
        alert('Failed to send message. Please try again later.');
        console.log(error.text);
      });

    // Clear the form
    e.target.reset();
  };

  return (
    <section className="contact section">
      <h2 className="section__title">Get In <span>Touch</span></h2>

      <div className="contact__container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">rsoban22@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+92 324 1087295</h4>
              </div>
            </div>

            <div className="contact__socials">
              <a href="https://www.facebook.com/share/124B6kiYGDG/?mibextid=LQQJ4d" className="contact__social-link">
                <FaFacebookF />
              </a>
              <a href="https://wa.me/+923241087295" className="contact__social-link">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/mohammad.soban10?igsh=ZWVvYnI4a3F2ZHdi&utm_source=qr" className="contact__social-link">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="form__control"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="form__control"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                name="subject"
                className="form__control"
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              name="message"
              className="form__control textarea"
              required
            ></textarea>
          </div>

          <button type="submit" className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>

      {/* Modal with new class name */}
      {showModal && (
        <div className="success-modal">
          <div className="success-modal__content">
            <h3>Message Sent!</h3>
            <p>Your message has been successfully sent.</p>
            <button className="button" onClick={() => setShowModal(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
