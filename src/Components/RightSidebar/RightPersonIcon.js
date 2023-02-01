import { Box } from "@mui/material";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { themes } from "../../Helpers/Theme";

const RightPersonIcon = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <Box
          sx={{
            width: 40,
            borderRadius: "50%",
            height: 40,
            backgroundColor: themes.palette.primary.grey2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PersonOutlineOutlinedIcon />
        </Box>
        <Box sx={{ padding: "0 10px" }}>
          <Box
            sx={{
              width: 80,
              height: 8,
              backgroundColor: themes.palette.primary.grey2,
              borderRadius: 12,
            }}
          ></Box>
          <Box
            sx={{
              width: 60,
              height: 8,
              backgroundColor: themes.palette.primary.grey2,
              borderRadius: 12,
              margin: "4px 0",
            }}
          ></Box>
          <Box
            sx={{
              width: 60,
              height: 8,
              backgroundColor: themes.palette.primary.grey2,
              borderRadius: 12,
            }}
          ></Box>
        </Box>
      </Box>
    </div>
  );
};

export default RightPersonIcon;
