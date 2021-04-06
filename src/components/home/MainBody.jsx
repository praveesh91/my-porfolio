import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import emoji from 'react-easy-emoji';
import { Fade } from 'react-reveal';
import Typist from 'react-typist';

const MainBody = React.forwardRef(
  ({ gradient, title, message, subTitle, icons, resume }, ref) => {
    return (
      <Fade left duration={1000} distance="-20px">
        <Jumbotron
          fluid
          id="home"
          style={{
            background: `linear-gradient(136deg,${gradient})`,
            backgroundSize: "1200% 1200%",
          }}
          className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
          <div id="stars"></div>
          <Container className="text-center">
            <h1 ref={ref} className="display-3">
              {title}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <Typist className="lead typist" cursor={{ show: false }}>
              {" "}
              <h3>{message}</h3>
            </Typist>
            <Typist className="lead typist p-3" cursor={{ show: false }}>
              {subTitle}
            </Typist>
            <div className="p-3">
              {icons.map((icon, index) => (
                <a
                  key={`social-icon-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split("-")[1]}`}>
                  <i
                    className={`fab ${icon.image}  fa-3x socialicons`}
                    style={{ paddingRight: "20px" }}
                  />
                </a>
              ))}
            </div>
            <p className="p-5">
              <a
                className="btn btn-outline-light btn-lg "
                style={{ marginRight: "5px" }}
                href="#aboutme"
                role="button"
                aria-label="Learn more about me">
                More about me
              </a>
              <a
                className="btn btn-outline-light btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV">
                Resume
              </a>
            </p>
          </Container>
        </Jumbotron>
      </Fade>
    );
  }
);

export default MainBody;
