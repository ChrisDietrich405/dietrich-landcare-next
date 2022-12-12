import React from "react";
import Image from "next/image";
import SlideShow from "../components/SlideShow";

import styles from "../styles/home.module.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="home-page-container">
          <SlideShow
            timeOut={3000}
            images={[
              {
                url: "/images/scroll-image1.png",
                title: "Hedge Trimming",
              },
              {
                url: "/images/scroll-image2.png",
                title: "Lawn Mowing",
              },
              {
                url: "/images/scroll-image3.png",
                title: "Mulching",
              },
              {
                url: "/images/scroll-image4.png",
                title: "Retaining Walls",
              },
            ]}
          ></SlideShow>
        </div>

        <div className={styles.home_page_bottom_container}>
          <section className={styles.home_page_bottom_section}>
            <h1 className={styles.home_page_title}>Dietrich Landcare</h1>
            <div className={styles.home_page_image}>
              <Image
                src="/images/regrades.jpg"
                width="430px"
                height="230px"
                alt=""
                className={styles.title_pic}
              />
            </div>
            <div className={styles.home_page_description}>
              <p>
                Our professionally trained landscape designers are committed to
                surpassing your expectations and doing everything we can to
                ensure you are proud of your landscape.
              </p>
              <p>
                {" "}
                We offer a number of different landscape services that you can
                choose from, and we take the time to customize it to your
                specific needs in order for it to reflect you best and ensure it
                aligns to the outdoor activities you enjoy the most.{" "}
              </p>{" "}
              <p>
                {" "}
                We are certified in all aspects of landscaping that offers you
                efficient and dependable services that suit your budget and
                needs best.We craft innovative patios, terraces, retaining
                walls, dry rock creeks, outdoor fireplaces, walkways,
                energy-efficient lighting and more.
              </p>
            </div>

            <button
              className={styles.contact_btn}
              onClick={() => (window.location.href = "/contact")}
            >
              Contact us today!
            </button>
          </section>
        </div>
      </>
    );
  }
}


