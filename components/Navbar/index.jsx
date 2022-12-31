import React from "react";
import Link from "next/link";
import Image from "next/image";

// import { GiHamburgerMenu } from "react-icons/gi";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import styles from "./styles.module.css";

const Navbar = () => {
  const services = [
    { title: "Lawn Care", permalink: "lawn-care" },
    { title: "Power Washing", permalink: "power-washing" },
    { title: "Snow Removal", permalink: "snow-removal" },
    { title: "Stump Removal", permalink: "stump-removal" },
  ];

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand mr-4">
            <Image
              src="/images/logo.jpg"
              width="80px"
              height="80px"
              alt="logo"
            />
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            {services && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {services.map((service, key) => {
                    return (
                      <li key={key}>
                        <a
                          className="dropdown-item"
                          href={`/services#${service.permalink}`}
                        >
                          {service.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            )}
            <li className="nav-item">
              <Link href="/testimonials">
                <a className="nav-link" aria-current="page">
                  Testimonials
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link" aria-current="page">
                  Contact
                </a>
              </Link>{" "}
            </li>
          </ul>
          <div className={styles.social_icons_container}>
            <a
              href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className={styles.social_media_icon} />
            </a>
            <a
              href="https://www.instagram.com/dietrich_landcarellc/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className={styles.social_media_icon} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
