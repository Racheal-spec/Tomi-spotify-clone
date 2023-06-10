import React from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../../Helpers/Theme";

import SpotifyWebPlayer from "react-spotify-web-playback";

const ControlsWrapper = ({ trackuri }) => {
  const controlStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        bottom: "8%",
      },
    },
  }));
  const classes = controlStyles();

  let accessToken = localStorage.getItem("token");

  return (
    <>
      <div className={classes.root}>
        <SpotifyWebPlayer
          token={accessToken}
          showSaveIcon
          uris={trackuri ? [trackuri] : []}
          callback={(error) => console.log(error)}
          styles={{
            height: 80,
            width: "100%",
            bgColor: themes.palette.primary.grey4,
            activeColor: themes.palette.primary.white,
            trackNameColor: themes.palette.primary.white,
            trackArtistColor: themes.palette.primary.grey3,
            padding: "0 50px",
            color: "#fff",
          }}
        />
      </div>
    </>
  );
};

export default ControlsWrapper;
