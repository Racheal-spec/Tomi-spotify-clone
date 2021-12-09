import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDetails } from "../../Actions/Actions";
import { themes } from "../../Helpers/Theme";

const SongList = ({ id, name }) => {
  const songlistStyles = makeStyles((theme) => ({
    link: {
      color: themes.palette.primary.grey3,
      cursor: "pointer",
      textDecoration: "none",
      fontSize: 14,
      fontWeight: 500,
      "&:hover": {
        color: themes.palette.primary.white,
      },
    },
  }));

  const classes = songlistStyles();

  const dispatch = useDispatch();

  const handleDetails = () => {
    dispatch(fetchDetails(id));
  };

  return (
    <div>
      <Link
        to={`/playlist/${id}`}
        onClick={handleDetails}
        className={classes.link}
      >
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default SongList;
