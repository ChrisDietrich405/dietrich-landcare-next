import React from "react";
import styles from "./styles.module.css";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export default class Footer extends React.Component {
  render() {
    function currentTime() {
      let time = new Date();
      let timeNow = time.getUTCFullYear();
      return timeNow;
    }
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-container-top">
            <div className="footer-tablet-container">
              <div className="footer-container-top-title">
                <h3>Contact Us</h3>
                <p>
                  <span>
                    <AiOutlinePhone />
                  </span>
                  &nbsp;(443) 608-3258
                </p>
                <p>
                  <span>
                    <AiOutlineMail />
                  </span>
                  &nbsp;office@dietrichlandcare.com
                </p>
              </div>
              <div className="footer-container-top-title">
                <h3>Serving</h3>
                <p>Towson, Lutherville and Timonium</p>
              </div>
            </div>
            <div className="footer-tablet-container">
              <div className="footer-container-top-title">
                <h3>Office Hours</h3>
                <p>Monday-Friday 7am-7:30pm</p>
                <p>Saturday 9am-3:30pm</p>
                <p>Sunday 9am-3:30pm</p>
              </div>
              <div className="footer-container-top-title">
                <h3>Follow Us</h3>
                <p>
                  <a href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436">
                    <span>
                      <BsFacebook />
                    </span>
                    &nbsp;Facebook
                  </a>
                </p>
                <p>
                  <a href="https://www.instagram.com/dietrich_landcarellc/">
                    <span>
                      <AiFillInstagram />
                    </span>
                    &nbsp;Instagram
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-container-bottom">
            <div className="footer-copyright">
              <h4>DietrichLandCare©{currentTime()}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
