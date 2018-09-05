import { container, title, eventFont } from "assets/jss/material-kit-react.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

const scheduleStyle = {
  sections: {
    padding: "70px 0"
  },
  ampPadding: {
    padding: "0 -100px"
  },
  container,
  textCenter: {
    textAlign: "center"
  },
  title: {
    ...title,
    marginTop: "10px",
    minHeight: "25px",
    textDecoration: "none"
  },
  eventTitle: {
    fontFamily: '"Dancing Script", cursive',
    fontWeight: "100",
    fontSize: "45px"
  },
  eventStatus: {
    fontWeight: "250",
    fontSize: "20px",
    marginTop: "1px",
    lineHeight: "19px",
    color: "#cc0000"
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

export default scheduleStyle;
