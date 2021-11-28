import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { themes } from "../../../Helpers/Theme";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

const LibraryNav = ({ children }) => {
  const navStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 2,
    },
    profile: {
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      backgroundColor: themes.palette.primary.black,
      borderRadius: 30,
      cursor: "pointer",
      padding: "4px 0",
    },
    arrow: {
      width: 45,
      height: 45,
      borderRadius: 50,
      margin: "10px 12px",
      padding: "4px 4px 6px 5px",
      backgroundColor: themes.palette.primary.dark,
      cursor: "pointer",
    },
    upgrade: {
      fontWeight: "bold",
      backgroundColor: themes.palette.primary.black,
      padding: "6px 30px",
      borderRadius: 30,
      border: "1px solid #FAF9F6",
      marginLeft: 200,
    },
    upgradeLink: {
      color: themes.palette.primary.offwhite,
      textDecoration: "none",
      letterSpacing: 2,
      fontSize: 12,
      textTransform: "Uppercase",
    },
    margin: {
      margin: "0 6px",
      color: themes.palette.primary.offwhite,
    },
  }));
  const classes = navStyles();

  const [clickArrow, setClickArrow] = useState();
  const handleClick = () => {
    setClickArrow(!clickArrow);
  };

  const User = useSelector((state) => state.music.User);

  console.log(User);

  return (
    <>
      <div className={classes.root}>
        <div>
          <ArrowBackIos className={classes.arrow} />
          <ArrowForwardIos className={classes.arrow} />
        </div>

        <div className={classes.upgrade}>libraryyyyyyyy</div>

        <div className={classes.profile} onClick={handleClick}>
          <Avatar
            src={User?.images[0].url}
            style={{ width: "25px", height: "25px" }}
          />
          <p className={classes.margin}>Tomisin</p>
          {clickArrow ? (
            <ArrowDropDownOutlinedIcon />
          ) : (
            <ArrowDropUpOutlinedIcon />
          )}
        </div>
      </div>
      {children}
    </>
  );
};

export default LibraryNav;
