import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { themes } from "../Helpers/Theme";
import axios from "axios";
import { PLAYLIST_URL } from "../ApiUrl";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadPlaylists } from "../Actions/Actions";
import { Link } from "react-router-dom";

const Library = () => {
  const playlistStyles = makeStyles((theme) => ({
    root: {
      padding: 20,
      height: "100%",
      //overflow: "scroll",
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
    linkDiv: {
      margin: "10px 0",
    },
  }));
  const classes = playlistStyles();

  const Playlists = useSelector((state) => state.music.Playlists);
  console.log(Playlists);

  return (
    <div className={classes.root}>
      <div className={classes.list}>
        <Typography variant="smallText" fontWeight="bold">
          All Playlists
        </Typography>
      </div>
      <div>
        {Playlists.items.map((item) => (
          <div key={item.id} className={classes.linkDiv}>
            <Link to={item.href} className={classes.link}>
              {item.name}
              <img src={item.snapshot_id} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
