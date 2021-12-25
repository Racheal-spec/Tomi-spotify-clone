import React, { useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { makeStyles } from "@mui/styles";
import { themes } from "../../Helpers/Theme";
import { connect } from "react-redux";
import { togglePlayer } from "../../Actions/Actions";

const CenterController = (props) => {
  const centerStyles = makeStyles({
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
    spacing: {
      padding: "0 30px",
    },
  });

  const classes = centerStyles();

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  let audio = new Audio();

  const toggleBtn = () => {
    props.togglePlayer();
    audio.src = props.details;
    if (!props.details.play) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  //console.log(props.details.Playlist);

  return (
    <div>
      <div className={classes.iconDiv}>
        <div className={classes.spacing}>
          <ShuffleIcon fontSize="small" className={classes.icon} />
        </div>
        <FastRewindIcon className={classes.icon} />
        <div className={classes.middleBtn} onClick={handleClick}>
          {props.music.play ? (
            <PlayCircleFilledIcon
              onClick={toggleBtn}
              fontSize="large"
              className={classes.icon}
            />
          ) : (
            <PauseCircleIcon
              onClick={toggleBtn}
              fontSize="large"
              className={classes.icon}
            />
          )}
        </div>
        <FastForwardIcon className={classes.icon} />
        <div className={classes.spacing}>
          <RepeatIcon fontSize="small" className={classes.icon} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.details);
  return { details: state.details, music: state.music };
  //returns all data in the store
};

export default connect(mapStateToProps, { togglePlayer })(CenterController);
