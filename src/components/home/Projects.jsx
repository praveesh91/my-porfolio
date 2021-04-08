import React, { Component } from 'react';
import { Fade, Slide } from 'react-reveal';

import ProjectDetailsModal from './ProjectDetailsModal';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        console.log(projects.images[0]);
        return (
          <Fade bottom duration={2000}>
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              key={projects.title}
              style={{ cursor: "pointer" }}>
              <span className="portfolio-item d-block">
                <div
                  className="foto"
                  onClick={() => detailsModalShow(projects)}>
                  <div>
                    <img
                      src={projects.images[0]}
                      alt="projectImages"
                      height="230"
                      style={{
                        marginBottom: 0,
                        paddingBottom: 0,
                        position: "relative",
                      }}
                    />
                    <span className="project-date">{projects.startDate}</span>
                    <br />
                    <p className="project-title-settings mt-3">
                      {projects.title}
                    </p>
                  </div>
                </div>
              </span>
            </div>
          </Fade>
        );
      });
    }

    return (
      <section id="projects">
        <div className="col-md-12">
          <h4 className="display-4 pt-5 mb-6 text-center text-dark">
            Projects
          </h4>
          <div className="col-md-12 mb-5 mt-5 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
