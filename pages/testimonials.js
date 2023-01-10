import React from "react";
import Image from "next/image";

import styles from "../styles/testimonials.module.css";

import { ImQuotesLeft } from "react-icons/im";

export default class Testimonials extends React.Component {
  render() {
    return (
      <main className={styles.testimonial}>
        <h1 className={styles.title}>Testimonials</h1>
        <div className={styles.testimonial_container}>
          <div className="row">
            <div className="col-12 col-lg-6 text-center testimonial-pic">
              {" "}
              <img
                style={{
                  borderRadius: "10px",
                  width: "375px",
                  height: "350px",
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                src="/images/landcareTest.jpg"
                className={styles.image}
                alt="stump-removal"
              />
            </div>
            <div
              className={`"col-12 col-lg-6 text-center" ${styles.testimonial_container_client}`}
            >
              <div className={styles.testimonial_person}>
                <span>
                  <h3>Kathleen R, Loch Raven</h3>
                </span>
              </div>
              <p className={styles.quote}>
                <span>
                  <ImQuotesLeft style={{ marginBottom: "8px" }} />
                </span>
                &nbsp;Devin and his crew did an excellent job trimming and
                clearing out overgrown bushes as well as mulching on an older
                home. He showed up when he said he would, his staff was very
                accommodating and they got it done quickly. Highly recommend his
              </p>
            </div>
          </div>
        </div>
        <div className={styles.testimonial_container}>
          <div className="row">
            <div
              className={`"order-lg-0 order-1 col-12 col-lg-6 text-center" ${styles.testimonial_container_client}`}
            >
              <div className={styles.testimonial_person}>
                <span>
                  <h3>Annie S, Towson</h3>
                </span>
              </div>
              <p className={styles.quote}>
                <span>
                  <ImQuotesLeft style={{ marginBottom: "8px" }} />
                </span>
                &nbsp; I've been looking for help with our landscaping and yard
                cleanup/mulching for quite awhile. A few people I contacted were
                too expensive or never followed through. I found Dietrich Land
                care on Nextdoor through several recommendations. Devin and his
                team did an AMAZING job. They surpassed my expectations and were
                reasonably priced. I would definitely recommend them! Super
                awesome 5 stars!!!!
              </p>
            </div>
            <div className="order-lg-1 order-0 col-12 col-lg-6 text-center testimonial-pic ">
              <img
                style={{
                  borderRadius: "10px",
                  width: "375px",
                  height: "350px",
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                src="/images/landcareTest2.jpg"
                className={styles.image}
                alt="stump-removal"
              />
            </div>
          </div>
        </div>
        <div className={styles.testimonial_container}>
          <div className="row">
            <div className="col-12 col-lg-6 text-center testimonial-pic ">
              <img
                style={{
                  borderRadius: "10px",
                  width: "375px",
                  height: "350px",
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                src="/images/landcareTest3.jpg"
                className={styles.image}
                alt="stump-removal"
              />
            </div>
            <div
              className={`"col-12 col-lg-6 text-center" ${styles.testimonial_container_client}`}
            >
              <div className={styles.testimonial_person}>
                <span>
                  <h3>Laura A, Lutherville</h3>
                </span>
              </div>
              <p className={styles.quote}>
                <span>
                  <ImQuotesLeft style={{ marginBottom: "8px" }} />
                </span>
                &nbsp; Dietrich Land Care recently did a huge backyard cleanup
                project for us, and it truly exceeded our expectations. They
                arrived right on time and went to town on our backyard with a
                huge team. The work was completed ahead of schedule and with
                great care and attention to detail. Truly, our backyard has
                never looked better. Give them a call - you won’t be
                disappointed!
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
