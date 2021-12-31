import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../../Helpers/Theme";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import pic1 from "../../Assets/pic1.jpg";
import SpotifyPlayer from "react-spotify-web-playback";
import { connect, useSelector } from "react-redux";
import SpotifyWebPlayer from "react-spotify-web-playback";

const ControlsWrapper = ({ trackuri }) => {
  const controlStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      bottom: 0,
      width: "100%",
    },

    slider: {
      width: "40%",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    timeNo: {
      padding: "0 10px",
      fontWeight: "bold",
      color: themes.palette.primary.grey3,
    },

    preview: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      margin: 20,
    },
    previewDiv: {
      marginRight: 20,
    },
    previewImg: {
      width: "6vw",
    },
    titleDiv: {
      marginRight: 20,
      color: themes.palette.primary.white,
    },
    favourite: {
      color: themes.palette.primary.white,
      cursor: "pointer",
    },
    span: {
      color: themes.palette.primary.grey3,
      fontSize: 12,
    },
    volumeSlider: {
      position: "relative",
      right: 0,
      backgroundColor: themes.palette.primary.white,
    },
  }));
  const classes = controlStyles();

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  let accessToken = localStorage.getItem("token");
  const Details = useSelector((state) => state.details.Playlist);

  return (
    <>
      <div className={classes.root}>
        <SpotifyWebPlayer
          token={accessToken}
          showSaveIcon
          uris={trackuri ? [trackuri] : []}
          styles={{
            height: 80,
            width: "100%",
            bgColor: themes.palette.primary.grey4,
            activeColor: themes.palette.primary.white,
            trackNameColor: themes.palette.primary.white,
            trackArtistColor: themes.palette.primary.grey3,
            padding: "0 50px",
            color: "#fff",
            position: "fixed",
            bottom: 0,
            zIndex: 999,
          }}
        />
      </div>

      {/*
    <div className={classes.root}>
      <div className={classes.preview}>
        <div className={classes.previewDiv}>
          <img src={pic1} className={classes.previewImg} alt="music-preview" />
        </div>
        <div className={classes.titleDiv}>
          <p>Jennifer-Remix</p>
          <span className={classes.span}>Guchi, Rayvanny</span>
        </div>
        <div>
          <FavoriteIcon className={classes.favourite} />
        </div>
      </div>

      <CenterController />

      <div className={classes.slider}>
        <div className={classes.timeNo}>
          <Typography fontSize="small">0.00</Typography>
        </div>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <div className={classes.timeNo}>
          <Typography fontSize="small">5.00</Typography>
        </div>
      </div>

    
    </div>
    */}
    </>
  );
};

export default ControlsWrapper;
