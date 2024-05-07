import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

const ButtonHeader = ({
  onClick,
  name,
  icon,
  border,
  isMobile,
  menuOn,
  scroll,
}) => {
  return (
    <div className={border ? styles.border : ""}>
      <button
        onClick={onClick}
        className={classNames(styles.buttonHeader, styles.hoverClassColor)}
        style={
          isMobile && (menuOn || scroll > 300)
            ? {
                backgroundColor: "var(--color-white_light)",
                "--hover-color": "var(--color-red)",
                color: "white",
              }
            : {
                backgroundColor: "var(--color-grey)",
                "--hover-color": "var(--color-white)",
              }
        }
      >
        <div className={icon ? styles.wrapper : ""}> {name}</div>
      </button>
    </div>
  );
};

export default ButtonHeader;
