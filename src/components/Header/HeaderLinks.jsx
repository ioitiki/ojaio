/* eslint-disable */
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";

// @material-ui/icons
import { Menu } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Menu}
          dropdownList={[
            <Link to="vow-renewal-page" className={classes.dropdownLink}>
              Vow Renewal
            </Link>,
            <Link to="all-things-maverick" className={classes.dropdownLink}>
              All Things Maverick
            </Link>,
            <Link to="accommodations-page" className={classes.dropdownLink}>
              Accommodations
            </Link>,
            <Link to="gift-page" className={classes.dropdownLink}>
              Gift Information
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
