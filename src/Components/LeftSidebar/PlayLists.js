import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../../Helpers/Theme";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchDetails, loadPlaylists } from "../../Actions/Actions";
import { Link } from "react-router-dom";

const PlayLists = () => {
  const playlistStyles = makeStyles((theme) => ({
    root: {
      padding: "5px 20px",
      width: "100vh",
    },
    linkDiv: {
      margin: "10px 0",
    },
  }));
  const classes = playlistStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlaylists());
  }, [dispatch]);

  const Playlists = useSelector((state) => state.music.Playlists);

  return (
    <div className={classes.root}>
      <div>
        {Playlists.map((item) => (
          <div key={item.id} className={classes.linkDiv}>
            <SidebarList id={item.id} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayLists;

export const SidebarList = ({ id, name }) => {
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
      <div className={classes.link}>
        <Link
          to={`/playlist/${id}`}
          onClick={handleDetails}
          className={classes.link}
        >
          <p>{name}</p>
        </Link>
      </div>
    </div>
  );
};
