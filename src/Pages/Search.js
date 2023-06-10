import { makeStyles } from "@mui/styles";
import React from "react";
import { themes } from "../Helpers/Theme";
import { Grid, Typography } from "@mui/material";
import SearchCard from "../Components/SearchCard";

const Search = () => {
  const searchStyles = makeStyles((theme) => ({
    root: {
      padding: "60px 30px",
      [theme.breakpoints.down("sm")]: {
        padding: "0px 14px",
      },
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
  // const Searchresult = useSelector((state) => state.music.Searchedplaylists);
  const classes = searchStyles();

  return (
    <div className={classes.root}>
      <section className={classes.section}>
        <div className={classes.title}>
          <Typography variant="h5">Browse all</Typography>
        </div>
        <Grid container spacing={2} className={classes.CardContainer}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Grid item xl={4} lg={4} md={6} xs={6}>
              <SearchCard />
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  );
};

export default Search;
