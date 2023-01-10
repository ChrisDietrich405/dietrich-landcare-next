import React from "react";
import axios from "axios";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

import classnames from "classnames";
import * as Validator from "validatorjs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServicesCheckbox from "../components/ServicesCheckbox";

import styles from "../styles/contact.module.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      service: "",
      error: {},
      isSubmitting: false,
      services: [],
    };
  }

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_SERVICE_ID);
    
    
  // }

  render() {
    return (
      <main className={styles.contact_viewport}>
        <div className={styles.contact_header}>
          <h1 className={styles.contact_title}>Let's get in touch!</h1>
          <p>
            Call or Text Us: Monday-Saturday 7am-7:30 pm. Saturday: 9am-3:30pm
          </p>
        </div>

        <ul className={styles.contact_info}>
          <li className={styles.contact_information}>
            <span className={styles.contact_info_icons}>
              <AiFillPhone />
            </span>
            <p>(443) 608-3258</p>
          </li>
          <li className={styles.contact_information}>
            <span className={styles.contact_info_icons}>
              <MdEmail />
            </span>

            <p>office@dietrichlandcare.com</p>
          </li>
          <li className={styles.contact_information}>
            <span className={styles.contact_info_icons}>
              <ImLocation2 />
            </span>

            <p>Towson, MD 21239</p>
          </li>
        </ul>

        <div className={styles.contact_social_media}>
          <div className={styles.contact_facebook}>
            <a
              href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
              rel="noreferrer"
              target="_blank"
            >
              <BsFacebook style={{ color: "#448c7e" }} size={40} />
            </a>
          </div>
          <div className={styles.contact_instagram}>
            <a
              href="https://www.instagram.com/dietrich_landcarellc/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillInstagram style={{ color: "#448c7e" }} size={45} />
            </a>
          </div>
        </div>

        <div className={styles.contact_services}>
          <ServicesCheckbox
            isSubmitting={this.state.isSubmitting}
            change={(targetValue) => {
              this.setState({ service: targetValue });
            }}
          />

          <div className={styles.contact_form}>
            {"service" in this.state.error && (
              <p className="error-message">
                {this.state.error.service.join(",")}
              </p>
            )}
          </div>
          <form
            className={styles.contact_form_container}
            onSubmit={this.onSubmit.bind(this)}
          >
            <div className={styles.contact_form_inputs}>
              <div className={styles.contact_form_section}>
                <div
                  className={classnames("contact-fields", {
                    filled: this.state.firstName !== "",
                  })}
                >
                  <label className={styles.label_name} htmlFor="firstName">
                    First Name
                  </label>
                  <div className={styles.input_container}>
                    <input
                      className={styles.input_name}
                      id="firstName"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={(event) => {
                        this.setState({ firstName: event.target.value });
                      }}
                    />{" "}
                    {"firstName" in this.state.error && (
                      <p className={styles.error_message}>
                        {this.state.error.firstName.join(",")}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={classnames("contact-fields", {
                    filled: this.state.lastName !== "",
                  })}
                >
                  <label className={styles.label_name} htmlFor="lastName">
                    Last Name
                  </label>
                  <div className={styles.input_container}>
                    <input
                      className={styles.input_name}
                      id="lastName"
                      value={this.state.lastName}
                      onChange={(event) => {
                        this.setState({ lastName: event.target.value });
                      }}
                    />{" "}
                    {"lastName" in this.state.error && (
                      <p className={styles.error_message}>
                        {this.state.error.lastName.join(",")}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={classnames("contact-fields", {
                    filled: this.state.email !== "",
                  })}
                >
                  <label className={styles.label_name} htmlFor="Email">
                    Email
                  </label>
                  <div className={styles.input_container}>
                    <input
                      className={styles.input_name}
                      id="Email"
                      value={this.state.email}
                      onChange={(event) => {
                        this.setState({ email: event.target.value });
                      }}
                    />{" "}
                    {"email" in this.state.error && (
                      <p className={styles.error_message}>
                        {this.state.error.email.join(",")}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={classnames("contact-fields", {
                    filled: this.state.phone !== "",
                  })}
                >
                  {" "}
                  <label className={styles.label_name} htmlFor="Phone">
                    Phone
                  </label>
                  <div className={styles.input_container}>
                    <input
                      className={styles.input_name}
                      id="Phone"
                      value={this.state.phone}
                      onChange={(event) => {
                        this.setState({ phone: event.target.value });
                      }}
                    />
                    {"phone" in this.state.error && (
                      <p className={styles.error_message}>
                        {this.state.error.phone.join(",")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.contact_form_section}>
                <div
                  className={classnames("message-text", "contact-fields", {
                    filled: this.state.message !== "",
                  })}
                >
                  <label className={styles.label_name} htmlFor="Message">
                    Message
                  </label>
                  <div className={styles.input_container}>
                    <textarea
                      className={styles.textarea_name}
                      id="textarea-responsive"
                      value={this.state.message}
                      onChange={(event) => {
                        this.setState({ message: event.target.value });
                      }}
                    ></textarea>
                    {"message" in this.state.error && (
                      <p className={styles.error_message}>
                        {this.state.error.message.join(",")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button
              disabled={this.state.isSubmitting}
              className={styles.contact_submit_btn}
            >
              {this.state.isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        <ToastContainer />
      </main>
    );
  }
  onSubmit(event) {
    event.preventDefault();

    this.setState({ error: {} });

    const validator = new Validator(
      this.state,
      {
        firstName: "required",
        lastName: "required",
        email: "required|email",
        phone: "required",
        service: "required",
        message: "required",
      },
      {
        "required.firstName": "The name field is required",
        "required.lastName": "The name field is required",
      }
    );
    if (validator.passes()) {
      const services = this.state.service.join(", ");

      var templateParams = {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        services,
        message: this.state.message,
      };

      this.setState({ isSubmitting: true });

      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            this.setState({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
              isSubmitting: false,
              services: [],
              submitted: true,
            });

            this.setState({ submitted: false });

            toast.success("Your message was successfully submitted");
          },
          (error) => {
            toast.error("Your message wasn't successfully submitted");
            this.setState({ isSubmitting: false });
          }
        );
    } else {
      this.setState({ error: validator.errors.errors });
    }
  }
}
