import React from "react";
import styles from "./styles.module.css";

const BlockButtons = ({ current, setCurrent, endImage }) => {
  return (
    <div className={styles.blockButtoms}>
      <button
        className={styles.buttomArts}
        disabled={current === 0}
        onClick={() => {
          if (current > 0) setCurrent(current - 1);
        }}
      >
        Prev
      </button>
      <button
        className={styles.buttomArts}
        disabled={current === endImage}
        onClick={() => {
          current < endImage && setCurrent(current + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default BlockButtons;
