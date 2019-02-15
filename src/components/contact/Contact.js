import React from "react";
import Footer from "../layout/Footer";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import "animate.css";
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import Typography from "@material-ui/core/Typography";
import Navbar from "../layout/Navbar";

const styles = theme => ({
  layout: {
    width: "auto",
    height: "100vh"
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 0,
    paddingTop: "200px",
    backgroundColor: "#191919"
  },
  content: {
    display: "flex",
    flexDirection: "column"
  },
  text: {
    textAlign: "center",
    color: "white",
    letterSpacing: "1.5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "36px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "48px"
    }
  },
  stacks: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
      fontSize: "34px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "46px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "58px"
    }
  },
  button: {
    margin: "15px 12px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "65px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "75px"
    }
  },

  linkWrap: {
    display: "flex",
    textAlign: "center",
    marginTop: "15px"
  },

  links: {
    margin: "0 8px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "40px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "55px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "65px"
    }
  }
});

const Contact = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Navbar />
      <CssBaseline />
      <div className={classes.layout}>
        <Card className={classes.card}>
          <Typography
            className={classNames(classes.text, "animated flash delay-0s")}
          >
            저에게 연락주세요!
          </Typography>
          <CardActions className={classes.stacks}>
            <div className={classes.button}>
              <FontAwesomeIcon
                className="animated fadeInLeft delay-1s "
                icon={faHtml5}
                color={"white"}
              />
            </div>
            <div className={classes.button}>
              <FontAwesomeIcon
                className="animated fadeInLeft delay-2s "
                icon={faCss3Alt}
                color={"white"}
              />
            </div>
            <div className={classes.button}>
              <FontAwesomeIcon
                className="animated fadeInRight delay-2s "
                icon={faJsSquare}
                color={"white"}
              />
            </div>
            <div className={classes.button}>
              <FontAwesomeIcon
                className="animated fadeInRight delay-1s "
                icon={faReact}
                color={"white"}
              />
            </div>
          </CardActions>
          <CardActions className={classes.linkWrap}>
            <Button className={classes.links}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/joonkim0625"
              >
                <FontAwesomeIcon
                  className="animated fadeInLeft   delay-1s "
                  icon={faGithub}
                  color={"white"}
                />
              </a>
            </Button>{" "}
            <Button className={classes.links}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:joonkim0625@gmail.com"
              >
                <FontAwesomeIcon
                  className="animated fadeIn delay-1s "
                  icon={faEnvelope}
                  color={"white"}
                />
              </a>
            </Button>
            <Button className={classes.links}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1ysa-0jieEVpSW156ojsRaVVuFk2mxM4E/view?usp=sharing"
              >
                <FontAwesomeIcon
                  className="animated fadeInRight delay-1s "
                  icon={faFilePdf}
                  color={"white"}
                />
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>

      <Footer />
    </React.Fragment>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);