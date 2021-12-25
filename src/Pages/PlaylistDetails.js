import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchDetails } from "../Actions/Actions";
import SongList from "../Components/SongList";
import { themes } from "../Helpers/Theme";
import { Avatar } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import { PlayArrow } from "@mui/icons-material";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

const PlaylistDetails = ({ playlist_id }) => {
  const DetailsStyles = makeStyles((theme) => ({
    root: {
      background: `linear-gradient(to bottom,${themes.palette.primary.grey2}, ${themes.palette.primary.grey1} )`,
      color: themes.palette.primary.white,
      padding: "10px 30px",
      height: "38%",
    },
    extraDivWrapper: {
      background: `linear-gradient(${themes.palette.primary.grey5},${themes.palette.primary.grey4})`,
      padding: "40px 30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    playlistImg: {
      width: "100%",
      height: "100%",
    },
    flexText: {
      display: "flex",
      alignItems: "center",
    },
    sideGrid: {
      padding: "0 50px",
    },
    boldName: {
      padding: "30px 0",
    },
    songList: {
      padding: "20px 30px",
    },
    marginY: {
      margin: "0 5px",
    },
    marginYtwo: {
      margin: "0 25px",
    },
    icon: {
      width: 55,
      height: 55,
      borderRadius: "50%",
      padding: 10,
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)",
      background: themes.palette.primary.main,
      color: themes.palette.primary.white,
      cursor: "auto",
      transition: "all 0.2s ease-in",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    ownerName: {
      fontWeight: 500,
      color: themes.palette.primary.grey3,
    },
  }));

  const classes = DetailsStyles();
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClick(!click);
  };

  const id = useParams().playlist_id;

  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch(fetchDetails(id));
    setLoad(false);
  }, [dispatch, id]);

  const Details = useSelector((state) => state.details.Playlist);

  const User = useSelector((state) => state.music.User);

  return (
    <>
      {load ? (
        <Typography variant="h1">Loading...</Typography>
      ) : (
        <div className={classes.root}>
          <Grid container alignItems="center" key={Details?.id}>
            <Grid item lg={4}>
              <img
                src={Details?.images[0].url}
                className={classes.playlistImg}
                alt="playlist-img"
              />
            </Grid>
            <Grid item lg={8} className={classes.sideGrid}>
              <Typography variant="smallerText">PLAYLIST</Typography>
              <Typography variant="h2" className={classes.boldName}>
                {Details?.name}
              </Typography>
              <div className={classes.flexText}>
                <Avatar
                  src={User?.images[0].url}
                  style={{ width: "25px", height: "25px" }}
                />
                <strong className={classes.marginY}>
                  {Details?.owner.display_name}
                </strong>
                <p className={classes.ownerName}>
                  .{Details?.tracks.total} songs
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
      <div>
        <Box className={classes.extraDivWrapper}>
          <div className={classes.flexText}>
            <div className={classes.icon} onClick={handleClick}>
              {click ? (
                <PauseIcon fontSize="large" />
              ) : (
                <PlayArrow fontSize="large" />
              )}
            </div>
            <div className={classes.marginYtwo}>
              <DownloadForOfflineOutlinedIcon fontSize="large" />
            </div>
            <div>
              <MoreHorizOutlinedIcon fontSize="large" />
            </div>
          </div>

          <div className={classes.flexText}>
            <strong className={classes.marginY}>Custom order</strong>
            {click ? (
              <ArrowDropDownOutlinedIcon />
            ) : (
              <ArrowDropUpOutlinedIcon />
            )}
          </div>
        </Box>
        <Box className={classes.songList}>
          {Details?.tracks.items.map((item, index) => (
            <SongList
              key={item.id}
              track={item.track}
              list={index}
              trackuri={item.track.uri}
            />
          ))}
        </Box>
      </div>
    </>
  );
};

export default PlaylistDetails;
