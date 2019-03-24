import React, { Component, useEffect } from "react";
import "animate.css";
import Footer from "../layout/Footer";
import classNames from "classnames";

// material ui
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../layout/Navbar";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },

  gridWrap: {
    margin: "20px -20px "
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  cardContent: {
    flexGrow: 1
  },
  cardActions: {
    justifyContent: "center",
    paddingBottom: "20px"
  },
  text: {
    margin: "10px",
    fontSize: "14px"
  },
  button: {
    fontSize: "24px"
  }
});

const cards = [
  {
    id: 1,
    title: "Jogiyo2 - 요기요 사이트 카피 프로젝트",
    src: "https://www.youtube.com/embed/AELNQ2UShRk",
    img: "",
    summary:
      "패스트캠퍼스 협업 프로젝트 종료 후, 기능과 약간의 디자인을 추가했습니다.",
    content: [
      {
        p:
          "패스트캠퍼스 프론트엔드 스쿨 협업 프로젝트 후, 몇 가지 기능을 추가.",
        id: 1
      },
      {
        p:
          "반응형 레이아웃, IE11 지원을 위한 폴리필 적용, 로그인(hello / 1234) 후 리뷰 작성 및 삭제 가능.",
        id: 2
      },
      {
        p: "React, React-router, axios, Scss, HTML, CSS, netlify",
        id: 3
      }
    ],
    stacks: "HTML, CSS, JavaScript",
    // links
    github: "https://github.com/joonkim0625/jogiyo-v2",
    homepage: "https://jogiyo2.netlify.com/",
    youtube: "https://www.youtube.com/embed/AELNQ2UShRk"
  },
  {
    id: 2,
    title: "Schedule Manager",
    img: "https://i.postimg.cc/pd0MLJ9g/my-Planner.png",
    src: "",
    summary: "날짜별로 개인의 일정을 간단하게 적을 수 있는 앱을 구현했습니다",
    content: [
      {
        p: "날짜에 따라서 할 일 기록 가능",
        id: 1
      },
      {
        p: "완료된 할 일과 완료되지 않은 할 일을 달력에 표시",
        id: 2
      },
      {
        p: "회원가입 및 로그인의 구현 - 로그인(test@test.com / 123456)",
        id: 3
      },
      {
        p: "React, Redux, Material-UI, Firebase",
        id: 4
      }
    ],
    stacks: "HTML, CSS, JavaScript",
    // links
    github: "https://github.com/joonkim0625/personal-schedule-manager",
    homepage: "https://myplanner-app.firebaseapp.com",
    youtube: ""
  },
  {
    id: 3,
    title: "Omok - 오목 게임 구현",
    img: "https://i.postimg.cc/jdcYXcGZ/2019-01-09-11-29-28.png",
    src: "",
    summary:
      "3인 협업 프로젝트로 옛날 느낌의 디자인을 적용해 본 오목 게임입니다.",
    content: [
      {
        p: "턴에 따라 바둑판 위의 커서 색이 플레이어의 돌의 색으로 바뀜",
        id: 1
      },
      {
        p: "게임 종료 후, restart를 위해 엔터키 사용 가능",
        id: 2
      },
      {
        p: "무르기 기능의 추가",
        id: 3
      },
      {
        p: "HTML, CSS, JavaScript",
        id: 4
      }
    ],
    stacks: "HTML, CSS, JavaScript",
    // links
    github: "https://github.com/joonkim0625/team-guobaorou-omok",
    homepage: "https://joons-omok.netlify.com",
    youtube: ""
  }
];

class Projects extends Component {
  render() {
    const { classes } = this.props;
    useEffect(() => {
      window.scrollTo(0, 0);
    });
    return (
      <React.Fragment>
        <Navbar />
        <CssBaseline />
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid
            className={classNames(
              classes.gridWrap,
              "animated fadeIn delay-1s slow"
            )}
            container
            spacing={40}
          >
            {cards.map(card => (
              <Grid item key={card.id} sm={6} md={6} lg={6}>
                <Card className={classes.card}>
                  <CardMedia
                    component={card.img !== "" ? "img" : "iframe"}
                    image={card.img}
                    src={card.src}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {card.title}
                    </Typography>
                    <Typography className={classes.text} component="p">
                      {card.summary}
                    </Typography>
                    <Typography className={classes.text}>
                      {card.content.map(item => (
                        <li key={item.id}>{item.p}</li>
                      ))}
                    </Typography>
                  </CardContent>
                  <CardActions
                    className={classes.cardActions}
                    disableActionSpacing
                  >
                    <Button className={classes.button}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={card.github}
                      >
                        <FontAwesomeIcon icon={faGithub} color={"black"} />
                      </a>
                    </Button>
                    <Button className={classes.button}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={card.homepage}
                      >
                        <FontAwesomeIcon icon={faHome} color={"black"} />
                      </a>
                    </Button>

                    {card.youtube !== "" ? (
                      <Button className={classes.button}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={card.youtube}
                        >
                          <FontAwesomeIcon icon={faYoutube} color={"black"} />
                        </a>
                      </Button>
                    ) : null}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
  // theme: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
