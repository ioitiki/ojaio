import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import giftsStyle from "assets/jss/material-kit-react/views/componentsSections/giftsStyle.jsx";

class SectionInfo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>Ceremony Information</h2>
            </div>
            <GridContainer>
                <GridItem>
                    <h3>Transportation</h3>
                    <br/>
                    <a href="http://explorewashingtonpark.org/getting-here/#">Getting Here</a>
                    <br/>
                    <a href="http://explorewashingtonpark.org/parking">Parking</a>
                </GridItem>
            </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(giftsStyle)(SectionInfo);
