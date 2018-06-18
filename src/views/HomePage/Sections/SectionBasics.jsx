import React from "react";
// react plugin that creates slider
import Nouislider from "react-nouislider";
import classNames from "classnames";
import { Link } from "react-router-dom";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import FormControlLabel from "material-ui/Form/FormControlLabel";
import Checkbox from "material-ui/Checkbox";
import Radio from "material-ui/Radio";
import Switch from "material-ui/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import Paginations from "components/Pagination/Pagination.jsx";
import Badge from "components/Badge/Badge.jsx";
import Card from "components/Card/Card.jsx";

import image1 from "assets/img/mav4.jpg"
import image2 from "assets/img/A_C.jpg"
import image3 from "assets/img/amp.png"

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

class SectionBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
  
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
            <h1>Website being built. Check out:</h1>
            <a href="/accommodations-page">
            <h1>Accommodations.</h1>
            </a>
            <GridContainer alignItems={"center"}>
              <GridItem xs={5}>
                <Link to="/vow-renewal-page">
                  <img
                    src={image2}
                    alt="..."
                    className={classes.imgRoundedCircle + " " + classes.imgFluid}
                  />
                  <h2 className={classes.title}>
                    Vow Renewal
                  </h2>
                </Link>
              </GridItem>
              <GridItem xs={2} className={classes.ampPadding}>
                <img src={image3} alt="..." className={classes.image3}/>
              </GridItem>
              <GridItem xs={5}>
              <Link to="/naming-ceremony-page">
                  <img
                    src={image1}
                    alt="..."
                    className={classes.imgRoundedCircle + " " + classes.imgFluid}
                  />
                  <h2 className={classes.title}>
                    Brit Shalom
                  </h2>
                </Link>
              </GridItem>
            </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionBasics);
