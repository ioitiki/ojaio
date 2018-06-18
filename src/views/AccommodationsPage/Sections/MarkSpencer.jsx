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
  <GoogleMap defaultZoom={18} defaultCenter={{ lat: 45.522179, lng: -122.682484 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 45.522179, lng: -122.682484 }} />
    )}
  </GoogleMap>
));

class MarkSpencer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h2>MarkSpencer</h2>
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
                          Contact Joanna @ 503-265-4397
                          </p>
                          <p>
                            <a href="http://www.markspencer.com/" target="_blank">
                            markspencer.com
                            </a>
                          </p>
                          <p>
                          The Mark Spencer Hotel is the perfect choice for your visit to Portland, 
                          Oregon. Each room is unique, personally accessorized to create a 
                          comfortable homelike atmosphere with the added benefit of our hotel 
                          services. A wide variety of spacious studios and one-bedroom suites await 
                          your selection - impeccably serviced and complemented with kitchen 
                          furnishings and ample closet spaces. The hotel is completely non-smoking 
                          and features select pet friendly rooms.
                          </p>
                          <p>
                          Hotel guests enjoy daily complimentary continental breakfast with 
                          selection of espresso coffees, copy of The New York Times, Wi-Fi, 
                          afternoon tea and cookies, and evening wine reception. Additional 
                          amenities include room service, individualized voice mail, 24 hour 
                          fitness center, an on-site laundry facility and dry-cleaning services, 
                          hair dryers, iron and ironing board. On-site parking available for 
                          the lowest fees in town including discounts for hybrids.  Check in 
                          time is 4pm and check out time is 12 noon.  
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
                              <a className={classes.addressTitle} href="https://www.google.com/maps/place/Mark+Spencer+Hotel/@45.5221655,-122.682483,15z/data=!4m7!3m6!1s0x0:0x5309db9e6531d701!5m1!1s2018-07-01!8m2!3d45.5221655!4d-122.682483" target="_blank">
                              409 SW 11th Avenue
                              </a>
                            </center>
                          </p>
                          <MyMapComponent isMarkerShown />
                        </span>
                      )
                    },
                    {
                      tabButton: "Pricing",
                      tabIcon: AttachMoney,
                      tabContent: (
                        <span>
                          <p>
                          Standard Room Rate-$209
                          </p>
                          <p>
                          Suite Rate-$219
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

export default withStyles(pillsStyle)(MarkSpencer);
