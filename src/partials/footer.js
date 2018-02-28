import React, { Component } from "react";
import { Link } from "../components";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__routes">
            <Link content="Contact" href="/contact" />
            <Link content="FAQ" href="/faq" />
          </div>
          <div className="footer__rights">
            <a href="/">Terms of Use</a>
            <a href="/">Privacy Policy</a>
          </div>
          <div className="footer__social">
            <a href="/">Twitter</a>
            <a href="/">Facebook</a>
            <a href="/">TradingView</a>
            <a href="/">Medium</a>
          </div>
          <button className="footer__download"></button>
        </div>
      </footer>
    );
  }
}

export default Footer;
