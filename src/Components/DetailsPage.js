import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { themes } from "../Helpers/Theme";
import { Avatar } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import { PlayArrow } from "@mui/icons-material";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";

const DetailsPage = ({
  images,
  pagetitle,
  totaltracks,
  detailsname,
  userimage,
  songdisplayname,
  releasedate,
  detailsid,
}) => {
  let setColor = Math.floor(Math.random() * 16777215).toString(16);
  // eslint-disable-next-line no-useless-concat
  let bg = "#" + `${setColor}`;

  const DetailsStyles = makeStyles((theme) => ({
    root: {
      background: `linear-gradient(to bottom, ${bg}, ${themes.palette.primary.black})`,
      color: themes.palette.primary.white,
      padding: "80px 30px",
      height: "52%",
    },
    extraDivWrapper: {
      background: themes.palette.primary.dark,
      padding: "40px 30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    playlistImg: {
      width: "100%",
      height: "100%",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    flexTextName: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
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
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 30,
      },
    },
    songList: {
      padding: "20px 30px",
    },
    marginY: {
      margin: "0 5px",
    },
    marginYtwo: {
      margin: "0 25px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    marginYmore: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
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
    hide: {
      display: "none",
    },
  }));

  const classes = DetailsStyles();
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClick(!click);
  };

  const matches = useMediaQuery(themes.breakpoints.down("sm"));

  return (
    <>
      <div className={classes.root} key={detailsid}>
        <Grid container alignItems="center">
          <Grid item lg={4}>
            <img src={images} className={classes.playlistImg} alt="img" />
          </Grid>
          <Grid item lg={8} className={classes.sideGrid}>
            {matches ? (
              ""
            ) : (
              <Typography variant="smallerText">{pagetitle}</Typography>
            )}
            <Typography
              variant={matches ? "h4" : "h2"}
              className={classes.boldName}
            >
              {detailsname}
            </Typography>
            <div className={classes.flexTextName}>
              <Avatar
                src={userimage}
                style={{ width: "25px", height: "25px" }}
              />
              <strong className={classes.marginY}>{songdisplayname}</strong>
              <p className={classes.ownerName}>{releasedate.slice(0, 4)}</p>
              <p className={classes.ownerName}>.{totaltracks} songs</p>
            </div>
          </Grid>
        </Grid>
      </div>
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
            <div className={classes.marginYmore}>
              <MoreHorizOutlinedIcon fontSize="large" />
            </div>
          </div>

          {matches ? (
            ""
          ) : (
            <div className={classes.flexText}>
              <strong className={classes.marginY}>Custom order</strong>
              {click ? (
                <ArrowDropDownOutlinedIcon />
              ) : (
                <ArrowDropUpOutlinedIcon />
              )}
            </div>
          )}
        </Box>
      </div>
    </>
  );
};

export default DetailsPage;
