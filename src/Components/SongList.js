import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { themes } from "../Helpers/Theme";

const SongList = ({ track }) => {
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
    },
    songimg: {
      width: "100%",
    },
    imgtextDiv: {
      display: "grid",
      gridTemplateColumns: "10% 100%",
    },
    trackname: {
      marginLeft: 20,
    },
  }));
  const classes = songListStyles();

  return (
    <div className={classes.root}>
      <div>{track.track_number}</div>
      <div className={classes.imgtextDiv}>
        <div>
          <img
            src={track.album.images[0].url}
            className={classes.songimg}
            alt="songimg"
          />
        </div>
        <div className={classes.trackname}>
          <Typography>{track.name}</Typography>
          <Typography variant="smallerText">
            {track.album.artists[0].name}
          </Typography>
        </div>
      </div>

      <div>
        <Typography variant="smallerText">{track.album.name}</Typography>
      </div>
      <div>
        <FavoriteBorderIcon fontSize="small" />
      </div>
      <div>{track.duration_ms}</div>
    </div>
  );
};

export default SongList;
