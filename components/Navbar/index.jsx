import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import MenuMobile from "../MenuMobile";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import OutsideAlerter from "../OutsideAlerter";

import styles from "./styles.module.css";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showServiceMenu: false,
      toggleMobileMenu: false,
      showModal: true,
      services: [],
    };
    this.toggleShowServiceMenu = this.toggleShowServiceMenu.bind(this);
    this.setToggleMobileMenu = this.setToggleMobileMenu.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  setToggleMobileMenu() {
    this.setState({ toggleMobileMenu: !this.state.toggleMobileMenu });
  }

  toggleShowServiceMenu() {
    this.setState({ showServiceMenu: !this.state.showServiceMenu });
  }

//   async componentDidMount() {
//     const { data } = await axios.get("http://localhost:3001/api/getServices");
//     this.setState({ ...this.state, services: data.services });
//   }

  render() {
    return (
      <>
        <nav className={styles.nav_container}>
          {this.state.toggleMobileMenu && (
            <MenuMobile
              whenUserClicksOnXIcon={() => this.setToggleMobileMenu()}
            />
          )}

          <div className={styles.logo_links}>
            <a href="/">
              <Image src="/images/logo.jpg" width="100px" height="100px" alt="logo" />
            </a>
            <ul className={styles.responsive_links}>
              <li className={styles.nav_item}>
                <a href="/" className={styles.nav_link}>
                  Home
                </a>
              </li>

              <li
                className={styles.services}
                onClick={this.toggleShowServiceMenu}
              >
                <OutsideAlerter
                  clickOutside={() => this.setState({ showServiceMenu: false })}
                >
                  Services
                  {this.state.showServiceMenu ? (
                    <div className={styles.services_menu}>
                      <ul className={styles.services_list}>
                        {this.state.services.map((service) => {
                          return (
                            <li
                              className={styles.service_item}
                              key={service.id}
                            >
                              <Link to={`/services#${service.permalink}`}
                                className={styles.services_nav_link}
                              >
                                {service.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </OutsideAlerter>
              </li>

              <li className={styles.nav_item}>
                <a href="/testimonials" className={styles.nav_link}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/contact" className={styles.nav_link}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.social_icons_container}>
            <a href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className={styles.social_media_icon} />
            </a>
            <a href="https://www.instagram.com/dietrich_landcarellc/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className={styles.social_media_icon} />
            </a>
          </div>

          <div
            className={styles.hamburger_menu}
            onClick={() => this.setState({ toggleMobileMenu: true })}
          >
            <GiHamburgerMenu />
          </div>
        </nav>
      </>
    );
  }
}
