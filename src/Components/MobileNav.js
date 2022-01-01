import React from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../Helpers/Theme";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { HOMEPAGE, SEARCH } from "../Helpers/Routes";

const MobileNav = () => {
  const mobileStyles = makeStyles((theme) => ({
    mobileNav: {
      background: themes.palette.primary.dark,
      width: "100%",
      height: "10%",
      position: "fixed",
      bottom: "0%",
      zIndex: 99,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    icon: {
      color: themes.palette.primary.white,
    },
    iconDiv: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    navlink: {
      textDecoration: "none",
    },
    iconName: {
      color: themes.palette.primary.white,
      fontSize: 12,
    },
  }));

  const classes = mobileStyles();

  return (
    <div className={classes.mobileNav}>
      <Link to={HOMEPAGE} className={classes.navlink}>
        <div className={classes.iconDiv}>
          <HomeOutlinedIcon className={classes.icon} />
          <div className={classes.iconName}>Home</div>
        </div>
      </Link>
      <Link to={SEARCH} className={classes.navlink}>
        <div className={classes.iconDiv}>
          <SearchOutlinedIcon className={classes.icon} />
          <div className={classes.iconName}>Search</div>
        </div>
      </Link>
      <Link to="/" className={classes.navlink}>
        <div className={classes.iconDiv}>
          <LibraryMusicIcon className={classes.icon} />
          <div className={classes.iconName}>Library</div>
        </div>
      </Link>
    </div>
  );
};

export default MobileNav;
