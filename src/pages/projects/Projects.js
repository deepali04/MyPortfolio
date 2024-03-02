import React, { Component } from "react";
import Header from "../../components/header/Header";

import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";

import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer.js";
import TopButton from "../../components/topButton/TopButton.js";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <div className="projects-main">
          <Header theme={theme} />
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="projects-heading-div">
                <h3
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {" "}
                  {projectsHeader.title}{" "}
                </h3>
              </div>
            </Fade>
          </div>

          <div className="repo-cards-div-main">
            {ProjectsData.data.map((repo) => {
              return <GithubRepoCard repo={repo} theme={theme} />;
            })}
          </div>

          <Button
            text={"More Projects"}
            className="project-button"
            href="https://github.com/deepali04/"
            newTab={true}
            theme={theme}
          />

          <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
          <TopButton theme={this.props.theme} />
        </div>
      </>
    );
  }
}

export default Projects;
