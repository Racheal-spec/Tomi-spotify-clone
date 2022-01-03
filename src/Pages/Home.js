import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../Helpers/Theme";
import { Grid, Typography } from "@mui/material";
import SmallCard from "../Components/MiddleComponent/SmallCard";
import { HOMEPAGE } from "../Helpers/Routes";
import { Link } from "react-router-dom";
import MusicCard from "../Components/MusicCard";

import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedPlaylists, fetchNewReleases } from "../Actions/Actions";

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

  const isloading = useSelector((state) => state.music.isLoading);

  useEffect(() => {
    dispatch(fetchNewReleases());
    dispatch(fetchFeaturedPlaylists());
  }, [dispatch]);

  const Playlists = useSelector((state) => state.music.Playlists);
  const Newreleases = useSelector((state) => state.music.Newreleases);
  const Featuredplaylists = useSelector(
    (state) => state.music.Featuredplaylists
  );

  const hour = new Date().getHours();

  return (
    <>
      {isloading ? (
        <div>loading</div>
      ) : (
        <div className={classes.homeWrapper}>
          <Typography variant="h4" className={classes.spaceY}>
            {hour < 12
              ? "Good morning"
              : hour < 18
              ? "Good afternoon"
              : "Good evening"}
          </Typography>
          <Grid container spacing={1} className={classes.CardContainer}>
            {Playlists.slice(0, 4).map((item) => (
              <Grid item xl={6} lg={6} xs={6} key={item.id}>
                <SmallCard
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
              Featuredplaylists?.playlists.items.slice(0, 6).map((item) => (
                <Grid item xl={4} lg={4} xs={6} key={item.id}>
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
              Newreleases?.albums.items.slice(0, 4).map((item) => (
                <Grid
                  item
                  xl={4}
                  lg={4}
                  xs={6}
                  key={item.id}
                  className={classes.cardGrid}
                >
                  <MusicCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    images={item.images[0].url}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      )}
    </>
  );
};

export default Home;
