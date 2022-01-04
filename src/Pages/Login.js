import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { themes } from "../Helpers/Theme";
import { loginURL } from "../SpotifyENV";
import spotifyicon from "../Assets/spotifyicon.png";
import musicbrain from "../Assets/musicbrain.jpg";

const Login = () => {
  const loginStyles = makeStyles({
    root: {
      backgroundColor: themes.palette.primary.dark,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "100%",
      [themes.breakpoints.down("sm")]: {
        height: "100vh",
      },
    },
    img: {
      maxWidth: "12%",
      margin: "0 auto",
      [themes.breakpoints.down("sm")]: {
        maxWidth: "35%",
      },
    },
    imgDiv: {
      display: "flex",
      alignItems: "center",
      padding: "20px 0",
    },
    contentDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      margin: "5% 0",
      [themes.breakpoints.down("sm")]: {
        margin: "10% 0",
      },
    },
    loginBtn: {
      backgroundColor: themes.palette.primary.main,
      padding: "13px 50px",
      color: themes.palette.primary.white,
      cursor: "pointer",
      borderRadius: 30,
      margin: "2% 0",
      "&:hover": {
        boxShadow:
          "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset",
      },
    },
    link: {
      textDecoration: "none",
      color: themes.palette.primary.white,
      fontWeight: "bold",
    },
    typo: {
      width: "80%",
      textAlign: "center",
      color: themes.palette.primary.white,
    },
    signupBtn: {
      border: "1px solid #1DB954",
      padding: "13px 120px",
      cursor: "pointer",
      borderRadius: 30,
      margin: "5% 0",
      "&:hover": {
        boxShadow:
          "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset",
      },
    },
    signLink: {
      color: themes.palette.primary.main,
      fontWeight: "bold",
      textDecoration: "none",
    },
    musicbrain: {
      maxWidth: "100%",
    },
  });

  const classes = loginStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imgDiv}>
        <img src={spotifyicon} className={classes.img} alt="spotify-icon" />
      </div>
      <hr />
      <img src={musicbrain} className={classes.musicbrain} alt="spotify" />

      <div className={classes.contentDiv}>
        <div className={classes.typo}>
          <Typography>
            Clicking the button above will redirect you to the Spotify Login
            page
          </Typography>
        </div>
        <div className={classes.loginBtn}>
          <a className={classes.link} href={loginURL}>
            Login With Spotify
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
