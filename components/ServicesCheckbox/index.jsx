import React, { Component, useEffect, useState } from "react";
import styles from "./styles.module.css";

const ServicesCheckbox = ({ isSubmitting, change }) => {
  const [lawnCare, setLawnCare] = useState(false);
  const [stonePavers, setStonePavers] = useState(false);
  const [stumpRemoval, setStumpRemoval] = useState(false);
  const [snowRemoval, setSnowRemoval] = useState(false);

  const filteredServices = (services) => {
    const filteredServices = Object.entries(services);
    return filteredServices
      .filter((service) => service[1] === true)
      .map((service) => service[0]);
  };

  useEffect(() => {
    const services = {
      "Lawn Care": lawnCare,
      "StonePavers": stonePavers,
      "Stump Removal": stumpRemoval,
      "Snow Removal": snowRemoval,
    };
    change(filteredServices(services));
  }, [lawnCare, stonePavers, stumpRemoval, snowRemoval]);

  return (
    <div>
      <h3 className={styles.checkbox_title}>
        What services are you interested in?
      </h3>
      <form className={styles.checkbox_container}>
        <div>
          <div>
            <input
              value={lawnCare}
              onChange={(e) => setLawnCare((prevState) => !prevState)}
              name="lawn-care"
              type="checkbox"
              id="lawn-care"
            />
            <label htmlFor="lawn-care">Lawn Care</label>
          </div>
          <div>
            <input
              value={stonePavers}
              onChange={(e) => setStonePavers((prevState) => !prevState)}
              name="stone-pavers"
              type="checkbox"
              id="stone-pavers"
            />
            <label htmlFor="stone-pavers">Stone Pavers</label>
          </div>
        </div>
        <div>
          <div>
            <input
              value={stumpRemoval}
              onChange={(e) => setStumpRemoval((prevState) => !prevState)}
              name="stump-removal"
              type="checkbox"
              id="stump-removal"
            />
            <label htmlFor="stump-removal">Stump Removal</label>
          </div>
          <div>
            <input
              value={snowRemoval}
              onChange={(e) => setSnowRemoval((prevState) => !prevState)}
              name="snow-removal"
              type="checkbox"
              id="snow-removal"
            />
            <label htmlFor="snow-removal">Snow Removal</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServicesCheckbox;
