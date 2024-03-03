import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const company = this.props.company;
    console.log(company);
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        {company.logo_path && (
          <div className="my-animation-class">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                transform: "scale(0.9)",
              }}
              src={require(`../../assests/images/${company.logo_path}`)}
              alt={company.company_url}
            />
          </div>
        )}
        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{ width: company.logo_path ? "90%" : "100%" }}
          >
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {" "}
                  {company.title}{" "}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {" "}
                  {company.company}{" "}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {" "}
                  {company.duration}{" "}
                </h3>
              </div>
            </div>
            <div className="body-content">
              {company.descriptions.map((sentence) => {
                return (
                  <p className="content-list" style={{ color: theme.text }}>
                    {" "}
                    {sentence}{" "}
                  </p>
                );
              })}
              {company.website_link && (
                <a
                  href={company.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: theme.headerColor }}
                  >
                    <p className="btn" style={{ color: theme.text }}>
                      {" "}
                      Visit Website{" "}
                    </p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
