import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { themes } from "../Helpers/Theme";
import { loginURL } from "../Auth";
import spotifyicon from "../Assets/spotifyicon.png";
import musicbrain from "../Assets/musicbrain.jpg";
import { useSelector } from "react-redux";
import LoadingAnimation from "../Components/Animation/LoadingAnimation";

const Login = () => {
  const loginStyles = makeStyles({
    root: {
      backgroundColor: "#fff",
      height: "100%",
      [themes.breakpoints.down("sm")]: {
        height: "100vh",
      },
    },
    imgicon: {
      maxWidth: "10%",
      margin: "0 auto",
      [themes.breakpoints.down("sm")]: {
        maxWidth: "35%",
      },
    },
    imgDiv: {
      padding: "20px 55px",
      [themes.breakpoints.down("sm")]: {
        padding: "20px",
      },
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "50px 100px",
      [themes.breakpoints.down("sm")]: {
        flexDirection: "column",
        padding: "40px 10px",
      },
    },
    contentDiv: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexDirection: "column",
      width: "100%",
      margin: "0 7%",
      [themes.breakpoints.down("sm")]: {
        margin: "10% 0",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    loginBtn: {
      backgroundColor: themes.palette.primary.main,
      padding: "13px 50px",
      color: themes.palette.primary.white,
      cursor: "pointer",
      // borderRadius: 30,
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
      textAlign: "left",
      color: themes.palette.primary.dark,
      [themes.breakpoints.down("sm")]: {
        textAlign: "center",
        width: "90%",
      },
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
      maxWidth: "60%",
      [themes.breakpoints.down("sm")]: {
        maxWidth: "90%",
      },
    },
  });

  const classes = loginStyles();

  const isloading = useSelector((state) => state.music.isLoading);

  return (
    <div className={classes.root}>
      <div className={classes.imgDiv}>
        <img src={spotifyicon} className={classes.imgicon} alt="spotify-icon" />
      </div>
      <div className={classes.wrapper}>
        <img src={musicbrain} className={classes.musicbrain} alt="spotify" />

        <div className={classes.contentDiv}>
          <div className={classes.typo}>
            <Typography variant="h4" sx={{ padding: "20px 0" }}>
              Your Spotify Login
            </Typography>
            <Typography sx={{ padding: "5px 0" }}>
              Click the button below to redirect to the Spotify Login page
            </Typography>
          </div>
          <div className={classes.loginBtn}>
            <a className={classes.link} href={loginURL}>
              {isloading === true ? <LoadingAnimation /> : "Login With Spotify"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
