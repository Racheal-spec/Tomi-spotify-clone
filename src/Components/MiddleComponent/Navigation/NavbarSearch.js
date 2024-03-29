import { ArrowBackIos, ArrowForwardIos, Search } from "@mui/icons-material";
import { Avatar, IconButton, InputAdornment, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themes } from "../../../Helpers/Theme";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import { searchPlaylists } from "../../../Actions/Actions";
import { useHistory, useLocation } from "react-router-dom";

const NavbarSearch = ({ children }) => {
  const navStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: themes.palette.primary.grey4,
      padding: 8,
      position: "fixed",
      width: "60%",
      zIndex: 2,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    profile: {
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      backgroundColor: themes.palette.primary.black,
      borderRadius: 30,
      cursor: "pointer",
      padding: "4px 0",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
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
      [theme.breakpoints.down("sm")]: {
        marginRight: 0,
      },
    },
    searchStyles: {
      width: "350px",
      height: "40px",
      fontWeight: "bold",
      backgroundColor: themes.palette.primary.white,
      padding: "6px 30px",
      border: 0,
      borderRadius: "30px !important",
      [theme.breakpoints.down("sm")]: {
        width: "250px",
      },
    },
    margin: {
      margin: "0 6px",
      color: themes.palette.primary.offwhite,
    },
  }));
  const classes = navStyles();

  const [clickArrow, setClickArrow] = useState();
  const User = useSelector((state) => state.music.User);
  const SearchResults = useSelector((state) => state.music.Searchedplaylists);

  let history = useHistory();
  let location = useLocation();

  const [params, setParams] = useState("");

  const dispatch = useDispatch();

  const query = new URLSearchParams(location.search).get("query");

  const handleClick = () => {
    setClickArrow(!clickArrow);
  };

  const handleSearchChange = (event) => {
    setParams(event.target.value);
  };

  // useEffect(() => {
  //   console.log("heloooo");
  //   dispatch(searchPlaylists(query));
  // }, [dispatch, query]);

  const handleSearchClick = () => {
    history.push(`/search?query=${params}`);
    dispatch(searchPlaylists(query));
    // console.log("dispatchinggg");
  };

  console.log(query, SearchResults);

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
            value={params}
            onChange={handleSearchChange}
            InputProps={{
              className: classes.searchStyles,
              endAdornment: (
                <InputAdornment>
                  <IconButton onClick={handleSearchClick} edge="end">
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleSearchClick();
              }
            }}
          />
        </div>

        <div className={classes.profile} onClick={handleClick}>
          <Avatar
            src={User?.images === [] ? "" : User?.images[0]?.url}
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
