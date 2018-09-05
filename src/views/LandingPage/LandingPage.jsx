import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

import { Link } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player'

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import sound from '../../assets/sound/cwt.ogg'
const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Link to="home-page">
          <Parallax filter image={require("assets/img/landing-banner.jpg")}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12}>
                  <h1 className={classes.title}>Enter</h1>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
        </Link>
        <ReactAudioPlayer
          src={sound}
          autoPlay
        />
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
