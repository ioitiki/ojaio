import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'

import vowRenewalPageStyle from "assets/jss/material-kit-react/views/vowRenewalPage.jsx";
import HeaderLinksSM from "../../components/Header/HeaderLinksSM";

class VowRenewalPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          brand={<FontAwesomeIcon icon={faHome} size="lg" />}
          leftLinks={<HeaderLinks />}
          rightLinks={<HeaderLinksSM />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax medium filter image={require("assets/img/banner.jpeg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Vow Renewal</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <h1 className={classes.title}>Vow Renewal</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(vowRenewalPageStyle)(VowRenewalPage);
