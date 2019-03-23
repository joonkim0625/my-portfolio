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
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
// img
import picture from "../../images/joonkim_photo.jpeg";

const styles = theme => ({
  root: {
    color: "#fff"
  },
  layout: {
    width: "auto",
    height: "100vh",
    minHeight: "100vh",
    backgroundColor: "#191919"
  },
  // avatar: {
  //   display: "inline-block",
  //   margin: 10,
  //   borderRadius: 0,

  //   [theme.breakpoints.down("sm")]: {
  //     height: "150px",
  //     width: "150px"
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     height: "190px",
  //     width: "190px"
  //   },
  //   [theme.breakpoints.up("lg")]: {
  //     height: "230px",
  //     width: "230px"
  //   }
  // },

  avatar: {
    width: "176px",
    height: "176px",
    margin: 10,
    borderRadius: 0,

    [theme.breakpoints.down("sm")]: {
      display: "block",
      margin: "0 auto"
    },
    [theme.breakpoints.up("sm")]: {
      float: "left",
      marginRight: "1.2rem"
    }
  },

  card: {
    // borderRadius: 0,
    // padding: "100px 30px 150px 30px",
    backgroundColor: "#191919",
    // boxSizing: "border- box",
    width: "100 %",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "6rem",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    paddingBottom: "8rem",
    maxWidth: "720px"
  },

  p: {
    wordBreak: "break-word",
    marginTop: "1.4rem",
    lineHeight: "1.8",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3rem"
    }
  },
  divider: {
    marginTop: "1rem",
    backgroundColor: "transparent",
    clear: "both"
  },
  listStyles: {
    padding: 0
  },
  textStyles: {
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3rem"
    }
  },
  skills: {
    color: "#fff",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3rem"
    }
  },
  chipContainer: {
    marginLeft: "2rem"
  },

  chip: {
    margin: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "17px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "19px"
    }
  },

  iconStyles: {
    color: "#fff"
  }
});

const About = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Navbar />
      <CssBaseline />
      <div className={classNames(classes.root, classes.layout)}>
        <Card className={classes.card}>
          <Avatar
            className={classNames(classes.avatar, "avatar")}
            alt="Hyunjoon Kim"
            src={picture}
          />
          {/* <img className={classes.avatar} src={picture} alt="Hyunjoon Kim" /> */}
          <Typography className={classes.p} component="p">
            2018년 여름, 우리 생활에서는 이제 빼놓을 수 없는 웹사이트를
            개발한다는 것에 매력을 느껴 프론트엔드 개발을 시작하게 되었습니다.
            제가 개발에 기여한 결과물을 많은 사람들이 사용하고 즐거움을 느꼈으면
            좋겠습니다.
          </Typography>

          <Divider className={classes.divider} variant="middle" />

          <div>
            <List>
              <ListItem className={classes.listStyles}>
                <ListItemIcon>
                  <FontAwesomeIcon
                    className={classes.iconStyles}
                    icon={faGraduationCap}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <p className={classes.textStyles}>
                      2018년 12월에 패스트캠퍼스 프론트엔드 개발 스쿨 11기를
                      수료하였습니다.
                    </p>
                  }
                />
              </ListItem>
              <ListItem className={classes.listStyles}>
                <ListItemIcon>
                  <FontAwesomeIcon
                    className={classes.iconStyles}
                    icon={faBasketballBall}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <p className={classes.textStyles}>
                      미국 고등학교의 농구팀에서 코치를 한 경력 덕분에 개인보다
                      팀을 중요시하고 맡은 역할에 대한 책임감이 강합니다.
                    </p>
                  }
                />
              </ListItem>
              <ListItem className={classes.listStyles}>
                <ListItemIcon>
                  <FontAwesomeIcon
                    className={classes.iconStyles}
                    icon={faGlobeAmericas}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <p className={classes.textStyles}>
                      미국에서의 생활 경험 덕분에 영어로 된 개발 자료를 접하는데
                      문제가 없습니다.
                    </p>
                  }
                />
              </ListItem>
            </List>
          </div>

          <div>
            <Typography className={classes.skills}>사용 가능 기술들</Typography>
            <div className={classes.chipContainer}>
              <Chip
                icon={<FontAwesomeIcon icon={faHtml5} />}
                className={classes.chip}
                label="HTML"
              />
              <Chip
                icon={<FontAwesomeIcon icon={faCss3Alt} />}
                className={classes.chip}
                label="CSS"
              />
              <Chip
                icon={<FontAwesomeIcon icon={faJsSquare} />}
                className={classes.chip}
                label="JavaScript"
              />
              <Chip
                icon={<FontAwesomeIcon icon={faReact} />}
                className={classes.chip}
                label="React"
              />
              <Chip
                icon={<FontAwesomeIcon icon={faReact} />}
                className={classes.chip}
                label="React Redux"
              />
            </div>
          </div>
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
