import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { themes } from "../Helpers/Theme";
import axios from "axios";

import { useSelector } from "react-redux";
import { Grid, listItemAvatarClasses } from "@mui/material";
import MusicCard from "../Components/MusicCard";

const Library = () => {
  const playlistStyles = makeStyles((theme) => ({
    root: {
      padding: "20px 30px",
      height: "100%",
    },
    list: {
      display: "flex",
      flexDirection: "column",
    },
    link: {
      color: themes.palette.primary.grey3,
      cursor: "pointer",
      textDecoration: "none",
      "&:hover": {
        color: themes.palette.primary.white,
      },
    },
    typo: {
      color: themes.palette.primary.white,
      padding: "10px 0",
    },
    linkDiv: { margin: "10px 0" },
  }));
  const classes = playlistStyles();

  const Playlists = useSelector((state) => state.music.Playlists);
  console.log(Playlists);

  return (
    <div className={classes.root}>
      <div className={classes.list}>
        <Typography variant="h6" className={classes.typo}>
          Playlists
        </Typography>
      </div>
      <div>
        <Grid container spacing={2}>
          {Playlists.map((list) => (
            <Grid item xl={4} lg={4} xs={12} key={list.id}>
              <MusicCard
                id={list.id}
                images={list.images[0].url}
                description={list.description}
                name={list.name}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Library;
