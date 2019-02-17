import React from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

// img
import picture from "../../images/joonkim_photo.jpeg";

const styles = theme => ({
  layout: {
    width: "auto",
    height: "100vh",
    minHeight: "100vh",
    backgroundColor: "#191919"
  },
  avatar: {
    margin: 10,
    borderRadius: 0,

    [theme.breakpoints.down("sm")]: {
      height: "150px",
      width: "150px"
    },
    [theme.breakpoints.up("md")]: {
      height: "190px",
      width: "190px"
    },
    [theme.breakpoints.up("lg")]: {
      height: "230px",
      width: "230px"
    }
  },

  cardContent: {
    width: "90%",
    height: "100vh"
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 0,
    paddingTop: "100px",
    backgroundColor: "#191919"
  },

  p: {
    lineHeight: "1.5",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "18px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "20px"
    }
  }
});

const About = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Navbar />
      <CssBaseline />
      <div className={classes.layout}>
        <Card className={classes.card}>
          <Avatar
            className={classNames(classes.avatar, "avatar")}
            alt="Hyunjoon Kim"
            src={picture}
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.p} component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus vitae dicta cupiditate fugit dolores sunt itaque
              placeat assumenda laborum magnam consequatur dolorem architecto
              quo fuga, laudantium velit consectetur eos perspiciatis!
            </Typography>
            <Typography className={classes.p} component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus vitae dicta cupiditate fugit dolores sunt itaque
              placeat assumenda laborum magnam consequatur dolorem architecto
              quo fuga, laudantium velit consectetur eos perspiciatis!
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </React.Fragment>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
