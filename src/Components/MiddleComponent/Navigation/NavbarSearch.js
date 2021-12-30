import { ArrowBackIos, ArrowForwardIos, Search } from "@mui/icons-material";
import { Avatar, IconButton, InputAdornment, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { themes } from "../../../Helpers/Theme";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NavbarSearch = ({ children }) => {
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
    search: {
      marginRight: 160,
    },

    searchStyles: {
      width: "350px",
      height: "40px",
      fontWeight: "bold",
      backgroundColor: themes.palette.primary.white,
      padding: "6px 30px",
      border: 0,
      borderRadius: "30px !important",
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

  let history = useHistory();

  return (
    <>
      <div className={classes.root}>
        <div>
          <ArrowBackIos
            className={classes.arrow}
            onClick={() => history.goBack()}
          />
          <ArrowForwardIos
            className={classes.arrow}
            onClick={() => history.goForward()}
          />
        </div>

        <div className={classes.search}>
          <TextField
            type="search"
            variant="outlined"
            placeholder="Artists, songs or podcasts"
            disableRipple
            InputProps={{
              className: classes.searchStyles,
              endAdornment: (
                <InputAdornment>
                  <IconButton edge="end">
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
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
      {children}
    </>
  );
};

export default NavbarSearch;
