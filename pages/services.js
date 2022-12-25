import React from "react";
import Image from "next/image";
import styles from "../styles/services.module.css";
import Head from "next/head";

export default class Services extends React.Component {
  render() {
    return (
      <>
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="Services provides a list of the services Dietrich Landcare, for example power washing,"
        />
      </Head>
        <div className={styles.services_main_container}>
          <div className={styles.services_container}>
            <h1>Services</h1>
            <hr />
            <div className={styles.services_description} id="lawn_care">
              <div className={styles.snow_removal}>
                <div>
                  <Image
                    height={470}
                    width={470}
                    src="/images/snow-removal.png"
                    className={styles.image}
                    alt="snow-removal"
                  />
                </div>
                <div>
                  <h3>Lawn Care</h3>
                  <p>
                    Dietrich Land Care can make your lawn the envy of your
                    neighborhood. Our Service Leaders and in-house agronomists
                    (soil scientists) provide customized programs that eliminate
                    weeds while bringing you a green, vibrant and healthy lawn.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.services_description} id="power-washing">
              <div className={styles.services_image_description}>
                <h3>Power Washing</h3>
                <p>
                  We are one of the leading exterior cleaning service providers
                  catering to residential and commercial soft washing, pressure
                  washing, power washing, pressure cleaning, and exterior
                  property maintenance in Maryland. We have been washing for 5
                  years and know the "Ins and Outs" of the industry.
                </p>
              </div>
              <Image
                height={370}
                width={370}
                src="/images/snow-removal.png"
                className={styles.image}
                alt="snow-removal"
              />
            </div>
            <div className={styles.services_description} id="snow-removal">
              <div className={styles.services_image_description}>
                <Image
                  height={370}
                  width={370}
                  src="/images/snow-removal.png"
                  className={styles.image}
                  alt="snow-removal"
                />
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
            <div className={styles.services_description} id="stump-removal">
              <div className={styles.services_image_description}>
                <h3>Stump Removal</h3>
                <p>
                  We provide the best stump removal service in the Baltimore
                  area. We provide a variety of services, including stump
                  grinding and removal. We have the skill and experience
                  necessary to remove all types of tree stumps, offering the
                  highest quality services and customer care.
                </p>
              </div>
              <Image
                height={370}
                width={370}
                src="/images/snow-removal.png"
                className={styles.image}
                alt="snow-removal"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
