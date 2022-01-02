import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../Helpers/Theme";
import { Grid, Typography } from "@mui/material";
import SmallCard from "../Components/MiddleComponent/SmallCard";
import { HOMEPAGE } from "../Helpers/Routes";
import { Link } from "react-router-dom";
import MusicCard from "../Components/MusicCard";
import Navbar from "../Components/MiddleComponent/Navigation/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFeaturedPlaylists,
  fetchNewReleases,
  fetchTopTracks,
} from "../Actions/Actions";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  let setColor = Math.floor(Math.random() * 16777215).toString(16);
  let bg = "#" + `${setColor}`;

  const homeStyles = makeStyles((theme) => ({
    homeWrapper: {
      background: `linear-gradient(to bottom, ${bg}, #000000 80%)`,
      height: "55%",
      padding: "80px 30px",
      [theme.breakpoints.down("sm")]: {
        padding: "80px 13px",
      },
    },
    CardContainer: {
      padding: "20px 0",
    },
    spaceY: {
      margin: "20px 0",
      color: themes.palette.primary.white,
    },
    titleDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "20px 0 8px 0",
    },
    title: {
      color: themes.palette.primary.white,
    },
    seeAll: {
      color: themes.palette.primary.grey3,
      textDecoration: "none",
      fontSize: 13,
      fontWeight: "bold",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    cardGrid: {
      [theme.breakpoints.down("sm")]: {},
    },
  }));

  const classes = homeStyles();

  const dispatch = useDispatch();

  const User = useSelector((state) => state.music.User);

  //const userCountry = User.country;

  const id = useParams().playlist_id;

  console.log(id);
  useEffect(() => {
    dispatch(fetchNewReleases());
    dispatch(fetchFeaturedPlaylists());
  }, [dispatch]);

  const Playlists = useSelector((state) => state.music.Playlists);
  const Newreleases = useSelector((state) => state.music.Newreleases);
  const Featuredplaylists = useSelector(
    (state) => state.music.Featuredplaylists
  );
  const Toptracks = useSelector((state) => state.music.Toptracks);
  const Recentlyplayed = useSelector((state) => state.music.Recentlyplayed);
  console.log(Toptracks);
  console.log(Recentlyplayed);

  return (
    <div className={classes.homeWrapper}>
      <Typography variant="h4" className={classes.spaceY}>
        Good afternoon
      </Typography>
      <Grid container spacing={1} className={classes.CardContainer}>
        {Playlists.slice(0, 4).map((item) => (
          <Grid item xl={6} lg={6} xs={6} key={item.id}>
            <SmallCard
              id={item.id}
              name={item.name}
              images={item.images[0].url}
            />
          </Grid>
        ))}
      </Grid>

      <div className={classes.titleDiv}>
        <div className={classes.title}>
          <Typography variant="h5">New Releases</Typography>
        </div>
        <div>
          <Link to={HOMEPAGE} className={classes.seeAll}>
            SEE ALL
          </Link>
        </div>
      </div>
      <Grid container spacing={2}>
        {Newreleases?.albums.items &&
          Newreleases?.albums.items.slice(0, 3).map((item) => (
            <Grid item xl={4} lg={4} xs={12} className={classes.cardGrid}>
              <MusicCard
                id={item.id}
                key={item.id}
                name={item.name}
                images={item.images[0].url}
              />
            </Grid>
          ))}
      </Grid>

      <div className={classes.titleDiv}>
        <div className={classes.title}>
          <Typography variant="h5">{Featuredplaylists?.message}</Typography>
        </div>
        <div>
          <Link to={HOMEPAGE} className={classes.seeAll}>
            SEE ALL
          </Link>
        </div>
      </div>
      <Grid container spacing={2}>
        {Featuredplaylists?.playlists.items &&
          Featuredplaylists?.playlists.items.slice(0, 5).map((item) => (
            <Grid item xl={4} lg={4} xs={12}>
              <MusicCard
                id={item.id}
                key={item.id}
                name={item.name}
                images={item.images[0].url}
                description={item.description}
              />
            </Grid>
          ))}
      </Grid>

      <div className={classes.titleDiv}>
        <div className={classes.title}>
          <Typography variant="h5">Recently Played</Typography>
        </div>
        <div>
          <Link to={HOMEPAGE} className={classes.seeAll}>
            SEE ALL
          </Link>
        </div>
      </div>
      <Grid container spacing={2}>
        {Recentlyplayed &&
          Recentlyplayed?.map((item) => (
            <Grid item xl={4} lg={4} xs={12}>
              <MusicCard
                id={item.id}
                key={item.id}
                name={item.name}
                images={item.images[0].url}
                description={item.description}
              />
            </Grid>
          ))}
      </Grid>

      <div className={classes.titleDiv}>
        <div className={classes.title}>
          <Typography variant="h5">Top Tracks</Typography>
        </div>
        <div>
          <Link to={HOMEPAGE} className={classes.seeAll}>
            SEE ALL
          </Link>
        </div>
      </div>
      <Grid container spacing={2}>
        {Toptracks &&
          Toptracks?.map((item) => (
            <Grid item xl={4} lg={4} xs={12}>
              <MusicCard
                id={item.id}
                key={item.id}
                name={item.name}
                images={item.images[0].url}
                description={item.description}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Home;
