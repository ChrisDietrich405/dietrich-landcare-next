import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.css";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} onClick={() => alert("111")} />;
    </Layout>
  );
}

export default MyApp;
