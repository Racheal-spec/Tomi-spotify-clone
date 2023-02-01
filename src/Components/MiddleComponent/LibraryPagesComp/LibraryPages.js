import { makeStyles } from "@mui/styles";
import React from "react";
import MyButtons from "../../../Helpers/Buttons";

const LibraryPages = ({ btntitle, icon, title, description }) => {
  const lbStyles = makeStyles(() => ({
    root: {
      padding: "150px 0",
    },
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    space: {
      padding: "20px 0",
    },
  }));
  const classes = lbStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.space}>{icon}</div>
        <div className={classes.space}>
          <h2>{title}</h2>
        </div>
        <div className={classes.space}>{description}</div>
        <div className={classes.space}>
          <MyButtons neutral>{btntitle}</MyButtons>
        </div>
      </div>
    </div>
  );
};

export default LibraryPages;
