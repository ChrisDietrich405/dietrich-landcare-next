import React from "react";
import Link from 'next/link';
import Image from 'next/image'
import axios from "axios";

import MenuMobile from "../MenuMobile";

import { GiHamburgerMenu } from "react-icons/gi";

import OutsideAlerter from "../OutsideAlerter";

import "./styles.scss";

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

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3001/api/getServices");
    this.setState({ ...this.state, services: data.services });
  }

  render() {
    return (
      <>
        <nav>
          {this.state.toggleMobileMenu && (
            <MenuMobile
              whenUserClicksOnXIcon={() => this.setToggleMobileMenu()}
            />
          )}

          <div className="logo-links">
            <Link to="/">
              <Image src="/public/images/logo.jpg" alt="logo" />
            </Link>
            <ul className="responsive-links">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="services" onClick={this.toggleShowServiceMenu}>
                <OutsideAlerter
                  clickOutside={() => this.setState({ showServiceMenu: false })}
                >
                  Services
                  {this.state.showServiceMenu ? (
                    <div className="services-menu">
                      <ul>
                        {this.state.services.map((service) => {
                          return (
                            <li key={service.id}>
                              <a
                                href={`/services#${service.permalink}`}
                                className="services-nav-link"
                              >
                                {service.name}
                              </a>
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

              <li className="nav-item">
                <Link to="/testimonials" className="nav-link">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="social-icons-container">
            <a
              href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="social-media-icon"
                icon={faFacebook}
              />
            </a>
            <a
              href="https://www.instagram.com/dietrich_landcarellc/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="social-media-icon"
                icon={faInstagram}
              />
            </a>
          </div>

          <div
            className="hamburger-menu"
            onClick={() => this.setState({ toggleMobileMenu: true })}
          >
            <GiHamburgerMenu />
          </div>
        </nav>
      </>
    );
  }
}
