import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import giftsStyle from "assets/jss/material-kit-react/views/componentsSections/giftsStyle.jsx";

class SectionGifts extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
      <br/>
        <div className={classes.container}>
            <div id="nav-tabs">
            <GridContainer alignItems={"center"}>
              <GridItem>
                <h3 className={classes.textCenter}>
                  As far as gifts go, we feel fortunate enough to have all of our needs tended to.
                  We ask instead that you invest with us, in our communities, to create a better world
                  for Maverick and his generation.
                </h3>
                <br/>
                <h2>Interested in Food, Sustainability, and Grassroots Activism?</h2>
                <h4>
                  Please consider a donation to the <a href="http://www.morelandfarmersmarket.org/home/">Moreland Farmers Market</a> to
                  fund one of our three hunger reduction programs so that we can keep feeding, educating, and supporting our
                  community members. The 3 programs we have are the ONLY senior nutrition program in Portland which is geared to
                  low income seniors, the Power of Produce program geared towards expanding young palates, and Double Up Food Bucks
                  which is aimed to support families and individuals who receive food stamps.
                </h4>
                <br/>
                <h4>
                  What the Senior Nutrition program does is donate $5 to each senior who signs up for our programing and that money can
                  be spent on anything at the market. Our feedback from this program has been overwhelming! Seniors who are low income
                  have reported that this five dollars ends up being spent on fruits, veggies, herbs, and eggs that would typically be
                  too expensive for them to enjoy (strawberries, cherries, peaches, tomatoes, basil, etc.) We also do education about how
                  to prepare nutrient dense meals in less than 5 steps that people can do in both full kitchens but also in kitchenette
                  like spaces available to people who live in assisted living facilities.
                </h4>
                <br/>
                <h4>
                  Power of Produce educates and engages children on how food systems work in our community. They learn about farming, bees,
                  what it means to be local, how salmon migrates to us, how climate change is affecting our earth, and encourages them to
                  eat and try the colors of the rainbow while getting them up and moving to have a well rounded healthy lifestyle. Each day
                  at the market they receive $2 to spend on their own local fruits or veggies. The part that is awesome about this program
                  is that we learned that the things that help kids to have the desire to eat more fruits and veggies are when children grow
                  their own, buy their own, and get to know their own food/produce/farmers/market.
                </h4>
                <br/>
                <h4>
                  Double Up Food Bucks is a program that matches up to $5 in food stamp money. So if a person who is eligible for assistance
                  comes to our market without question we will match whatever money they pull out off of their Oregon Trail card (up to $5)
                  which doubles their spend making the more expensive produce fit into their budgets. It's awesome because people all over
                  the city and surrounding areas come to our market to spend their money because they get to truly fill their carts with
                  organic, local, and nutrient dense foods.
                </h4>
                <br/>
                <h2>Moreland Farmers Market</h2>
                <h4>
                  Our mission is to create a neighborhood space where local farmers can sell their fresh produce, cheese, meat, fish, honey,
                  baked goods, prepared food, cut flowers and plant starts (in the spring), a space that is readily accessible to all.
                </h4>
                <br/>
                <h4>
                  You can use PayPal’s Friends & Family Money Sending <a href="mailto:info@morelandfarmersmarket.org">info@morelandfarmersmarket.org</a>
                </h4>
                <h4>
                  Or fill out their online form that takes a 3% processing fee from the donation <a href="https://secure.squarespace.com/checkout/donate?donatePageId=58f6af25cd0f68a54ff3846f">here</a>.
                </h4>
                <br/>
                <h2>Love Birth, Babies, and Healthcare?</h2>
                <h4>
                  Please make a donation to <a href="http://www.bumisehatfoundation.org/">Bumi Sehat</a> to start their endowment so that women
                  in Indonesia can have access to gentle, hygienic, and safe births. If we lived in Indonesia Camilla would want to give birth
                  with these midwives. For $25 you can pay the monthly salary of a midwife or nurse. Bumi Sehat hosted a continuing education
                  training that Camilla attended. She was invited to be the recipient of a blessingway to help her shepard a new life into this
                  world. In the next moon cycle Maverick was conceived.
                </h4>
                <br/>
                <h4>
                  Bumi Sehat Foundation International is a 501(c)(3) nonprofit organization. Their mission is to provide access to quality
                  healthcare to families; and kind, hygienic and culturally appropriate childbirth to traditionally underrepresented populations.
                  Towards these goals, they provide health services, emergency care, education services and environmental programs. They are
                  devoted to working in partnership with people to improve the quality of life and to build peace - one mother, one child, one
                  family at a time. <a href="http://www.bumisehatfoundation.org/donate-to-bumi-sehat-foundation/">Donate Here</a>.
                </h4>
                <br/>
                <h2>Want to change the world in a more dramatic way?</h2>
                <h4>
                  Andy loves providing financial assistance to communities that grow our food internationally.
                </h4>
                <br/>
                <h4>
                  <a href="https://www.evidenceaction.org/beta-no-lean-season">No Lean Season</a> reduces the negative effects of seasonality on
                  the poorest in rural agricultural areas by enabling labor mobility that increases incomes.  It is a new program that we are
                  testing in Evidence Action Beta's portfolio, based on rigorous experimental evidence.
                </h4>
                <br/>
                <h4>
                  No Lean Season gives a travel subsidy of $20 to very poor rural laborers so they can send a family member to a nearby city to
                  find a job during the period between planting and harvesting. This is the time in rural areas when there are no jobs, no income,
                  and when families miss meals. This seasonal poverty affects 600 million people around the world
                </h4>
                <br/>
                <h4>
                  With a temporary job during this 'lean season,' households are are able to put an additional meal on the table for every member
                  of the family each and every day. That's 500 additional meals during the lean
                  season. <a href="https://donate.evidenceaction.org/give/139764/#!/donation/checkout">Donate Here</a>.
                </h4>
              </GridItem>
            </GridContainer>
            </div>
        </div>
      </div>
    );
  }
}

export default withStyles(giftsStyle)(SectionGifts);
