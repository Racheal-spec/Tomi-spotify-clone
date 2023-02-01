import { makeStyles } from "@mui/styles";
import { themes } from "./Theme";

export const btnStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  btn: {
    backgroundColor: themes.palette.primary.main,
    borderRadius: 22,
    color: themes.palette.primary.white,
    padding: "10px 20px",
    textTransform: "none",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "600",
    border: "none",
    letterSpacing: 1,
    fontSize: 16,
    "&:hover": {
      backgroundColor: themes.palette.primary.main,
    },
  },
  secondaryButton: {
    backgroundColor: themes.palette.primary.blue,
    color: themes.palette.primary.white,
  },
  primaryButton: {
    backgroundColor: themes.palette.primary.main,
    color: themes.palette.primary.white,
  },
  neutralButton: {
    backgroundColor: themes.palette.primary.white,
    color: themes.palette.primary.dark,
  },
  Outline: {
    //background: "transparent",
    borderColor: themes.palette.primary.grey2,
    color: themes.palette.primary.white,
    textTransform: "uppercase",
    borderRadius: 12,
  },
  SmallButton: {
    padding: "6px 20px",
  },
  NormalButton: {
    padding: 12,
  },
  MediumButton: {
    padding: 14,
  },
  LargeButton: {
    padding: 16,
  },
}));
