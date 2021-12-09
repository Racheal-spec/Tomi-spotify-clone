import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { themes } from "../../Helpers/Theme";
import axios from "axios";
import { PLAYLIST_URL } from "../../ApiUrl";
import { useSelector } from "react-redux";
import { PlaylistSelector } from "../../Reducers/Reducer";
import { useDispatch } from "react-redux";
import { fetchDetails, loadPlaylists } from "../../Actions/Actions";
import { Link } from "react-router-dom";
import { ONEPLAYLIST } from "../../Helpers/Routes";
import SongList from "./SongList";

const PlayLists = ({ id }) => {
  const playlistStyles = makeStyles((theme) => ({
    root: {
      padding: 20,
      width: "100vh",
    },
    list: {
      display: "flex",
      flexDirection: "column",
    },
    link: {
      color: themes.palette.primary.grey3,
      cursor: "pointer",
      textDecoration: "none",
      fontSize: 14,
      fontWeight: 500,
      "&:hover": {
        color: themes.palette.primary.white,
      },
    },
    linkDiv: {
      margin: "10px 0",
    },
  }));
  const classes = playlistStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlaylists());
  }, [dispatch]);

  const handleDetails = () => {
    dispatch(fetchDetails(id));
  };

  const Playlists = useSelector((state) => state.music.Playlists);
  console.log(Playlists);

  return (
    <div className={classes.root}>
      <div className={classes.list}>
        <Typography variant="smallText" fontWeight="bold">
          Playlists
        </Typography>
      </div>
      <div>
        {Playlists.map((item) => (
          <div key={item.id} className={classes.linkDiv}>
            <SongList id={item.id} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayLists;
