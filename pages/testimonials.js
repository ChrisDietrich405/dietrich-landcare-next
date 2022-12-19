import React from "react";
import Image from "next/image";

import styles from "../styles/testimonials.module.css";

import { ImQuotesLeft } from "react-icons/im";

export default class Testimonials extends React.Component {
  render() {
    return (
      <div className={styles.testimonial}>
        <h1 className={styles.title}>Testimonials</h1>
        <div className={styles.testimonial_container}>
          <div className="row">
            <div className="col-12 col-lg-6 text-center testimonial-pic">
              {" "}
              <Image
                borderRadius="10px"
                width="350px"
                height="350px"
                src="/images/testimonial-landscape1.jpg"
                alt="beautiful and clean garden"
              />
            </div>
            <div className="col-12 col-lg-6 text-center testimonial-container-client">
              <div className={styles.testimonial_person}>
                <Image
                  borderRadius="10px"
                  width="100px"
                  height="100px"
                  src="/images/testimonial-person1.jpeg"
                  alt="woman's profile"
                />
                <span>Mary Smith, Loch Raven</span>
              </div>
              <p className={styles.quote}>
                <span>
                  <ImQuotesLeft />
                </span>
                &nbsp;I had fallen behind on my gardening and called Dietrich
                Landcare for a clean up/regular landscaping service. They were
                prompt in getting back to my inquiry. Devin came out within the
                week to take a look at the property and get me a quote. He was
                quick, professional and gave me a realistic timeline of when I
                could be fit into their schedule. I would not hesitate to
                recommend this landscaping company to anyone.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.testimonial_container}>
          <div className="row">
            <div className="order-lg-0 order-1 col-12 col-lg-6 text-center testimonial-container-client">
              <div className={styles.testimonial_person}>
                <Image
                  borderRadius="10px"
                  width="100px"
                  height="100px"
                  src="/images/testimonial-person1.jpeg"
                  alt="woman profile"
                />
                <span>&nbsp;Alicia Jones, Towson</span>
              </div>
              <p className={styles.quote}>
                <span>
                  <ImQuotesLeft />
                </span>
                &nbsp; Devin has been amazing to work with. We've been using
                them for a few months for landscape maintenance and have just
                recently used them to remove a couple dead trees. The level of
                service and design considerations have been far above anyone
                I've worked with in the past. The entire team was professional
                down to the last detail.
              </p>
            </div>
            <div className="order-lg-1 order-0 col-12 col-lg-6 text-center testimonial-pic ">
              <Image
                borderRadius="10px"
                width="350px"
                height="350px"
                src="/images/testimonial-landscape2.jpg"
                alt="testimonial landscape"
              />
            </div>
          </div>
        </div>
        <div className={styles.testimonial_container}>
          <div className="row">
            <div className="col-12 col-lg-6 text-center testimonial-pic ">
              <Image
                borderRadius="10px"
                width="350px"
                height="350px"
                src="/images/testimonial-landscape3.jpg"
                alt=""
              />
            </div>
            <div className="col-12 col-lg-6 text-center testimonial-container-client">
              <div className={styles.testimonial_person}>
                <Image
                  borderRadius="10px"
                  width="100px"
                  height="100px"
                  src="/images/testimonial-person1.jpeg"
                  alt="man's profile"
                />
                <span>Robert Greene, Lutherville</span>
              </div>
              <p className={styles.quote}>
                <span>
                  <ImQuotesLeft />
                </span>
                &nbsp; Highly recommend! All of the workers were all
                professional and friendly. Devin was patient and informative
                throughout, from the planning stages to the final product. Our
                new lawn and patio look even better than we imagined!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
