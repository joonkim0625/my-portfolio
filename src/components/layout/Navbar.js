import React from "react";
import "animate.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Links from "./Links";

const LinkToHome = props => <RouterLink to="/" {...props} />;

const styles = theme => ({
  toolbarTitle: {
    flex: 1,
    fontSize: "1rem",
    letterSpacing: "2px",
    fontWeight: 600,

    [theme.breakpoints.up("md")]: {
      marginLeft: "-25rem"
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "-35rem"
    }
  },
  navbarStyle: {
    backgroundColor: "#232323",
    color: "#fff",
    boxShadow: "none"
  },
  linksStyle: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "block"
    },
    [theme.breakpoints.up("lg")]: {
      display: "block"
    }
  }
});

const Navbar = props => {
  const { classes } = props;

  return (
    <div
      className={classNames(classes.navbarWrap, "animated fadeInDown delay-0s")}
    >
      <AppBar
        className={classNames(
          classes.navbarStyle,
          "animated fadeInDown delay-0s"
        )}
        position="absolute"
        color="default"
      >
        <Toolbar>
          <div className={classes.toolbarTitle}>
            <Typography align="center" color="inherit" variant="title">
              <Link color="inherit" component={LinkToHome} underline="none">
                김현준
              </Link>
            </Typography>
          </div>
          <div className={classes.linksStyle}>
            <Links />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
