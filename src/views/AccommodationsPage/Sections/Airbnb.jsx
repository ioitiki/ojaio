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
                          <SectionCarousel0 />
                        </span>
                      )
                    },
                    {
                      tabButton: "6 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <SectionCarousel1 />
                        </span>
                      )
                    },
                    {
                      tabButton: "9 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <SectionCarousel2 />
                        </span>
                      )
                    },
                    {
                      tabButton: "9 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <SectionCarousel3 />
                        </span>
                      )
                    },
                    {
                      tabButton: "6 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <SectionCarousel4 />
                        </span>
                      )
                    },
                    {
                      tabButton: "4 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <SectionCarousel5 />
                        </span>
                      )
                    },
                    {
                      tabButton: "6 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <SectionCarousel6 />
                        </span>
                      )
                    },
                    {
                      tabButton: "5 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <SectionCarousel7 />
                        </span>
                      )
                    },
                    {
                      tabButton: "5 Guests",
                      tabIcon: Home,
                      tabContent: (
                        <span>
                          <SectionCarousel8 />
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
