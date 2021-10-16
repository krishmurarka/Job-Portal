import React, { Component } from "react";
import AppLogo from "./assets/WebsiteLogo.png";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <>
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
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Employment Type
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
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
