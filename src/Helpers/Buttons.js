import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { btnStyles } from "./styles";

const MyButtons = ({
  children,
  primary,
  outline,
  secondary,
  small,
  normal,
  large,
  medium,
  neutral,
  variant,
  ...props
}) => {
  const classes = btnStyles();

  return (
    <div className={classes.root}>
      <button
        className={classNames(classes.btn, {
          [classes.LargeButton]: Boolean(large),
          [classes.MediumButton]: Boolean(medium),
          [classes.NormalButton]: Boolean(normal),
          [classes.SmallButton]: Boolean(small),
          [classes.secondaryButton]: Boolean(secondary),
          [classes.primaryButton]: Boolean(primary),
          [classes.neutralButton]: Boolean(neutral),

          [classes.Outline]: Boolean(outline),
          [props.className]: true,
        })}
        {...props}
        variant={Boolean(outline) ? "outlined" : variant}
      >
        {children}
      </button>
    </div>
  );
};

MyButtons.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  outline: PropTypes.bool,
  neutral: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  normal: PropTypes.bool,
  children: PropTypes.any,
};

export default MyButtons;
