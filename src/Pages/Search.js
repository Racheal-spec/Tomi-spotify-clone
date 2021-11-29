import { makeStyles } from "@mui/styles";
import React from "react";
import { themes } from "../Helpers/Theme";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { SEARCH } from "../Helpers/Routes";
import MusicCard from "../Components/MusicCard";
import SearchCard from "../Components/SearchCard";

const Search = () => {
  const searchStyles = makeStyles((theme) => ({
    root: {
      padding: "20px 30px",
    },
    titleDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "20px 0 8px 0",
    },
    title: {
      color: themes.palette.primary.white,
      margin: "10px 0",
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
    section: {
      padding: "30px 0",
    },
  }));

  const classes = searchStyles();

  return (
    <div className={classes.root}>
      <div className={classes.titleDiv}>
        <div className={classes.title}>
          <Typography variant="h5">Recent Searches</Typography>
        </div>
        <div>
          <Link to={SEARCH} className={classes.seeAll}>
            SEE ALL
          </Link>
        </div>
      </div>

      <Grid container spacing={2} className={classes.CardContainer}>
        {[0, 1, 2].map((item) => (
          <Grid item xl={4} lg={4} md={6} xs={12}>
            <MusicCard />
          </Grid>
        ))}
      </Grid>
      <section className={classes.section}>
        <div className={classes.title}>
          <Typography variant="h5">Browse all</Typography>
        </div>
        <Grid container spacing={2} className={classes.CardContainer}>
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <Grid item xl={4} lg={4} md={6} xs={12}>
              <SearchCard />
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  );
};

export default Search;
