import React from "react";
import MyButtons from "../Helpers/Buttons";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { themes } from "../Helpers/Theme";
import { loginURL } from "../SpotifyENV";
import spotifyicon from "../Assets/spotifyicon.png";

const Login = () => {
  const loginStyles = makeStyles({
    root: {
      backgroundColor: themes.palette.primary.white,
    },
    img: {
      maxWidth: "15%",
      margin: "0 auto",
    },
    imgDiv: {
      display: "flex",
      alignItems: "center",
      padding: "20px 0",
    },
    contentDiv: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      margin: "5% 0",
    },
    loginBtn: {
      backgroundColor: themes.palette.primary.main,
      padding: "13px 120px",
      color: themes.palette.primary.white,
      cursor: "pointer",
      borderRadius: 30,
      margin: "5% 0",
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
      width: "40%",
      textAlign: "center",
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
  });

  const classes = loginStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imgDiv}>
        <img src={spotifyicon} className={classes.img} alt="spotify-icon" />
      </div>
      <hr />
      <div className={classes.contentDiv}>
        <div className={classes.typo}>
          <Typography>
            We'll never post anything without your permission. Show and Hide
            Friend Activity from Settings.
          </Typography>
        </div>
        <div className={classes.loginBtn}>
          <a className={classes.link} href={loginURL}>
            Login With Spotify
          </a>
        </div>
        <Typography>New to Spotify?</Typography>
        <div className={classes.signupBtn}>
          <a className={classes.signLink} href={loginURL}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
