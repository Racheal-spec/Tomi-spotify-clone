import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { themes } from "../../Helpers/Theme";
import Typography from "@mui/material/Typography";
import {
  CREATEPLAYLIST,
  HOMEPAGE,
  PLAYLIST,
  SEARCH,
} from "../../Helpers/Routes";
import { FavoriteRounded } from "@mui/icons-material";
import classNames from "classnames";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LeftSidebar = () => {
  const controlStyles = makeStyles((theme) => ({
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
      padding: "8px 0",
      margin: "0 5px",
    },
    activeLink: {
      backgroundColor: themes.palette.primary.grey1,
      color: themes.palette.primary.white,
      cursor: "pointer",
      padding: "8px 0",
      borderRadius: 5,
      margin: "0 5px",
    },
    navlink: {
      color: themes.palette.primary.grey3,
      textDecoration: "none",
      "&:active": {},
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

  let history = useHistory();

  return (
    <div className={classes.root}>
      <div>
        <MoreHorizOutlinedIcon fontSize="large" className={classes.moreicon} />
      </div>
      <Link to={HOMEPAGE} className={classes.navlink}>
        <div
          className={classNames(classes.iconDiv, {
            [classes.activeLink]: history.location.pathname === HOMEPAGE,
          })}
        >
          <HomeOutlinedIcon className={classes.icon} />
          <Typography variant="smallerText" fontWeight="bold">
            Home
          </Typography>
        </div>
      </Link>
      <Link to={SEARCH} className={classes.navlink}>
        <div
          className={classNames(classes.iconDiv, {
            [classes.activeLink]: history.location.pathname === SEARCH,
          })}
        >
          <SearchOutlinedIcon className={classes.icon} />
          <Typography variant="smallerText" fontWeight="bold">
            Search
          </Typography>
        </div>
      </Link>
      <Link to={PLAYLIST} className={classes.navlink}>
        <div
          className={classNames(classes.iconDiv, {
            [classes.activeLink]: history.location.pathname === PLAYLIST,
          })}
        >
          <LibraryMusicIcon className={classes.icon} />
          <Typography variant="smallerText" fontWeight="bold">
            Library
          </Typography>
        </div>
      </Link>
      <div className={classes.menuDiv2}>
        <Link to={CREATEPLAYLIST} className={classes.navlink}>
          <div className={classes.iconDiv}>
            <AddBoxIcon className={classes.icon} />
            <Typography variant="smallerText" fontWeight="bold">
              Create Playlist
            </Typography>
          </div>
        </Link>
        <div className={classes.iconDiv}>
          <FavoriteRounded className={classes.likeicon} />
          <Typography variant="smallerText" fontWeight="bold">
            Liked Songs
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
