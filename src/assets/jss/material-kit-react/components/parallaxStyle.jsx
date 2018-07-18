const parallaxStyle = {
  parallax: {
    height: "80vh",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "auto"
    }
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "220px"
  },
  medium: {
    height: "420px"
  },
  accommodations: {
    height: "50px"
  }
};

export default parallaxStyle;
