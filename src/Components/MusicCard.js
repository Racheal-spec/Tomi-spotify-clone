import { PlayArrow } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { themes } from "../Helpers/Theme";
import PauseIcon from "@mui/icons-material/Pause";
import { useDispatch } from "react-redux";
import { fetchDetails } from "../Actions/Actions";

const MusicCard = ({ id, description, images, name }) => {
  const cardStyle = makeStyles((theme) => ({
    root: {
      padding: "15px 20px",
      "&:hover": {
        backgroundColor: "#272727",
      },
    },
    imgStyle: {
      width: "100%",
      height: 180,
      objectFit: "cover",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    media: {
      position: "relative",
    },
    content: {
      color: themes.palette.primary.grey3,
      padding: "10px 0 !important",
    },
    title: {
      color: themes.palette.primary.white,
    },
    link: {
      textDecoration: "none",
    },
    icon: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      padding: 8,
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)",
      background: themes.palette.primary.main,
      color: themes.palette.primary.white,
      position: "absolute",
      bottom: "10px",
      right: "12px",
      cursor: "auto",
      zIndex: 2,
    },
  }));

  const classes = cardStyle();

  const [mousehover, setMouseHover] = useState({ opacity: 0 });
  const [cardhover, setcardhover] = useState({ backgroundColor: "#121212" });

  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClick(!click);
  };

  const dispatch = useDispatch();

  const handleDetails = () => {
    dispatch(fetchDetails(id));
  };

  return (
    <Link
      to={`/playlist/${id}`}
      onClick={handleDetails}
      className={classes.link}
      onMouseEnter={(e) => {
        setMouseHover({
          opacity: "1",
          transition: "all 0.4s ease",
          bottom: "6px",
        });
      }}
      onMouseLeave={(e) => {
        setMouseHover({ opacity: "0" });
      }}
    >
      <div
        onMouseEnter={(e) => {
          setcardhover({
            transition: "all 0.4s ease",
            backgroundColor: "#272727",
          });
        }}
        onMouseLeave={(e) => {
          setcardhover({ backgroundColor: "#121212" });
        }}
      >
        <Card className={classes.root} style={cardhover}>
          <CardMedia className={classes.media}>
            <img src={images} className={classes.imgStyle} alt="playlist-img" />
            <div
              className={classes.icon}
              style={mousehover}
              onClick={handleClick}
            >
              {click ? <PauseIcon /> : <PlayArrow />}
            </div>
          </CardMedia>
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant="smallText">
              {name}
            </Typography>
            <div>
              <Typography variant="smallerText">{description}</Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
};

export default MusicCard;
