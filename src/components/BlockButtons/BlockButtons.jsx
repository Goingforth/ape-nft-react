import React from "react";
import styles from "./styles.module.css";

const BlockButtons = (props) => {
  const { setCurrentImage, currentImage, endImage } = props;
  return (
    <div className={styles.blockButtoms}>
      <button
        className={styles.buttomArts}
        disabled={currentImage === 0}
        onClick={() => {
          if (currentImage > 0) setCurrentImage(currentImage - 1);
        }}
      >
        Prev
      </button>
      <button
        className={styles.buttomArts}
        disabled={currentImage === endImage}
        onClick={() => {
          currentImage < endImage && setCurrentImage(currentImage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default BlockButtons;
