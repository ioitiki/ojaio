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
import image0 from "assets/img/hotels/airbnb.jpg";
import image1 from "assets/img/hotels/hoteldeluxe.jpg";
import image2 from "assets/img/hotels/markspencer.jpg";
import image3 from "assets/img/hotels/paramount.jpg";
// carousel scrolling
import { Scroll,Element, scroller } from 'react-scroll'
// style
import accommodationsPageStyle from "assets/jss/material-kit-react/views/accommodationsPage.jsx";
// components
import HeaderLinksSM from "../../components/Header/HeaderLinksSM";
import Airbnb from "./Sections/Airbnb.jsx";
import HotelDeluxe from "./Sections/HotelDeluxe.jsx";
import MarkSpencer from "./Sections/MarkSpencer.jsx";
import Paramount from "./Sections/Paramount.jsx";

class AccommodationsPage extends React.Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }
  scrollTo(elementName) {
    scroller.scrollTo(elementName, {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000
    };
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
        <Parallax small filter image={require("assets/img/accommodations.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.section}>
            <div className={classes.container2}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
                  <Card carousel>
                    <Carousel {...settings}>
                      <div>
                        <img
                          src={image0}
                          alt="Zeroth slide"
                          className="slick-image"
                          onClick={() => this.scrollTo("airbnb")}
                        />
                      </div>
                      <div>
                        <img
                          src={image1}
                          alt="First slide"
                          className="slick-image"
                          onClick={() => this.scrollTo("deluxe")}
                        />
                      </div>
                      <div>
                        <img
                          src={image2}
                          alt="Second slide"
                          className="slick-image"
                          onClick={() => this.scrollTo("markspencer")}
                        />
                      </div>
                    </Carousel>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          <Element name="airbnb">
            <Airbnb />
          </Element>
          <Element name="deluxe">
            <HotelDeluxe />
          </Element>
          <Element name="markspencer">
            <MarkSpencer />
          </Element>
          <Element name="paramount">
            <Paramount />
          </Element>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(accommodationsPageStyle)(AccommodationsPage);
