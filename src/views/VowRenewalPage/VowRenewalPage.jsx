import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import SectionSchedule from "./Sections/SectionSchedule.jsx"
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'

import vowRenewalPageStyle from "assets/jss/material-kit-react/views/vowRenewalPage.jsx";
import HeaderLinksSM from "../../components/Header/HeaderLinksSM";
import SectionBritShalom from "./Sections/SectionBritShalom";
import SectionInfo from "./Sections/SectionInfo";

class VowRenewalPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand={<FontAwesomeIcon icon={faHome} size="lg" />}
          leftLinks={<HeaderLinks />}
          rightLinks={<HeaderLinksSM />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax medium filter image={require("assets/img/banner.jpeg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          {/* <SectionInfo /> */}
          <SectionBritShalom />
          <SectionSchedule />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(vowRenewalPageStyle)(VowRenewalPage);
