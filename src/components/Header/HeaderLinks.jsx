/* eslint-disable */
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Tooltip from "material-ui/Tooltip";

// @material-ui/icons
import { Menu, CloudDownload } from "@material-ui/icons";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

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
            <Link to="naming-ceremony-page" className={classes.dropdownLink}>
              Naming Ceremony
            </Link>,
            <Link to="accommodations-page" className={classes.dropdownLink}>
              Accommodations
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
