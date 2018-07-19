import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons
import Explore from "@material-ui/icons/Explore";
import Bookmark from "@material-ui/icons/Bookmark";
import Restaurant from "@material-ui/icons/Restaurant";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

import scheduleStyle from "assets/jss/material-kit-react/views/componentsSections/scheduleStyle.jsx";

class SectionGifts extends React.Component {
  constructor() {
    super()
    this.newEvent = this.newEvent.bind(this)
  }
  newEvent(title, info1, info2, status, link, address) {
    const { classes } = this.props;
    if(address) {
      return (
        <p className={classes.textCenter}>
          <h3 className={classes.eventTitle}>{title}</h3>
          <h4>{info1} | <a href={address} target="_blank">{link}</a> | {info2}</h4>
          <h3 className={classes.eventStatus}>{status}</h3>
        </p>
      )
    } else if(link) {
      return (
        <p className={classes.textCenter}>
          <h3 className={classes.eventTitle}>{title}</h3>
          <h4>{info1} | {link} | {info2}</h4>
          <h3 className={classes.eventStatus}>{status}</h3>
        </p>
      )
    } else {
      return (
        <p className={classes.textCenter}>
          <h3 className={classes.eventTitle}>{title}</h3>
          <h4>{info1} | {info2}</h4>
          <h3 className={classes.eventStatus}>{status}</h3>
        </p>
      )
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
      <h1 className={classes.textCenter}>Schedule of Events</h1>
      <br/>
        <div className={classes.container}>
            <div id="nav-tabs">
            <GridContainer alignItems={"center"}>
              <GridItem>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Thursday",
                      tabIcon: Restaurant,
                      tabContent: (
                        this.newEvent(
                          "Welcome Dinner",
                          "Thursday, September 6th",
                          "1314 NW Glisan Street | 6 pm",
                          "FAMILY ONLY EVENT",
                          "Andina",
                          "http://www.andinarestaurant.com/"
                        )
                      )
                    },
                    {
                      tabName: "Friday",
                      tabIcon: Bookmark,
                      tabContent: (
                        <div>
                          {this.newEvent(
                            "Ceremony",
                            "Friday, September 7th",
                            "400 SW Kingston Avenue | 3 pm",
                            "FAMILY ONLY EVENT",
                            "Shakespeare Garden"
                          )}
                          <br/>
                          <hr/>
                          <br/>
                          {this.newEvent(
                            "Discovery Museum Exploration",
                            "Friday, September 7th",
                            "4033 SW Canyon Road | 4 pm",
                            "ALL INVITED GUESTS",
                            "Discovery Museum",
                            "https://www.worldforestry.org/visit-2/discovery-museum/"
                          )}
                          <br/>
                          <hr/>
                          <br/>
                          {this.newEvent(
                            "Happy Hour",
                            "Friday, September 7th",
                            "4033 SW Canyon Road | 5 pm",
                            "ALL INVITED GUESTS",
                            "Discovery Museum",
                            "https://www.worldforestry.org/visit-2/discovery-museum/"
                          )}
                          <br/>
                          <hr/>
                          <br/>
                          {this.newEvent(
                            "Reception",
                            "Friday, September 7th",
                            "4033 SW Canyon Road | 6 pm",
                            "ALL INVITED GUESTS",
                            "Cheatham Hall, World Forestry Center",
                            "https://www.worldforestry.org/portfolio/cheatham-hall/"
                          )}
                        </div>
                      )
                    },
                    {
                      tabName: "Saturday",
                      tabIcon: Restaurant,
                      tabContent: (
                        <div>
                          {this.newEvent(
                            "Brunch",
                            "Our House",
                            "10 am to 1 pm",
                            "ALL INVITED GUESTS",
                            "3141 SW Champlain Drive"
                          )}
                          <br/>
                          <hr/>
                          <br/>
                          {this.newEvent(
                            "Portland Exploration",
                            "What will you get into?",
                            "1 pm"
                          )}
                        </div>
                      )
                    },
                    {
                      tabName: "Sunday",
                      tabIcon: Explore,
                      tabContent: (
                        <div>
                          {this.newEvent(
                            "Portland Exploration",
                            "What will you get into?",
                            "All Day"
                          )}
                        </div>
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

export default withStyles(scheduleStyle)(SectionGifts);
