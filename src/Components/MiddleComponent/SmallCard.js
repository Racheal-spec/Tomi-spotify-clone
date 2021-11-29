import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { themes } from "../../Helpers/Theme";
import girl3 from "../../Assets/girl3.jpg";
import { PlayArrow } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ONEPLAYLIST } from "../../Helpers/Routes";
import PauseIcon from "@mui/icons-material/Pause";

const SmallCard = () => {
  const smallCardStyle = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: themes.palette.primary.grey1,
      color: themes.palette.primary.white,
      borderRadius: 6,
      transition: "all 0.3s ease",
      boxShadow:
        "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset",
      "&:hover": {
        backgroundColor: themes.palette.primary.grey2,
      },
    },
    cardWrapper: {
      display: "flex",
      alignItems: "center",
    },
    grid1: {
      width: "25%",
    },
    grid2: {
      width: "70%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 10px",
    },
    postalImg: {
      maxWidth: "25%",
      height: 80,
      objectFit: "cover",
      borderRadius: 3,
    },
    icon: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      padding: 8,
      cursor: "pointer",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)",
      background: themes.palette.primary.main,
    },
    link: {
      textDecoration: "none",
    },
  }));
  const classes = smallCardStyle();

  const [mousehover, setMouseHover] = useState({ opacity: "0" });
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClick(!click);
  };
  return (
    <Link
      to={ONEPLAYLIST}
      className={classes.link}
      onMouseEnter={(e) => {
        setMouseHover({ opacity: "1" });
      }}
      onMouseLeave={(e) => {
        setMouseHover({ opacity: "0" });
      }}
    >
      <div className={classes.root}>
        <div className={classes.cardWrapper}>
          <img src={girl3} className={classes.postalImg} alt="postal" />
          <div className={classes.grid2}>
            <div>
              <strong>Liked songs</strong>
            </div>
            <div
              className={classes.icon}
              style={mousehover}
              onClick={handleClick}
            >
              {click ? <PauseIcon /> : <PlayArrow />}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SmallCard;