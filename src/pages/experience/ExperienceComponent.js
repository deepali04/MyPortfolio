import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import Experiences from "../../containers/experience/Experiences";
import TopButton from "../../components/topButton/TopButton.js";
import "./ExperienceComponent.css";
import { Fade } from "react-reveal";

class Experience extends Component {
  render() {
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div"></div>
            </div>
          </Fade>
          <Experiences theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
