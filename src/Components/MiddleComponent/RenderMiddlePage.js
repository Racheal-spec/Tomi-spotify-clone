import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@mui/styles";
import { themes } from "../../Helpers/Theme";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Library from "../../Pages/Library";
import { HOMEPAGE, PLAYLIST } from "../../Helpers/Routes";
import Home from "../../Pages/Home";

function RenderMiddlePage() {
  const mainStyles = makeStyles((theme) => ({
   
  }));
  const classes = mainStyles();

  const User = useSelector((state) => state.music.User);

  return <div className={classes.root}></div>;
}

export default RenderMiddlePage;
