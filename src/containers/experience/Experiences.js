import React, { Component } from "react";
import "./Experiences.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import { companies } from "../../portfolio.js";
import { Fade } from "react-reveal";

class Experiences extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="education">
        <div className="education-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Professional Experience
            </h1>
          </Fade>
        </div>
        <div className="education-body-div">
          {companies.companies.map((company) => {
            return <ExperienceCard company={company} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Experiences;
