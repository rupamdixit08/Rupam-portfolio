import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Email: kusweetyrd@gmail.com</p>
      <p>
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/rupam-dixit-30a314139/"
          target="_blank"
          rel="noopener noreferrer"
        >
           LinkedIn
        </a>
      </p>
      <p>
      Github:{' '}
        <a
          href="https://github.com/rupamdixit08/portfolio.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
    </section>
  );
}

export default Contact;
