import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../../../Helpers/Theme";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const Navbar = ({ children }) => {
  const navStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0px 17px",
      backgroundColor: themes.palette.primary.grey2,
    },
    barWrapper: {
      display: "flex",
      alignItems: "center",
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
      borderRadius: 20,
      margin: "10px 12px",
      padding: "4px 8px 6px 8px",
      backgroundColor: themes.palette.primary.dark,
      cursor: "pointer",
    },
    upgrade: {
      fontWeight: "bold",
      backgroundColor: themes.palette.primary.black,
      padding: "6px 30px",
      borderRadius: 30,
      border: "1px solid #FAF9F6",
      marginRight: 30,
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
          <ArrowBackIos className={classes.arrow} fontSize="large" />
          <ArrowForwardIos className={classes.arrow} fontSize="large" />
        </div>

        <div className={classes.barWrapper}>
          <div className={classes.upgrade}>
            <Link
              to="https://www.spotify.com/ng/premium/"
              className={classes.upgradeLink}
            >
              upgrade
            </Link>
          </div>

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
      </div>
      {children}
    </>
  );
};

export default Navbar;
