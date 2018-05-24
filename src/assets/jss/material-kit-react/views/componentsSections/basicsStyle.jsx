import { container, title } from "assets/jss/material-kit-react.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

const basicsStyle = {
  sections: {
    padding: "70px 0"
  },
  ampPadding: {
    padding: "0 -100px"
  },
  container: {
    textAlign: "center !important",
    // spacing: "-10"
  },
  title: {
    ...title,
    marginTop: "10px",
    minHeight: "25px",
    textDecoration: "none"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  image3: {
    maxWidth: "100%",
    height: "auto"
  },
  imgFluid: {
    maxWidth: "75%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
