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
            <h1 className={styles.services_title}>Services</h1>
            <div className={styles.services_description} id="lawn-care">
              <div className={styles.snow_removal}>
                <div>
                  <img
                    style={{
                      borderRadius: "10px",
                      width: "375px",
                      height: "350px",
                      boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                    src="/images/lawncare.jpg"
                    className={styles.image}
                    alt="lawn-care"
                  />
                </div>
                <div>
                  <h3>Lawn Care</h3>
                  <p>
                    Dietrich Land Care can make your lawn the envy of your
                    neighborhood. We don’t believe that one size fits all, as
                    every lawn has unique needs and particular challenges in as
                    far as climate, grasses, growing seasons, and soil varieties
                    are concerned. We’ll match you with a skilled, experienced
                    lawn care provider that will work wonders on your yard.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.power_washing} id="stone-pavers">
              <div className={styles.services_image_description}>
                <h3>Stone Pavers</h3>
                <p>
                  What’s the best way to add style to your outdoor environment?
                  Hardscape designs by Dietrich Land Care. We believe your
                  outdoor environment should complement your lifestyle.From
                  natural stone walkways, brick paver patios and fire features,
                  to stunning stoops, retaining walls and built-in grills, we
                  create complete outdoor living spaces for residential
                  landscapes and deliver incredible value for commercial
                  customers.
                </p>
              </div>
              <img
                style={{
                  borderRadius: "10px",
                  width: "375px",
                  height: "350px",
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                src="/images/pavers.jpg"
                className={styles.image}
                alt="pavers"
              />
            </div>
            <div className={styles.services_description} id="rain-gardens">
              <div className={styles.snow_removal}>
                <div>
                  <img
                    style={{
                      borderRadius: "10px",
                      width: "375px",
                      height: "350px",
                      boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                    src="/images/rain-gardens.jpg"
                    className={styles.image}
                    alt="rain-gardens"
                  />
                </div>
                <div>
                  <h3>Rain Garden</h3>
                  <p>
                    Rain gardens are an effective and nice looking way to reduce
                    runoff from your property. Rain gardens are also very
                    effective at removing pollutants and reducing the volume of
                    runoff, especially when used for parking lot islands.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.stump_removal} id="stump-removal">
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
              <img
                style={{
                  borderRadius: "10px",
                  width: "375px",
                  height: "350px",
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                src="/images/stump-removal.jpg"
                className={styles.image}
                alt="stump-removal"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
