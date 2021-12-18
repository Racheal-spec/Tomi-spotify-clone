import React from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../Helpers/Theme";
import { Grid, Typography } from "@mui/material";
import SmallCard from "../Components/MiddleComponent/SmallCard";
import { HOMEPAGE } from "../Helpers/Routes";
import { Link } from "react-router-dom";
import MusicCard from "../Components/MusicCard";
import Navbar from "../Components/MiddleComponent/Navigation/Navbar";
import { useSelector } from "react-redux";

const Home = () => {
  const homeStyles = makeStyles((theme) => ({
    homeWrapper: {
      background: "linear-gradient(to bottom, #000137, #000000 )",
      height: "100%",
      padding: "10px 30px",
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
  }));

  const classes = homeStyles();

  const Playlists = useSelector((state) => state.music.Playlists);

  return (
    <div className={classes.homeWrapper}>
      <Typography variant="h4" className={classes.spaceY}>
        Good afternoon
      </Typography>
      <Grid container spacing={2} className={classes.CardContainer}>
        {Playlists.slice(0, 4).map((item) => (
          <Grid item xl={6} lg={6} xs={12} key={item.id}>
            <SmallCard id={item.id} name={item.name} />
          </Grid>
        ))}
      </Grid>

      <div className={classes.titleDiv}>
        <div className={classes.title}>
          <Typography variant="h5">Your top mixes</Typography>
        </div>
        <div>
          <Link to={HOMEPAGE} className={classes.seeAll}>
            SEE ALL
          </Link>
        </div>
      </div>
      <Grid container spacing={2}>
        {[0, 1, 2].map((item) => (
          <Grid item xl={4} lg={4} xs={12}>
            <MusicCard />
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
        {[0, 1, 2].map((item) => (
          <Grid item xl={4} lg={4} xs={12}>
            <MusicCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
