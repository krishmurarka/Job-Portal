import React, { Component } from "react";
import "./Card.css";
import AppLogo from "./assets/WebsiteLogo.png";

class Card extends Component {


  render() {
    return (

      <span className="card-start col-xs-12 col-md-6 col-xl-4">
        <div class="card">
          {/* we need two things in card header (title + image) */}
          <div class="cardheader">
            <img src={AppLogo} alt="logo" className="Card-logo" />
            <p className="Company-Name">Swiggy,Bengaluru Urban</p>
          </div>
          <div class="card-body">
            <h5 class="jobTitle">Backend Engineer</h5>
            <div className="job-type">
              <p>Full Time &nbsp;|&nbsp;</p>
              <p> 2-4 Years &nbsp;|&nbsp;</p>
              <p> Mid-level</p>
            </div>
            <p class="card-text">
              We are a educational technology provider located in San
              Fransisco,We are a educational technology provider located in San
              Fransisco
            </p>
            <div className="buttons">
              <a href="#" class="btn btn-primary">
                Apply Now
              </a>
              <a href="#" class="btn btn-primary">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;view&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            </div>
          </div>
        </div>
      </span>
    );
  }
}
export default Card;