import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const LinkToProject = props => <RouterLink to="/projects" {...props} />;

const LinkToAbout = props => <RouterLink to="/about" {...props} />;

const LinkToContact = props => <RouterLink to="/contact" {...props} />;

const styles = theme => ({
  link: {
    margin: "0 30px",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("md")]: {
      margin: "0 50px"
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 70px"
    }
  }
});

function Links(props) {
  const { classes } = props;

  return (
    <div>
      <Typography color="inherit">
        <Link
          component={LinkToProject}
          className={classes.link}
          color="inherit"
        >
          프로젝트
        </Link>
        <Link component={LinkToAbout} className={classes.link} color="inherit">
          About
        </Link>
        <Link
          component={LinkToContact}
          className={classes.link}
          color="inherit"
        >
          Contact
        </Link>
      </Typography>
    </div>
  );
}

Links.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Links);
