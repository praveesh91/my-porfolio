import axios from 'axios';
import React from 'react';
import { Fade, Slide } from 'react-reveal';

import codingPerson from '../../assets/lottie/codingPerson.json';
import DisplayLottie from './DisplayLottie';

const AboutMe = ({ heading, message, link }) => {
  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-5 d-none d-lg-block align-self-center">
            <Slide left duration={2000}>
              <DisplayLottie animationData={codingPerson} />
            </Slide>
          </div>
          <Fade right duration={1000}>
            <div className="col-lg-7">
              <h2 className="display-4 mb-5 text-center">{heading}</h2>
              {message.map((e) => (
                <p class="lead">{e}</p>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
