// import './SoftwareSkill.css';
import React from 'react';

// import { skillsSection } from '../../portfolio';

export default function SoftwareSkill(props) {
  return (
    <section id="skills" className="pb-5" style={{ backgroundColor: "black" }}>
      <h4 className="display-4 pt-5 text-center text-secondary">Skills</h4>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.skillsSection.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
