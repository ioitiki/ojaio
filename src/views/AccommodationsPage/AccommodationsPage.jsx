import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import Carousel from "react-slick";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";


import vowRenewalPageStyle from "assets/jss/material-kit-react/views/vowRenewalPage.jsx";
import HeaderLinksSM from "../../components/Header/HeaderLinksSM";
import Airbnb from "./Sections/Airbnb.jsx";
import HotelDeluxe from "./Sections/HotelDeluxe.jsx";
import MarkSpencer from "./Sections/MarkSpencer.jsx";
import Paramount from "./Sections/Paramount.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";

class AccommodationsPage extends React.Component {
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
        <Parallax medium filter image={require("assets/img/accommodations.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Accommodations</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionCarousel />
          <Airbnb />
          <HotelDeluxe />
          <MarkSpencer />
          <Paramount />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(vowRenewalPageStyle)(AccommodationsPage);
