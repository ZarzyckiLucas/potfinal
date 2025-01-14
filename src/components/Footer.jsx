import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">LOGO</div>
          <div className="sb__footer-links_div">
            <h4>LOCATION</h4>
            <a href="/">
              <p>
                El Corte Ingles El Capricho, 1 planta Avda. Bulevar Príncipe
                Alfonso de Hohenlohe 2
              </p>
            </a>
            <p>29600 Marbella, Málaga</p>
          </div>
          <div className="sb__footer-links_div">
            <h4>CONTACT</h4>
            <a href="/">
              <p>contact@gmail.com</p>
            </a>
            <a href="/">
              <p>+34 123 45 67 89</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p>
                <a href="">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </p>
              <p>
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </p>
              <p>
                <a href="">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </p>
              <p>
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@2024 PoolOfTalents. All rights reserved.</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy Policy</p>
              </div>
            </a>
            <a href="/cookies">
              <div>
                <p>Cookies Policy</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
