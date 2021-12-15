import { makeStyles } from "@mui/styles";
import React from "react";

const SongList = ({ track }) => {
  const songListStyles = makeStyles((theme) => ({
    root: {
      //padding: "50px 0",
    },
  }));
  const classes = songListStyles();

  return (
    <div className={classes.root}>
      <div>{track.name}</div>
    </div>
  );
};

export default SongList;
