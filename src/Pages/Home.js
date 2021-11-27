import React from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../Helpers/Theme";
import { Typography } from "@mui/material";
import Navbar from "../Components/MiddleComponent/Navbar";
import SmallCard from "../Components/MiddleComponent/SmallCard";

const Home = () => {
  const homeStyles = makeStyles((theme) => ({
    homeWrapper: {
      background: "linear-gradient(to right bottom, #000137, #222222 )",
      height: "100vh",
      padding: "10px 30px",
    },
    spaceY: {
      margin: "20px 0",
      color: themes.palette.primary.white,
    },
  }));

  const classes = homeStyles();

  return (
    <div className={classes.homeWrapper}>
      <Navbar />
      <Typography variant="h4" className={classes.spaceY}>
        Good afternoon
      </Typography>
      <div className={classes.spaceY}>
        <SmallCard />
      </div>
    </div>
  );
};

export default Home;
