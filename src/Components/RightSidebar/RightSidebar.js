import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { themes } from "../../Helpers/Theme";
import { Box } from "@mui/material";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import RightPersonIcon from "./RightPersonIcon";
import MyButtons from "../../Helpers/Buttons";

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
  const [showComp, setShowComp] = useState(false);

  const handleFacebookBtn = () => {
    console.log("clickeddddd");
    setShowComp(true);
  };

  return (
    <div className={classes.root}>
      {showComp ? (
        <FacebookInnerComp />
      ) : (
        <>
          <Typography fontWeight="bold" color={themes.palette.primary.white}>
            Friends activity
          </Typography>
          <div className={classes.spacing}>
            <Typography fontSize="small" fontWeight="bold">
              Connect with Facebook to see what your friends are playing
            </Typography>
          </div>
          <div>
            <MyButtons onClick={handleFacebookBtn} secondary>
              connect with facebook
            </MyButtons>
          </div>
          <div className={classes.spacing}>
            <Typography variant="smallestText" fontWeight="bold">
              We'll never post anything without your permission. Show and Hide
              Friend Activity from Settings.
            </Typography>
          </div>
        </>
      )}
    </div>
  );
};

export default RightSidebar;

export const FacebookInnerComp = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
        }}
      >
        <Box>
          <p>Friend Activty</p>
        </Box>
        <Box>
          <PersonAddOutlinedIcon />
        </Box>
      </Box>
      <Box sx={{ fontSize: 12, padding: "10px 0" }}>
        Let friends and followers on spotify see what you're listening to.
      </Box>
      <RightPersonIcon />
      <RightPersonIcon />
      <RightPersonIcon />
      <Box sx={{ fontSize: 12, padding: "10px 0" }}>
        <p>
          Go to Settings &gt; Social and enable 'Share my listening activity on
          Spotify.' You can turn this off at any time.
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <MyButtons neutral>Settings</MyButtons>
      </Box>
    </div>
  );
};
