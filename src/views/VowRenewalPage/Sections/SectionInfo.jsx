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
                <h2>What is a Brit Shalom</h2>
            </div>
            <GridContainer>
                <GridItem>
                    <h4>
                        Brit shalom (ברית שלום‬) is a baby naming ceremony meaning “covenant of peace”. 
                        This tradition is intended to replace the religious circumcision that takes place 
                        during brit milah or bris. We have decided to welcome Maverick into the Jewish 
                        faith with a rechitzah, traditional foot washing.
                    </h4>
                    <h4>
                        Please bring water from a location that is meaningful to you to help us fill 
                        the basin symbolizing your loving contribution to and presence in Maverick’s life.
                    </h4>
                </GridItem>
            </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(giftsStyle)(SectionInfo);
