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

class Paramount extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
      
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(Paramount);
