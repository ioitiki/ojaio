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
import image0 from "assets/img/airbnb/airbnb2-0.jpg";
import image1 from "assets/img/airbnb/airbnb2-1.jpg";
import image2 from "assets/img/airbnb/airbnb2-2.jpg";
import image3 from "assets/img/airbnb/airbnb2-3.jpg";
import image4 from "assets/img/airbnb/airbnb2-4.jpg";
import image5 from "assets/img/airbnb/airbnb2-5.jpg";
import image6 from "assets/img/airbnb/airbnb2-6.jpg";
import image7 from "assets/img/airbnb/airbnb2-7.jpg";

class SectionCarousel2 extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <a href="https://www.airbnb.com/rooms/22810044?source=handoff-ios&s=41&user_id=40835531&ref_device_id=5df75f173da079bc0782e8f6d439714cfd820589&photo=16&_branch_match_id=536389035332378195" target="_blank">
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
                    <a href="https://www.airbnb.com/rooms/22810044?source=handoff-ios&s=41&user_id=40835531&ref_device_id=5df75f173da079bc0782e8f6d439714cfd820589&photo=16&_branch_match_id=536389035332378195" target="_blank">
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
                    <a href="https://www.airbnb.com/rooms/22810044?source=handoff-ios&s=41&user_id=40835531&ref_device_id=5df75f173da079bc0782e8f6d439714cfd820589&photo=16&_branch_match_id=536389035332378195" target="_blank">
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
                    <a href="https://www.airbnb.com/rooms/22810044?source=handoff-ios&s=41&user_id=40835531&ref_device_id=5df75f173da079bc0782e8f6d439714cfd820589&photo=16&_branch_match_id=536389035332378195" target="_blank">
                      <img
                        src={image3}
                        alt="Third slide"
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
                    <a href="https://www.airbnb.com/rooms/22810044?source=handoff-ios&s=41&user_id=40835531&ref_device_id=5df75f173da079bc0782e8f6d439714cfd820589&photo=16&_branch_match_id=536389035332378195" target="_blank">
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
                    <a href="https://www.airbnb.com/rooms/22810044?source=handoff-ios&s=41&user_id=40835531&ref_device_id=5df75f173da079bc0782e8f6d439714cfd820589&photo=16&_branch_match_id=536389035332378195" target="_blank">
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
                  <div>
                    <a href="https://www.airbnb.com/rooms/22810044?source=handoff-ios&s=41&user_id=40835531&ref_device_id=5df75f173da079bc0782e8f6d439714cfd820589&photo=16&_branch_match_id=536389035332378195" target="_blank">
                      <img
                        src={image6}
                        alt="Sixth slide"
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
                    <a href="https://www.airbnb.com/rooms/22810044?source=handoff-ios&s=41&user_id=40835531&ref_device_id=5df75f173da079bc0782e8f6d439714cfd820589&photo=16&_branch_match_id=536389035332378195" target="_blank">
                      <img
                        src={image7}
                        alt="Seventh slide"
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

export default withStyles(carouselStyleAirbnb)(SectionCarousel2);
