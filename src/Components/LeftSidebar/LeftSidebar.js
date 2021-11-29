import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { themes } from "../../Helpers/Theme";
import Typography from "@mui/material/Typography";
import PlayLists from "./PlayLists";
import { PLAYLIST, SEARCH } from "../../Helpers/Routes";
import { FavoriteRounded } from "@mui/icons-material";

const LeftSidebar = () => {
  const controlStyles = makeStyles((theme) => ({
    /*
    "@global": {
      "*::-webkit-scrollbar": {
        width: 10,
      },
      "*::-webkit-scrollbar-track": {
        borderRadius: 10,
      },
      "*::-webkit-scrollbar-thumb": {
        background: themes.palette.primary.grey2,
      },
    },
    */
    root: {
      padding: "7px 0",
      "*::-webkit-scrollbar": {
        width: 10,
      },
      "*::-webkit-scrollbar-track": {
        borderRadius: 10,
      },
    },
    icon: {
      color: themes.palette.primary.grey3,
      cursor: "pointer",
      margin: "0 15px",
      "&:hover": {
        color: themes.palette.primary.white,
      },
      "&:focus": {
        color: themes.palette.primary.white,
      },
    },
    moreicon: {
      color: themes.palette.primary.white,
      cursor: "pointer",
      margin: "7px 5px",
    },
    iconDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "5px 0",
      "&:focus": {
        backgroundColor: themes.palette.primary.grey1,
        color: themes.palette.primary.white,
        cursor: "pointer",
        padding: "6px 5px",
        margin: "0 20px",
      },
    },
    navlink: {
      color: themes.palette.primary.grey3,
      textDecoration: "none",
    },
    spacing: {
      padding: "0 30px",
    },
    menuDiv2: {
      padding: "20px 0",
    },

    likeicon: {
      background: "linear-gradient(to right bottom, #430089 30% , #ffffff )",
      cursor: "pointer",
      margin: "0 15px",
      padding: 5,
      "&:hover": {
        color: themes.palette.primary.white,
      },
      "&:focus": {
        color: themes.palette.primary.white,
      },
    },
  }));
  const classes = controlStyles();

  return (
    <div className={classes.root}>
      <div>
        <MoreHorizOutlinedIcon fontSize="large" className={classes.moreicon} />
      </div>
      <Link to="/" className={classes.navlink}>
        <div className={classes.iconDiv}>
          <HomeOutlinedIcon className={classes.icon} />
          <Typography variant="smallText" fontWeight="bold">
            Home
          </Typography>
        </div>
      </Link>
      <Link to={SEARCH} className={classes.navlink}>
        <div className={classes.iconDiv}>
          <SearchOutlinedIcon className={classes.icon} />
          <Typography variant="smallText" fontWeight="bold">
            Search
          </Typography>
        </div>
      </Link>
      <Link to={PLAYLIST} className={classes.navlink}>
        <div className={classes.iconDiv}>
          <HomeOutlinedIcon className={classes.icon} />
          <Typography variant="smallText" fontWeight="bold">
            Library
          </Typography>
        </div>
      </Link>
      <div className={classes.menuDiv2}>
        <div className={classes.iconDiv}>
          <AddBoxIcon className={classes.icon} />
          <Typography variant="smallText" fontWeight="bold">
            Create Playlist
          </Typography>
        </div>
        <div className={classes.iconDiv}>
          <FavoriteRounded className={classes.likeicon} />
          <Typography variant="smallText" fontWeight="bold">
            Liked Songs
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;