import React from "react";
import styles from "../styles/services.module.css";

export default class Services extends React.Component {
  render() {
    return (
      <div className="services-main-container">
        <div className="services-container">
          <h1>Services</h1>
          <hr />
          <div className="services-description" id="lawn-care">
            <div className="services-image-description">
              <h3>Lawn Care</h3>
              <img src="" className={styles.image} alt="" />
              <p>
                Dietrich Land Care can make your lawn the envy of your
                neighborhood. Our Service Leaders and in-house agronomists (soil
                scientists) provide customized programs that eliminate weeds
                while bringing you a green, vibrant and healthy lawn.
              </p>
            </div>
          </div>
          <div className="services-description" id="power-washing">
            <div className="services-image-description">
              <h3>Power Washing</h3>
              <p>
                We are one of the leading exterior cleaning service providers
                catering to residential and commercial soft washing, pressure
                washing, power washing, pressure cleaning, and exterior property
                maintenance in Maryland. We have been washing for 5 years and
                know the "Ins and Outs" of the industry.
              </p>
            </div>
            <img src="" className={styles.image} alt="" />
          </div>
          <div className="services-description" id="snow-removal">
            <div className="image"></div>
            <div className="services-image-description">
              <img src="" className={styles.image} alt="" />
              <h3>Snow Removal</h3>
              <p>
                If you are stuck in your property and you have hard access
                outside, grab the phone and call us. You don’t want to risk
                being stuck for hours or going out at the expense of your
                safety. We’ll help you get rid of snow and keep your sidewalk
                clear.
              </p>
            </div>
          </div>
          <div className="services-description" id="stump-removal">
            <div className="services-image-description">
              <h3>Stump Removal</h3>
              <p>
                We provide the best stump removal service in the Baltimore area.
                We provide a variety of services, including stump grinding and
                removal. We have the skill and experience necessary to remove
                all types of tree stumps, offering the highest quality services
                and customer care.
              </p>
            </div>
            <img src="" className={styles.image} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
