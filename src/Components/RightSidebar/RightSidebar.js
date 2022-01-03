import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { themes } from "../../Helpers/Theme";

const RightSidebar = () => {
  const rightDiv = makeStyles((theme) => ({
    root: {
      padding: "20px 20px",
    },
    spacing: {
      padding: "20px 0",
    },
    btn: {
      color: themes.palette.primary.white,
      backgroundColor: themes.palette.primary.blue,
      padding: "12px 16px",
      fontSize: 12,
      borderRadius: 20,
      border: "none",
      letterSpacing: 2,
      fontWeight: "bold",
      textTransform: "capitalize",
    },
  }));
  const classes = rightDiv();

  return (
    <div className={classes.root}>
      <Typography fontWeight="bold" color={themes.palette.primary.white}>
        Friends activity
      </Typography>
      <div className={classes.spacing}>
        <Typography fontSize="small" fontWeight="bold">
          Connect with Facebook to see what your friends are playing
        </Typography>
      </div>
      <div>
        <button className={classes.btn}>connect with facebook</button>
      </div>
      <div className={classes.spacing}>
        <Typography variant="smallestText" fontWeight="bold">
          We'll never post anything without your permission. Show and Hide
          Friend Activity from Settings.
        </Typography>
      </div>
    </div>
  );
};

export default RightSidebar;
