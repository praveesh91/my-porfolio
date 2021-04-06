import React from 'react';
import Container from 'react-bootstrap/Container';
import { Fade } from 'react-reveal';

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <Fade bottom duration={1000} distance="5px">
      <footer style={bgStyle} className="mt-auto py-5 text-center ">
        <Container>
          {props.children}
          <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
          <a
            className="badge badge-dark"
            rel="noopener"
            href="https://github.com/praveesh91"
            aria-label="My GitHub">
            Praveesh Pavithran
          </a>{" "}
          using <i className="fab fa-react" />
        </Container>
      </footer>
    </Fade>
  );
};

export default Footer;
