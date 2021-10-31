import React, { Component } from "react";
import "./Card.css";
import AppLogo from "./assets/WebsiteLogo.png";

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "Full Time",
      experience: "1 Years",
      role: "Mid-level"
    }

    // console.log("hello", props)
  }

  componentDidMount() {
    if (this.props.category_id == '1') {
      console.log(this.props.category_id)
      this.setState({
        title: "Intern",
        experience: "0 Years",
        role: "Fresher"
      })
    } else {
      this.setState({
        title: "Full Time",
        experience: "1 Years",
        role: "Mid-level"
      })
    }
  }

  render() {

    return (



      <span className="card-start col-xs-12 col-md-6 col-xl-4">
        <div class="card">
          {/* we need two things in card header (title + image) */}
          <div class="cardheader">
            <img src={this.props.company_logo} alt="logo" className="Card-logo" />
            <p className="Company-Name">{this.props.company_name},{this.props.job_location}</p>
          </div>
          <div class="card-body">
            <h5 class="jobTitle">{this.props.job_title}</h5>
            <div className="job-type">

              <p> {this.state.title} &nbsp;|&nbsp;</p>
              <p> {this.state.experience} &nbsp;|&nbsp;</p>
              <p> {this.state.role}</p>

            </div>
            <p class="card-text">
              We are a educational technology provider located in San
              Fransisco,We are a educational technology provider located in San
              Fransisco
            </p>
            <div className="buttons">
              <a href={this.props.url} target="_blank" class="btn btn-primary">
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
