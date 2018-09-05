import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import giftsStyle from "assets/jss/material-kit-react/views/componentsSections/giftsStyle.jsx";

class SectionOde extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
            <h2 className={classes.odeTitle}>Ode to My Sun</h2>
            <GridContainer>
                <GridItem>
                    <h4 className={classes.ode}>
                        I never knew the way my heart could beat outside of my chest. As I hold you close, 
                        just moments after our oneness became two, I know I have never loved as deeply, as 
                        fiercely, or as devotedly as I do in this moment. I am in awe. In awe of you.
                    </h4>
                    <h4 className={classes.ode}>
                        You. Tiny hands. Tender skin. Knobby knees. Inquisitive gaze.
                    </h4>
                    <h4 className={classes.ode}>
                        You.
                    </h4>
                    <h4 className={classes.ode}>
                        I sigh in relief. My son. My sun. The warmth of your new breath between my breasts. 
                        My anxious anticipation subsides as we settle into soft exhaustion.
                    </h4>
                    <h4 className={classes.ode}>
                        Mother-Baby. A new iteration of our dynamic dyad.
                    </h4>
                    <h4 className={classes.ode}>
                        You. Me. Us.
                    </h4>
                    <h4 className={classes.ode}>
                        For years, I held other babies and dreamt of you. Nothing could ever have prepared me 
                        for this.
                    </h4>
                    <h4 className={classes.ode}>
                        You. Here. Now.
                    </h4>
                    <h4 className={classes.ode}>
                        Your beautiful chest rising and falling as you sleep. You. My son. My beautifully wide 
                        eyed son. You are my wildest dream alive. Resting after your long journey Earthside.
                    </h4>
                    <h4 className={classes.ode}>
                        You, my sweet child, have made me a mother. And now I watch my heart beating. Outside of 
                        me. Inside of you.
                    </h4>
                </GridItem>
            </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(giftsStyle)(SectionOde);
