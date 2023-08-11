import ReactGA from "react-ga";

export const initGA = (trackingID) => {
  ReactGA.initialize(trackingID);
  ReactGA.pageview(window.location.pathname + window.location.search);
};
