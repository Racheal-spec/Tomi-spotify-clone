import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { themes } from "../Helpers/Theme";
import { PlayArrow } from "@mui/icons-material";
import PauseIcon from "@mui/icons-material/Pause";

const SongList = ({ track, list, trackuri, chooseTrack, id }) => {
  const songListStyles = makeStyles((theme) => ({
    root: {
      display: "grid",
      gridTemplateColumns: "30px 2fr 220px 35px 60px",
      padding: "8px 0",
      "&:hover": {
        padding: "8px 0",
        borderRadius: 3,
        backgroundColor: themes.palette.primary.grey1,
      },
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "100px 220px 100px",
      },
    },
    songimg: {
      width: "100%",
    },
    imgtextDiv: {
      display: "grid",
      gridTemplateColumns: "10% 100%",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "40% 200%",
      },
    },
    trackname: {
      marginLeft: 20,
    },
    songname: {
      color: themes.palette.primary.white,
    },
    index: {
      fontSize: "20px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    duration: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    albumName: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    Favorite: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));
  const classes = songListStyles();

  const [mousehover, setMouseHover] = useState({ opacity: 0 });
  const [changehover, setChangeHover] = useState();
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setClick(!click);
  };

  const convertMS = (ms) => {
    let seconds, minutes, hour;
    seconds = Math.floor(ms / 1000);
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;
    hour = Math.floor(minutes / 60);

    return {
      hour: hour,
      minute: minutes,
      seconds: seconds,
    };
  };

  const duration = convertMS(track.duration_ms);

  return (
    <>
      <div
        key={track.id}
        className={classes.root}
        onMouseEnter={(e) => {
          setMouseHover({
            opacity: 1,
          });
          setChangeHover(PlayArrow);
        }}
        onMouseLeave={(e) => {
          setMouseHover({
            opacity: 0,
          });
          setChangeHover();
        }}
      >
        <div className={classes.index} onClick={handleClick}>
          {changehover ? (
            <div onClick={handleClick}>
              {click ? <PauseIcon /> : <PlayArrow />}
            </div>
          ) : (
            list + 1
          )}
        </div>
        <div className={classes.imgtextDiv}>
          <div>
            <img
              src={track.album.images[0].url}
              className={classes.songimg}
              alt="songimg"
            />
          </div>
          <div className={classes.trackname}>
            <Typography className={classes.songname}>{track.name}</Typography>
            <Typography variant="smallerText">
              {track.album.artists[0].name}
            </Typography>
          </div>
        </div>

        <div className={classes.albumName}>
          <Typography variant="smallerText">{track.album.name}</Typography>
        </div>
        <div style={mousehover} className={classes.Favorite}>
          <FavoriteBorderIcon fontSize="small" />
        </div>
        <div className={classes.duration}>
          {duration.minute}: {duration.seconds}
        </div>
      </div>
    </>
  );
};

export default SongList;
