import { useEffect } from 'react';
import CookieConsent, { getCookieConsentValue, Cookies } from "react-cookie-consent";
import { initGA } from "../utils/ga-utils";  // Assuming this path is correct.
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const handleAcceptCookie = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      console.log("Accepted cookies. Initializing GA...");
      initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }
  };

  const handleDeclineCookie = () => {
    console.log("Declined cookies. Removing GA...");
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    console.log("Checking cookie consent value...");
    const isConsent = getCookieConsentValue();
    console.log("Cookie Consent Value:", isConsent);
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  return (
    <div className="App">
      <Component {...pageProps} />
      <CookieConsent
        className="cookie-consent-banner"
        style={{ background: "red" }}  // Temporary styling to ensure visibility
        buttonStyle={{ background: "white", color: "black" }}  // Temporary styling
        declineButtonStyle={{ background: "black", color: "white" }}  // Temporary styling
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}

export default MyApp;
