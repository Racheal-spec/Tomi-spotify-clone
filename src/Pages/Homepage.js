import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import RightSidebar from "../Components/RightSidebar/RightSidebar";
import ControlsWrapper from "../Components/ControlsContainer/ControlsWrapper";
import { themes } from "../Helpers/Theme";
import Grid from "@mui/material/Grid";
import { Route } from "react-router-dom";
import Library from "../Pages/Library";
import {
  ALBUM,
  ARTIST,
  CREATEPLAYLIST,
  HOMEPAGE,
  ONEALBUM,
  ONEPLAYLIST,
  PLAYLIST,
  PODCAST,
  SEARCH,
} from "../Helpers/Routes";
import Home from "../Pages/Home";
import useMediaQuery from "@mui/material/useMediaQuery";
import PlayLists from "../Components/LeftSidebar/PlayLists";
import PlaylistDetails from "./PlaylistDetails";
import LeftSidebar from "../Components/LeftSidebar/LeftSidebar";
import DefaultNav from "../Components/MiddleComponent/Navigation/index";
import Search from "./Search";
import Podcasts from "./Podcasts";
import Artists from "./Artists";
import Albums from "./Albums";
import { useSelector } from "react-redux";
import MobileNav from "../Components/MobileNav";
import AlbumDetails from "./AlbumDetails";
import CreatePlaylist from "./CreatePlaylist";

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
    gridWrapper: {
      display: "flex",
    },
    grid1: {
      background: themes.palette.primary.black,
      color: themes.palette.primary.grey3,
      height: "calc(100vh + 30vh)",
      width: "20%",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    grid2: {
      background: themes.palette.primary.dark,
      color: themes.palette.primary.grey3,
      height: "calc(100vh + 30vh)",
      width: "60%",
      paddingBottom: 100,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    grid3: {
      background: themes.palette.primary.grey1,
      color: themes.palette.primary.grey3,
      height: "calc(100vh + 30vh)",
      width: "20%",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    footerControls: {
      position: "fixed",
      bottom: "30%",
    },
    listScroll: {
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
    mobileNav: {
      background: themes.palette.primary.grey2,
      width: "100%",
      height: "8%",
      position: "fixed",
      bottom: 0,
    },
  }));

  const classes = homeStyles();

  let accessToken = localStorage.getItem("token");

  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    setIsloading(false);
  }, [setIsloading]);
  const Details = useSelector((state) => state.details.Playlist);
  const User = useSelector((state) => state.music.User);
  const matches = useMediaQuery(themes.breakpoints.down("sm"));

  return (
    <>
      {isloading ? (
        <div>loading...</div>
      ) : (
        <div className={classes.homeWrapper}>
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
                <DefaultNav>
                  <Route exact path={HOMEPAGE}>
                    <Home />
                  </Route>
                  <Route path={PLAYLIST}>
                    <Library />
                  </Route>
                  <Route path={ONEPLAYLIST}>
                    <PlaylistDetails />
                  </Route>
                  <Route path={SEARCH}>
                    <Search />
                  </Route>
                  <Route path={PODCAST}>
                    <Podcasts />
                  </Route>
                  <Route path={ARTIST}>
                    <Artists />
                  </Route>
                  <Route path={ALBUM}>
                    <Albums />
                  </Route>
                  <Route path={ONEALBUM}>
                    <AlbumDetails />
                  </Route>
                  <Route path={CREATEPLAYLIST}>
                    <CreatePlaylist />
                  </Route>
                </DefaultNav>
              </div>
            </Grid>

            <Grid item className={classes.grid3}>
              <RightSidebar />
            </Grid>
          </Grid>

          <div className={classes.footerControls}>
            <ControlsWrapper
              accessToken={accessToken}
              trackuri={Details?.uri}
            />
          </div>
          {matches ? <MobileNav /> : ""}
        </div>
      )}
    </>
  );
};

export default Homepage;
