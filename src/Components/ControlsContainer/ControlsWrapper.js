import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../../Helpers/Theme";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import pic1 from "../../Assets/pic1.jpg";

const ControlsWrapper = () => {
  const controlStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      bottom: 0,
      width: "100%",
    },
    icon: {
      color: themes.palette.primary.grey3,
      cursor: "pointer",
      "&:hover": {
        color: themes.palette.primary.white,
      },
      "&:focus": {
        color: themes.palette.primary.white,
      },
    },
    iconDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5px 0",
    },
    middleBtn: {
      margin: "0 13px",
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
    spacing: {
      padding: "0 30px",
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

  return (
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
      <div className={classes.iconDiv}>
        <div className={classes.spacing}>
          <ShuffleIcon fontSize="small" className={classes.icon} />
        </div>
        <FastRewindIcon className={classes.icon} />
        <div className={classes.middleBtn} onClick={handleClick}>
          {click ? (
            <PlayCircleFilledIcon fontSize="large" className={classes.icon} />
          ) : (
            <PauseCircleIcon fontSize="large" className={classes.icon} />
          )}
        </div>
        <FastForwardIcon className={classes.icon} />
        <div className={classes.spacing}>
          <RepeatIcon fontSize="small" className={classes.icon} />
        </div>
      </div>
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
  );
};

export default ControlsWrapper;
