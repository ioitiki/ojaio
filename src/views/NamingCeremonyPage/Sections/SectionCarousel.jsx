import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image0 from "assets/img/MavCarousel/mav.jpg"
import image1 from "assets/img/MavCarousel/mav0.jpg";
import image3 from "assets/img/MavCarousel/mav2.jpg";
import image4 from "assets/img/MavCarousel/mav3.jpg"
import image5 from "assets/img/MavCarousel/mav4.jpg";
import image6 from "assets/img/MavCarousel/mav5.jpg"
import image7 from "assets/img/MavCarousel/mav6.jpg";
import image8 from "assets/img/MavCarousel/mav7.jpg"
import image9 from "assets/img/MavCarousel/mav8.jpg";
import image10 from "assets/img/MavCarousel/mav9.jpg"
import image11 from "assets/img/MavCarousel/mav10.jpg";
import image12 from "assets/img/MavCarousel/mav11.jpg"
import image13 from "assets/img/MavCarousel/mav12.jpg";
import image14 from "assets/img/MavCarousel/mav13.jpg"
import image15 from "assets/img/MavCarousel/mav14.jpg";


class SectionCarousel extends React.Component {
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
      autoplaySpeed: 5000
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image0}
                      alt="Zeroth slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image4}
                      alt="Fourth slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image5}
                      alt="Fifth slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image6}
                      alt="Sixth slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image7}
                      alt="Seventh slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image8}
                      alt="Eighth slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image9}
                      alt="Nineth slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image10}
                      alt="Tenth slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image11}
                      alt="Eleventh slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image12}
                      alt="Twelfth slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image13}
                      alt="Thirteenth slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image14}
                      alt="Fourteenth slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image15}
                      alt="Fifteenth slide"
                      className="slick-image"
                    />
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

export default withStyles(carouselStyle)(SectionCarousel);
