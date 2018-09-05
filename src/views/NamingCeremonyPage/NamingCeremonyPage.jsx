import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'

import namingCeremonyPageStyle from "assets/jss/material-kit-react/views/namingCeremonyPage.jsx";
import HeaderLinksSM from "../../components/Header/HeaderLinksSM";
import SectionCarousel from "./Sections/SectionCarousel";
import SectionOde from "./Sections/SectionOde";

class NamingCeremonyPage extends React.Component {
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
        <Parallax medium filter image={require("assets/img/mav3.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer>
              <GridItem>
                <h1 className={classes.title}>All things Maverick</h1>
              </GridItem>
            </GridContainer>
            <SectionCarousel />
            <SectionOde />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(namingCeremonyPageStyle)(NamingCeremonyPage);
