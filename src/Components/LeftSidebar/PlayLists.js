import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { themes } from "../../Helpers/Theme";
import axios from "axios";
import { PLAYLIST_URL } from "../../ApiUrl";
import { useSelector } from "react-redux";
import { PlaylistSelector } from "../../Reducers/Reducer";
import { useDispatch } from "react-redux";
import { loadPlaylists } from "../../Actions/Actions";
import { Link } from "react-router-dom";

const PlayLists = () => {
  const playlistStyles = makeStyles((theme) => ({
    root: {
      padding: 20,
      width: "100%",
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
      //margin: "5px 0",
    },
  }));
  const classes = playlistStyles();
  const dispatch = useDispatch();

  const [access_token, setToken] = useState("");

  //const { token } = useSelector((state) => state.music);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    const getPlaylists = async () => {
      const response = await axios.get(PLAYLIST_URL, {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      dispatch(loadPlaylists(response.data));
      console.log(access_token);
    };
    getPlaylists();
  }, [access_token, dispatch]);

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
        {Playlists.items.map((item) => (
          <div key={item.id} className={classes.linkDiv}>
            <Link to={item.href} className={classes.link}>
              <p>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayLists;
