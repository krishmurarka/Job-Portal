import React, { Component } from "react";
import AppLogo from "./assets/WebsiteLogo.png";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <>
        {/* 1st col of Navbar i.e. logo and contact us  */}
        <div>
        
          <nav className="navbar navbar-light ">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={AppLogo} alt="" width="60%" />
              </a>
              <a className="nav-link  Contact" aria-current="page" href="#">
                Contact Us
              </a>
            </div>
          </nav>
        </div>

        {/* 2nd col of Navbar i.e. Employement Type stream  */}
        <nav class="navbar navbar-expand-lg navbar-light second-navbar">
          <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Employment type dropdown */}
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{color: "BLACK"}}
                  >
                    Employment Type
                    <span className="gapping"></span>
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Full Time (0-2yrs Exp)
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Intern / Part Time
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Streams Down Down */}
                <li class="nav-item dropdown">
                  
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{color: "BLACK"}}
                  >
                    Stream Type
                    <span className="gapping"></span>
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Science
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                          Commerce
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                          Arts
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
