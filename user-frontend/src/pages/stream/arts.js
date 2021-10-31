import React, { Component } from 'react'
import Card from "../.././Components/Card.js";
import Footer from "../.././Components/Footer.js"
import Api from "../.././Components/Api.js"
export class arts extends Component {
    render() {
        return (
            <>
            <div>
            <p className="featurehead" title="swiggy bangaluru urban">Arts listing</p>
            </div>
            <div className="card_hi row">
                <Api   type="findAllStreams" count="A"/>
            </div>
            <div className = "divison-container"style={{ backgroundColor: 'white' }}>google ads</div>
            <div className="job-listing-banner-container text-center" style={{ marginTop: "8rem" }}>Contact us personalized job listings</div>
            
          </>
        )
    }
}

export default arts
