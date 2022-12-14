import React from "react";
import Image from "next/image";
import Head from "next/head";

import SlideShow from "../components/SlideShow";
import styles from "../styles/home.module.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Dietrich Land Care</title>
          <meta
            name="description"
            content="Dietrich Land Care is a landscaping company specializing in fence installation, stump removal, snow removal, regrades and mulch installation "
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://example.com" />
          <meta property="og:title" content="Dietrich Land Care" />
          <meta
            property="og:description"
            content="Dietrich Land Care is a landscaping company specializing in fence installation, stump removal, snow removal, regrades and mulch installation "
          />
          <meta property="og:image" content="https://example.com/logo.png" />

          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-16x16.png"
            sizes="16x16"
          />
        </Head>

        <div className="home-page-container">
          <SlideShow
            timeOut={3000}
            images={[
              {
                url: "/images/scroll-image1.jpg",
                title: "Fence Installation",
              },
              {
                url: "/images/scroll-image2.jpg",
                title: "Sod Installation",
              },
              {
                url: "/images/scroll-image3.jpg",
                title: "Mulch Installation",
              },
            ]}
          ></SlideShow>
        </div>

        <main className={styles.home_page_bottom_container}>
          <section className={styles.home_page_bottom_section}>
            <h1 className={styles.home_page_title}>Dietrich Land Care</h1>
            <div className={styles.home_page_image}>
              <img
                src="/images/regrades.jpg"
                width="630px"
                height="330px"
                alt=""
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              />
            </div>
          </section>
          <section>
            <div className={styles.home_page_description}>
              <p>
                Our professionally trained landscape crew is committed to going
                beyond your expectations and doing everything we can to ensure
                you are proud of your landscape.
              </p>
              <p>
                {" "}
                We provide many different landscape services that you can choose
                from, and we take the time to customize them to your individual
                needs. Our end goal is to ensure that your property reflects your individuality.{" "}
              </p>{" "}
              <p>
                {" "}
                We are certified in all areas of landscaping. Our team is able
                to deliver efficient and dependable services that suit your
                budget and needs best. We craft innovative patios,
                retaining walls, rain gardens, walkways, fences
                and more!
              </p>
            </div>

            <button
              className={styles.contact_btn}
              onClick={() => (window.location.href = "/contact")}
            >
              Contact us today!
            </button>
          </section>
        </main>
      </>
    );
  }
}
