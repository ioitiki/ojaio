import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons
import Place from "@material-ui/icons/Place";
import Home from "@material-ui/icons/Home";
import AttachMoney from "@material-ui/icons/AttachMoney";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import SectionCarousel0 from "./SectionCarousel0";
import SectionCarousel1 from "./SectionCarousel1";
import SectionCarousel2 from "./SectionCarousel2";
import SectionCarousel3 from "./SectionCarousel3";
import SectionCarousel4 from "./SectionCarousel4";
import SectionCarousel5 from "./SectionCarousel5";
import SectionCarousel6 from "./SectionCarousel6";
import SectionCarousel7 from "./SectionCarousel7";
import SectionCarousel8 from "./SectionCarousel8";
import SectionCarousel9 from "./SectionCarousel9";

class Airbnb extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h2>Airbnb</h2>
            </div>
            <GridContainer alignItems={"center"}>
              <GridItem>
                <NavPills
                  color="primary"
                  tabs={[
                    {
                      tabButton: "4 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <h3 className={classes.listingTitle}>
                          4 guests (3 beds)
                          1 bath
                          4 max --$154.50/person/3 nights
                          +A/C
                          </h3>
                          <SectionCarousel0 />
                        </span>
                      )
                    },
                    {
                      tabButton: "6 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <h3 className={classes.listingTitle}>
                          6 guests (3 beds)
                          2 baths
                          6 max -- $134.17/person/3 night
                          +A/C
                          </h3>
                          <SectionCarousel1 />
                        </span>
                      )
                    },
                    {
                      tabButton: "9 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <h3 className={classes.listingTitle}>
                          9 guest (5 beds) + crib
                          2 bath
                          9 max -- $190.55/person/3 nights
                          +A/C
                          +Washer/Dryer
                          Great for kids
                          </h3>
                          <h4 className={classes.listingTitle}>**Prebooked--Give us a call if you are interested.**</h4>
                          <SectionCarousel2 />
                        </span>
                      )
                    },
                    {
                      tabButton: "9 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <h3 className={classes.listingTitle}>
                          9 guests (4 beds)
                          2 baths
                          9 max -- $217/person/3 nights
                          Washer/Dryer
                          </h3>
                          <SectionCarousel3 />
                        </span>
                      )
                    },
                    {
                      tabButton: "6 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <h3 className={classes.listingTitle}>
                          6 guests (3 beds)
                          6 max -- $176/17/person/3 nights
                          18% discount
                          +A/C 
                          +Washer/Dryer
                          Great for kids
                          </h3>
                          <SectionCarousel4 />
                        </span>
                      )
                    },
                    {
                      tabButton: "4 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <h3 className={classes.listingTitle}>
                          4 guests (2 beds)
                          2 baths
                          4 max -- $246.50/person/3 nights
                          +A/C
                          </h3>
                          <SectionCarousel5 />
                        </span>
                      )
                    },
                    {
                      tabButton: "6 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <h3 className={classes.listingTitle}>
                          6 guests (4 beds)
                          1 bath
                          6 max -- $321.45/person/3 nights
                          +A/C
                          Need Car/Lyfts expensive
                          </h3>
                          <SectionCarousel6 />
                        </span>
                      )
                    },
                    {
                      tabButton: "5 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <h3 className={classes.listingTitle}>
                          5 guests (3 beds)
                          1 bath
                          5 max -- $149.20/person/3 nights
                          +A/C
                          Need Car/Lyfts expensive
                          </h3>
                          <SectionCarousel7 />
                        </span>
                      )
                    },
                    {
                      tabButton: "5 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <h3 className={classes.listingTitle}>
                          5 guests (4 beds)
                          5 max -- $204.60/person/3 nights
                          +A/C
                          +Washer/Dryer
                          Great for kids
                          Need Car
                          </h3>
                          <SectionCarousel8 />
                        </span>
                      )
                    },
                    {
                      tabButton: "6 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <h3 className={classes.listingTitle}>
                          6 guests (2 beds +1 sofa)
                          1.5 bath
                          6 max -- $219.67/person/3 nights
                          +A/C
                          +Washer/Dryer
                          Need Car/Lyfts expensive
                          </h3>
                          <SectionCarousel9 />
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

export default withStyles(pillsStyle)(Airbnb);
