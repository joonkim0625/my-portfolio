import React from "react";
import "animate.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Links from "./Links";

const styles = theme => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-around"
  },
  footerStyle: {
    backgroundColor: "#232323",
    color: "#fff"
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <div className="footer animated fadeInUp delay-0s">
      <Toolbar className={classNames(classes.toolbar, classes.footerStyle)}>
        <Links />
      </Toolbar>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
