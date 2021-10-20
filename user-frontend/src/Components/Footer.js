import React, { Component } from "react";
import AppLogo from "./assets/Group.png";
import "./Footer.css";


class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer" >
                    <div className="container  col-sm-4 col-md-4">
                        <img src={AppLogo} alt=""  />
                    </div>
                    <div className="footer-text-container  col-sm-8 col-md-8">
                        {/* <div className="col-sm-2"></div> */}
                        <div className="footer-content ">
                            <h6 style={{ color: 'white' }}>Get job updates delivered to your inbox</h6>
                            <h5 style={{ color: 'white' }} >Subscribe to our newsletter</h5>
                        </div>
                        <div className="email-content" >
                            <form >
                                <input type="email" placeholder=" Email"></input>
                            </form>
                        </div>
                        
                        
                    </div>
                   
                    {/* <div className="media-container">
                        <h3>Follow us on social media</h3>
                    </div> */}
                    {/* <div className="social-media-container">
                        <ul className="footer-links flex-container">
                            <li><a href="https://google.com" >Instagram</a></li>
                        </ul>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-7"><hr className="horizontalLine"/></div>
                    
                </div>
            </div >
        )
    }
}
export default Footer;