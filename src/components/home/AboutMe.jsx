import axios from 'axios';
import React from 'react';
import { Fade, Slide } from 'react-reveal';

import codingPerson from '../../assets/lottie/codingPerson.json';
import DisplayLottie from './DisplayLottie';

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  const handleRequest = async () => {
    const instaLink = "https://www.instagram.com/";
    const instaQuery = "/?__a=1";
    try {
      const response = await axios.get(instaLink + link + instaQuery);
      setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
    } catch (error) {
      setShowPic(false);
      console.error(error.message);
    }
  };

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
