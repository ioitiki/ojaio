import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyleAirbnb from "assets/jss/material-kit-react/views/componentsSections/carouselStyleAirbnb.jsx";
import image0 from "assets/img/airbnb/airbnb7-0.jpg";
import image1 from "assets/img/airbnb/airbnb7-1.jpg";
import image2 from "assets/img/airbnb/airbnb7-2.jpg";
import image4 from "assets/img/airbnb/airbnb7-4.jpg";
import image5 from "assets/img/airbnb/airbnb7-5.jpg";

class SectionCarousel7 extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 10000
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <a href="https://www.airbnb.com/rooms/15073646?wl_source=list&wl_id=235957753&role=wishlist_owner&check_in=2018-09-06&check_out=2018-09-09&adults=5&guests=5" target="_blank">
                      <img
                        src={image0}
                        alt="Zeroth slide"
                        className="slick-image"

                      />
                      <div className="slick-caption">
                        <h4>
                          Click image to view Airbnb listing.
                        </h4>
                    </div>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.airbnb.com/rooms/15073646?wl_source=list&wl_id=235957753&role=wishlist_owner&check_in=2018-09-06&check_out=2018-09-09&adults=5&guests=5" target="_blank">
                      <img
                        src={image1}
                        alt="First slide"
                        className="slick-image"

                      />
                      <div className="slick-caption">
                        <h4>
                          Click image to view Airbnb listing.
                        </h4>
                    </div>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.airbnb.com/rooms/15073646?wl_source=list&wl_id=235957753&role=wishlist_owner&check_in=2018-09-06&check_out=2018-09-09&adults=5&guests=5" target="_blank">
                      <img
                        src={image2}
                        alt="Second slide"
                        className="slick-image"

                      />
                      <div className="slick-caption">
                        <h4>
                          Click image to view Airbnb listing.
                        </h4>
                    </div>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.airbnb.com/rooms/15073646?wl_source=list&wl_id=235957753&role=wishlist_owner&check_in=2018-09-06&check_out=2018-09-09&adults=5&guests=5" target="_blank">
                      <img
                        src={image4}
                        alt="Fourth slide"
                        className="slick-image"

                      />
                      <div className="slick-caption">
                        <h4>
                          Click image to view Airbnb listing.
                        </h4>
                    </div>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.airbnb.com/rooms/15073646?wl_source=list&wl_id=235957753&role=wishlist_owner&check_in=2018-09-06&check_out=2018-09-09&adults=5&guests=5" target="_blank">
                      <img
                        src={image5}
                        alt="Fifth slide"
                        className="slick-image"

                      />
                      <div className="slick-caption">
                        <h4>
                          Click image to view Airbnb listing.
                        </h4>
                    </div>
                    </a>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyleAirbnb)(SectionCarousel7);