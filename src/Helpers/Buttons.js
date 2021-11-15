import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { themes } from "./Theme";
import classNames from "classnames";
import PropTypes from "prop-types";

const btnStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  btn: {
    backgroundColor: themes.palette.primary.main,
    borderRadius: 12,
    color: themes.palette.primary.white,
    padding: 10,
    textTransform: "none",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "600",
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

const MyButtons = ({
  children,
  primary,
  outline,
  secondary,
  small,
  normal,
  large,
  medium,
  variant,
  ...props
}) => {
  const classes = btnStyles();

  return (
    <div className={classes.root}>
      <Button
        className={classNames(classes.btn, {
          [classes.LargeButton]: Boolean(large),
          [classes.MediumButton]: Boolean(medium),
          [classes.NormalButton]: Boolean(normal),
          [classes.SmallButton]: Boolean(small),
          [classes.secondaryButton]: Boolean(secondary),
          [classes.primaryButton]: Boolean(primary),
          [classes.Outline]: Boolean(outline),
          [props.className]: true,
        })}
        {...props}
        variant={Boolean(outline) ? "outlined" : variant}
      >
        {children}
      </Button>
    </div>
  );
};

MyButtons.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  outline: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  normal: PropTypes.bool,
  children: PropTypes.any,
};

export default MyButtons;
