import "../styles/globals.css";
import config from "react-reveal/globals";

config({ ssrFadeout: true });
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
