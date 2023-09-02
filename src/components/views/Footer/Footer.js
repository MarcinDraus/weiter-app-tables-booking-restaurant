
import React from 'react';
import  {Container}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-4">
      <Container>
        <p className="text-muted">copyright
          &copy; <span className="text-primary"></span> Restaurant App 2023
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
