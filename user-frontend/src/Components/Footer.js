import React, { Component } from "react";
import AppLogo from "./assets/Group.png";
import "./Footer.css";


class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer" >
                    <div className="container" >
                        <img src={AppLogo} alt="" width="120rem" />
                    </div>
                    <div>
                        <span className="footer-content">
                            <h8 style={{ color: 'white' }}>Get job updates delivered to your inbox</h8>
                            {/* <br />
                            <br /> */}
                            <h5 style={{ color: 'white' }} >Subscribe to our newsletter</h5>
                        </span>

                        <span className="email-content" >
                            <form >
                                <input type="email" placeholder="Enter your email"></input>
                            </form>
                        </span>
                    </div>
                    <div className="media-container">
                        <h3>Follow us on social media</h3>
                    </div>
                    {/* <div className="social-media-container">
                        <ul className="footer-links flex-container">
                            <li><a href="https://google.com" >Instagram</a></li>
                        </ul>
                    </div> */}
                </div>
            </div >
        )
    }
}
export default Footer;