import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import pic1 from "../Assets/pic1.jpg";
import { themes } from "../Helpers/Theme";

const MusicCard = () => {
  const cardStyle = makeStyles((theme) => ({
    root: {},
    imgStyle: {
      width: "100%",
      height: 200,
      objectFit: "cover",
    },
    media: {
      backgroundColor: themes.palette.primary.dark,
    },
    content: {
      backgroundColor: themes.palette.primary.dark,
      color: themes.palette.primary.grey3,
      padding: "10px 0 !important",
    },
    title: {
      color: themes.palette.primary.white,
    },
    wrapper: {
      backgroundColor: themes.palette.primary.dark,
      padding: "20px 20px 40px 20px",
      borderRadius: 6,
      "&:hover": {
        backgroundColor: themes.palette.primary.grey1,
      },
    },
  }));
  const classes = cardStyle();

  return (
    <div className={classes.wrapper}>
      <Card className={classes.root}>
        <CardMedia className={classes.media}>
          <img src={pic1} className={classes.imgStyle} alt="playlist-img" />
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="smallText">
            Omah Lay
          </Typography>
          <Typography>paragraph</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MusicCard;
