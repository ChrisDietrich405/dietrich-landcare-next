import React from "react";

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
        <a href="/" className="navbar-brand">
          <img
            src="/images/logo.jpg"
            alt="Dietrich Landcare"
          />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            {services && (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
              <a className="nav-link active" aria-current="page" href="/testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

}

export default Navbar;