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
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
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
