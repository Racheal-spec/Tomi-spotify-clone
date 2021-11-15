import React from "react";
import { makeStyles } from "@mui/styles";
import RenderLeftSidebar from "../Components/LeftSidebar/RenderLeftSidebar";
import RenderMiddlePage from "../Components/MiddleComponent/RenderMiddlePage";
import RenderRightSidebar from "../Components/RightSidebar/RenderRightSidebar";
import ControlsWrapper from "../Components/ControlsContainer/ControlsWrapper";
import { themes } from "../Helpers/Theme";
import Grid from "@mui/material/Grid";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Library from "../Pages/Library";
import { HOMEPAGE, PLAYLIST } from "../Helpers/Routes";
import Home from "../Pages/Home";
import Navbar from "../Components/MiddleComponent/Navbar";

const Homepage = () => {
  const homeStyles = makeStyles((theme) => ({
    "@global": {
      "*::-webkit-scrollbar-track": {
        borderRadius: 10,
      },
      "*::-webkit-scrollbar-thumb": {
        background: themes.palette.primary.grey2,
      },
    },
    root: {
      overflow: "scroll",
      height: "100%",
    },

    homeWrapper: {
      position: "relative",
    },
    grid1: {
      background: themes.palette.primary.black,
      color: themes.palette.primary.grey3,
      height: "100vh",
    },
    grid2: {
      background: themes.palette.primary.dark,
      color: themes.palette.primary.grey3,
      height: "100vh",
    },
    grid3: {
      background: themes.palette.primary.grey1,
      color: themes.palette.primary.grey3,
      height: "100vh",
    },
    barStyles: {
      backgroundColor: themes.palette.primary.grey1,
      height: 60,
    },
    footerControls: {
      height: 80,
      width: "100%",
      backgroundColor: themes.palette.primary.grey4,
      position: "fixed",
      bottom: 0,
      zIndex: 999,
    },
  }));

  const classes = homeStyles();

  return (
    <div className={classes.homeWrapper}>
      <Router>
        <Grid container>
          <Grid item lg={3} md={12} xs={12} className={classes.grid1}>
            <RenderLeftSidebar />
          </Grid>

          <Grid item lg={6} md={12} xs={12} className={classes.grid2}>
            <div className={classes.root}>
              <div className={classes.barStyles}>
                <Navbar />
              </div>
              <Switch>
                <Route exact path={HOMEPAGE}>
                  <Home />
                </Route>
                <Route path={PLAYLIST}>
                  <Library />
                </Route>
              </Switch>
            </div>
          </Grid>

          <Grid item lg={3} md={12} xs={12} className={classes.grid3}>
            <RenderRightSidebar />
          </Grid>
        </Grid>
      </Router>
      <div className={classes.footerControls}>
        <ControlsWrapper />
      </div>
    </div>
  );
};

export default Homepage;
