import React from "react";
import { makeStyles } from "@mui/styles";

import RightSidebar from "../Components/RightSidebar/RightSidebar";
import ControlsWrapper from "../Components/ControlsContainer/ControlsWrapper";
import { themes } from "../Helpers/Theme";
import Grid from "@mui/material/Grid";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Library from "../Pages/Library";
import { HOMEPAGE, ONEPLAYLIST, PLAYLIST } from "../Helpers/Routes";
import Home from "../Pages/Home";

import PlayLists from "../Components/LeftSidebar/PlayLists";
import PlaylistDetails from "./PlaylistDetails";
import LeftSidebar from "../Components/LeftSidebar/LeftSidebar";

const Homepage = () => {
  const homeStyles = makeStyles((theme) => ({
    homeWrapper: {
      position: "relative",
    },
    root: {
      overflowY: "scroll",
      height: "100%",
      "&::-webkit-scrollbar": {
        width: "0.4em",
      },
      "&::-webkit-scrollbar-thumb": {
        background: themes.palette.primary.grey2,
      },
    },

    grid1: {
      background: themes.palette.primary.black,
      color: themes.palette.primary.grey3,
      height: "100vh",
      width: "20%",
    },
    grid2: {
      background: themes.palette.primary.dark,
      color: themes.palette.primary.grey3,
      height: "100vh",
      width: "60%",
    },
    grid3: {
      background: themes.palette.primary.grey1,
      color: themes.palette.primary.grey3,
      height: "100vh",
      width: "20%",
    },

    footerControls: {
      height: 80,
      width: "100%",
      backgroundColor: themes.palette.primary.grey4,
      position: "fixed",
      bottom: 0,
      zIndex: 999,
    },
    listScroll: {
      overflowY: "scroll",
      height: "100%",
      "&::-webkit-scrollbar": {
        width: "0.4em",
      },
      "&::-webkit-scrollbar-thumb": {
        background: themes.palette.primary.grey2,
      },
    },
    hrstyles: {
      border: "0.5px solid #212121",
      width: "80%",
      margin: "0 auto",
    },
  }));

  const classes = homeStyles();

  return (
    <div className={classes.homeWrapper}>
      <Router>
        <Grid container className={classes.gridWrapper}>
          <Grid item className={classes.grid1}>
            <Grid container>
              <Grid item lg={12}>
                <LeftSidebar />
              </Grid>
              <hr className={classes.hrstyles} />
              <Grid item lg={12} className={classes.listScroll}>
                <PlayLists />
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.grid2}>
            <div className={classes.root}>
              <Switch>
                <Route exact path={HOMEPAGE}>
                  <Home />
                </Route>
                <Route path={PLAYLIST}>
                  <Library />
                </Route>
                <Route path={ONEPLAYLIST}>
                  <PlaylistDetails />
                </Route>
              </Switch>
            </div>
          </Grid>

          <Grid item className={classes.grid3}>
            <RightSidebar />
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
