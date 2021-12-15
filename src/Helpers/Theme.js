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
      grey5: "#202020",
      blue: "#4089F2",
      offwhite: "#FAF9F6",
    },
  },
  typography: {
    lineHeight: 1.1,
    h1: {
      fontSize: "56px",

      fontWeight: "700",
    },
    h2: {
      fontSize: "48px",

      fontWeight: "700",
    },
    h3: {
      fontSize: "40px",

      fontWeight: "700",
    },
    h4: {
      fontSize: "32px",

      fontWeight: "700",
    },
    h5: {
      fontSize: "24px",

      fontWeight: "700",
    },
    h6: {
      fontSize: "20px",

      fontWeight: "700",
    },
    smallText: {
      fontSize: "15px",
      fontWeight: "700",
    },
    smallerText: {
      fontSize: "13px",
      fontWeight: "500",
    },
    smallestText: {
      fontSize: "11px",
    },
  },
});
