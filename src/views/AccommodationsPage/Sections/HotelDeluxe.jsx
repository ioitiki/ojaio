import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons
import Place from "@material-ui/icons/Place";
import InfoOutline from "@material-ui/icons/InfoOutline";
import AttachMoney from "@material-ui/icons/AttachMoney";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAacrK9RkxJQb1wF0dGB0PCG7IVZt46AWs&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={18} defaultCenter={{ lat: 45.520994, lng: -122.687711 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 45.520994, lng: -122.687711 }} />
    )}
  </GoogleMap>
));

class HotelDeluxe extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h2>Hotel deLuxe</h2>
            </div>
            <GridContainer alignItems={"center"}>
              <GridItem>
                <NavPills
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Information",
                      tabIcon: InfoOutline,
                      tabContent: (
                        <span>
                          <p>
                          Contact Brittanie @ 503-219-2094
                          </p>
                          <p>
                            <a href="https://www.hoteldeluxeportland.com" target="_blank">hoteldeluxeportland.com</a>
                          </p>
                          <p>
                          Designed in the style of Hollywood’s Golden Age, Hotel deLuxe combines 
                          an art deco aesthetic with modern art. Here you’ll feel like a star: 
                          enjoy our extensive Provenance Signatures, afternoon tea, free screenings 
                          of classic films, and a curated photography collection. Escape to the 
                          Driftwood Room for signature cocktails, or discover Gracie’s, our elegant 
                          restaurant specializing in Pacific Northwest fare.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Location",
                      tabIcon: Place,
                      tabContent: (
                        <span>
                          <p>
                            <center>
                              <a className={classes.addressTitle} href="https://www.google.com/maps/place/Hotel+deLuxe/@45.5209897,-122.6899017,17z/data=!3m2!4b1!5s0x54950a1ce6316893:0x571df460155987ab!4m7!3m6!1s0x54950a1ce630fed7:0xf84f977a34d89b2b!5m1!1s2018-07-01!8m2!3d45.520986!4d-122.687713" target="_blank">
                              729 SW 15th Avenue
                              </a>
                            </center>
                          </p>
                          <MyMapComponent />
                        </span>
                      )
                    },
                    {
                      tabButton: "Pricing",
                      tabIcon: AttachMoney,
                      tabContent: (
                        <span>
                          <p>
                          Standard Room Rate-$219
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(HotelDeluxe);
