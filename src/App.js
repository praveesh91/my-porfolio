import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./components/Footer";
import AboutMe from "./components/home/AboutMe";
import Experience from "./components/home/Experience";
import GetInTouch from "./components/home/GetInTouch.jsx";
import MainBody from "./components/home/MainBody";
import Projects from "./components/home/Projects";
import SoftwareSkill from "./components/home/SoftwareSkill";
import Loading from "./components/loading/Loading";
import Navbar from "./components/Navbar";
import {
  about,
  experience,
  getInTouch,
  mainBody,
  navBar,
  projects,
} from "./editable-stuff/config.js";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        subTitle={mainBody.subTitle}
        icons={mainBody.icons}
        ref={ref}
        resume={mainBody.resume}
      />
      {about.show && (
        <AboutMe heading={about.heading} message={about.message} />
      )}
      <SoftwareSkill skillsSection={about.softwareSkills} />
      <Projects resumeProjects={projects} resumeBasicInfo={projects} />
      <Experience resumeExperience={experience} resumeBasicInfo={experience} />
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {};
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
