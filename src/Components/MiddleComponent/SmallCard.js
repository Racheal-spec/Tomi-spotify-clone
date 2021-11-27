import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { themes } from "../../Helpers/Theme";
import girl3 from "../../Assets/girl3.jpg";
import classNames from "classnames";
import { Box } from "@mui/system";
import { PlayArrow, PlayCircle } from "@mui/icons-material";

const SmallCard = () => {
  const smallCardStyle = makeStyles((theme) => ({
    root: {
      width: "50%",
      backgroundColor: themes.palette.primary.grey1,
      color: themes.palette.primary.white,
      borderRadius: 6,
      boxShadow:
        "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset",
    },
    cardWrapper: {
      display: "flex",
      alignItems: "center",
    },
    grid1: {
      width: "25%",
    },
    grid2: {
      width: "70%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 10px",
    },
    postalImg: {
      maxWidth: "25%",
      height: 80,
      objectFit: "cover",
    },
    icon: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      padding: 8,
      cursor: "pointer",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)",
      background: themes.palette.primary.main,
    },
  }));
  const classes = smallCardStyle();

  return (
    <div className={classes.root}>
      <div className={classes.cardWrapper}>
        <img src={girl3} className={classes.postalImg} alt="postal" />
        <div className={classes.grid2}>
          <div>
            <strong>Liked songs</strong>
          </div>
          <div className={classes.icon}>
            <PlayArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
