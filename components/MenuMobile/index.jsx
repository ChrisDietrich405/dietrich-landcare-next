import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import styles from "./styles.module.css";

export default function MenuMobile({ whenUserClicksOnXIcon }) {
  return (
    <div className={styles.menuMobile}>
      <ul className={styles.menuMobile_responsive_links}>
        <li className={styles.menuMobile_nav_item}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services#lawn-care">Lawn Care</Link>
        </li>
        <li>
          <Link to="/services#power-washing">Power Washing</Link>
        </li>
        <li>
          <Link to="/services#snow-removal">Snow Removal</Link>
        </li>
        <li>
          <Link to="/services#stump-removal">Stump Removal</Link>
        </li>
        <li>
          <Link to="/services#demolition">Demolition & Hauling</Link>
        </li>
        <li>
          <Link to="/services#regrades">Regrades</Link>
        </li>

        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.menuMobile_social_icons_container}>
        <Link to="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook className={styles.social_media_icon} />
        </Link>
        <Link to="https://www.instagram.com/dietrich_landcarellc/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className={styles.social_media_icon} />
        </Link>
      </div>

      <div
        className={styles.menuMobile_close}
        onClick={() => whenUserClicksOnXIcon()}
      >
        <AiFillCloseCircle className={styles.close - button} size={50} />
      </div>
    </div>
  );
}
