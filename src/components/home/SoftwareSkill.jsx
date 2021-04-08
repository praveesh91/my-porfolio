import React from 'react';
import { Fade, Slide } from 'react-reveal';

export default function SoftwareSkill(props) {
  return (
    <section id="skills" className="pb-5" style={{ backgroundColor: "black" }}>
      <h4 className="display-4 pt-5 text-center text-secondary">Skills</h4>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.skillsSection.map((skills, i) => {
            return (
              <Fade right duration={1000}>
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              </Fade>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
