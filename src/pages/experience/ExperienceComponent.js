import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import Experiences from "../../containers/experience/Experiences";
import TopButton from "../../components/topButton/TopButton.js";
import "./ExperienceComponent.css";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg.js";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <ExperienceImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Experience
                </h1>
                <h3
                  className="heading-sub-text"
                  style={{ color: theme.text }}
                ></h3>
              </div>
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
