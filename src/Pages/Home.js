import React from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../Helpers/Theme";
import { Typography } from "@mui/material";

const Home = () => {
  const homeStyles = makeStyles((theme) => ({
    homeWrapper: {
      //position: "relative",
    },
  }));

  const classes = homeStyles();

  return (
    <div>
      <Typography>My Home Page</Typography>
    </div>
  );
};

export default Home;
