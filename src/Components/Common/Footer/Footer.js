import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark py-4">
      <Container>
        <div className="text-center">
          <a className="footer-icon" rel="noreferrer" target="_blank" href="https://facebook.com/ashik.ali0"><i className="bx bxl-facebook"></i></a>
          <a className="footer-icon" rel="noreferrer" target="_blank" href="https://linkedin.com/in/md-ashik-ali"><i className="bx bxl-linkedin"></i></a>
          <a className="footer-icon" rel="noreferrer" target="_blank" href="https://instagram.com/md_ashik_ali_khan"><i className="bx bxl-instagram"></i></a>
          <a className="footer-icon" rel="noreferrer" target="_blank" href="https://twitter.com/md_ashik_ali"><i className="bx bxl-twitter"></i></a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;