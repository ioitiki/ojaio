import React from "react";

import { Link } from "react-router-dom";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

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
