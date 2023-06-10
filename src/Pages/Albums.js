import { Grid, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbumDetails, loadAlbums } from "../Actions/Actions";
import MusicCard from "../Components/MusicCard";
import { themes } from "../Helpers/Theme";

const Albums = () => {
  const albumStyles = makeStyles((theme) => ({
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
  const classes = albumStyles();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAlbums());
  }, [dispatch]);

  const Albums = useSelector((state) => state.music.Albums);
  const matches = useMediaQuery(themes.breakpoints.down("sm"));

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.list}>
          <Typography variant="h6" className={classes.typo}>
            Albums
          </Typography>
        </div>
        <div>
          <Grid container spacing={matches ? 0 : 2}>
            {Albums.map((list) => (
              <Grid item xl={4} lg={4} xs={6} key={list.album.id}>
                <MusicCard
                  id={list.album.id}
                  handleDetails={() =>
                    dispatch(fetchAlbumDetails({ album_id: list.album.id }))
                  }
                  cardlink={`/album/${list.album.id}`}
                  images={
                    list.album.images === [] ? "" : list.album.images[0]?.url
                  }
                  description={list.album.artists[0].name}
                  name={list.album.name}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Albums;
