import React, { Component } from "react";
import GitLogo from "../img/Github.png";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <section id="FOOTER">
        <div className="copyRights">
          COPYRIGHT © 2018 WOO GO EUN ALL RIGHTS RESERVED.
        </div>
        <div className="imageLinks">
          <a href="https://github.com/Goeun-Woo/myfirstweb">
            <img src={GitLogo} alt="github" width="50" height="50" />
          </a>
        </div>
      </section>
    );
  }
}

export default Footer;
