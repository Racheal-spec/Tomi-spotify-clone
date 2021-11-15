import { createTheme } from "@mui/material/styles";

export const themes = createTheme({
  palette: {
    primary: {
      main: "#1DB954",
      black: "#000000",
      white: "#FFFFFF",
      dark: "#121212",
      grey1: "#272727",
      grey2: "#535353",
      grey3: "#b3b3b3",
      grey4: "#18191A",
      blue: "#4089F2",
      offwhite: "#FAF9F6",
    },
  },
  typography: {
    fontFamily: ["Raleway"].join(","),
    lineHeight: 1.1,
    h1: {
      fontSize: "56px",
      fontFamily: "Raleway",
      fontWeight: "700",
    },
    h2: {
      fontSize: "48px",
      fontFamily: "Raleway",
      fontWeight: "700",
    },
    h3: {
      fontSize: "40px",
      fontFamily: "Raleway",
      fontWeight: "700",
    },
    h4: {
      fontSize: "32px",
      fontFamily: "Raleway",
      fontWeight: "700",
    },
    h5: {
      fontSize: "24px",
      fontFamily: "Raleway",
      fontWeight: "700",
    },
    h6: {
      fontSize: "20px",
      fontFamily: "Raleway",
      fontWeight: "700",
    },
    smallText: {
      fontSize: "14px",
      fontFamily: "Raleway",
    },
    smallestText: {
      fontSize: "11px",
      fontFamily: "Raleway",
    },
  },
});
