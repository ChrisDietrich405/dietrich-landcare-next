import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";
import "./../components/Navbar/navbar.style.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
