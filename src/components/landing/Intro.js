import React from "react";
import "animate.css";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import classNames from "classnames";

import Typist from "react-typist";
import TextLoop from "react-text-loop";

// styles
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../layout/Navbar";

// link router

const LinkToProject = props => <RouterLink to="/projects" {...props} />;

const LinkToContact = props => <RouterLink to="/contact" {...props} />;

const styles = theme => ({
  layout: {
    position: "absolute",

    top: "50%",
    transform: "translateY(-50%)",
    left: "10%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "34px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "46px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "46px"
    }
  },

  content: {
    height: "165px",
    minWidth: "360px"
  },

  text: {
    color: "#fff"
  },

  linkButton: {
    display: "inline-block",
    marginTop: "50px",
    marginLeft: "4px",
    fontSize: "14px"
  },
  buttonToProject: {
    backgroundColor: "#eba300",
    color: "#fff"
  },
  buttonToContact: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid #545b62"
  }
});

const Intro = props => {
  const { classes } = props;
  return (
    <div>
      <Navbar />
      <div
        className={classNames(classes.layout, "animated fadeIn delay-1s slow")}
        pt="40%"
      >
        <CssBaseline />

        <div className={classes.content}>
          <Typist className={classes.text}>
            <span>Hello, I'm a </span>

            <TextLoop
              className={classes.text}
              children={[" Frontend", " JavaScript", " React"]}
              adjustingSpeed={500}
              springConfig={{
                stiffness: 70,
                damping: 31
              }}
            />
            <span className={classes.text}>
              {" "}
              developer <br />
              based in Seoul, South Korea.
            </span>
          </Typist>
        </div>

        <Link
          component={LinkToProject}
          className={classes.linkButton}
          color="inherit"
          underline="none"
        >
          <Button
            className={classes.buttonToProject}
            size="large"
            variant="contained"
          >
            프로젝트 보러가기
          </Button>
        </Link>
        <Link
          component={LinkToContact}
          className={classes.linkButton}
          color="inherit"
          underline="none"
        >
          <Button
            className={classes.buttonToContact}
            size="large"
            variant="contained"
          >
            Contact Me!
          </Button>
        </Link>
      </div>
    </div>
  );
};

Intro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Intro);
