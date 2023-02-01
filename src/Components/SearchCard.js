import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { themes } from "../Helpers/Theme";
import img1 from "../Assets/searchImg.jpeg";

const SearchCard = () => {
  const searchcard = makeStyles((theme) => ({
    root: {
      position: "relative",
      overflow: "hidden",
    },
    wrapper: {
      padding: "15px 20px",
      backgroundColor: "rgb(160, 195, 210)",
      borderRadius: 6,
      zIndex: 2,
      background: "linear-gradient(0deg,transparent,rgba(0,0,0,.4))",
    },
    title: {
      color: themes.palette.primary.white,
      [theme.breakpoints.down("sm")]: {
        fontSize: 10,
      },
    },
    img: {
      width: "40%",
      transform: "rotate(25deg)",
      position: "absolute",
      bottom: 0,
      right: -10,
    },
    imgDiv: {
      padding: "140px 0 0 0",
      [theme.breakpoints.down("sm")]: {
        padding: "40px 0 0 0",
      },
    },
  }));
  const classes = searchcard();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Typography className={classes.title} variant="h5">
          Made For You
        </Typography>
        <div className={classes.imgDiv}>
          <img src={img1} className={classes.img} alt="search" />
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
