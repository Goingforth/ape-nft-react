import React from "react";
import styles from "./styles.module.css";
const CardMindMap = ({ title, info, isActive }) => {
  return (
    <div
      className={styles.cardContainer}
      style={{
        backgroundColor: !isActive ? "var(--color-black)" : "var(--color-red)",
      }}
      onClick={() => {
        isActive && (location.href = "https://www.ukr.net/");
      }}
    >
      <div className={styles.cardInfo}>
        <div className={isActive ? styles.wrapper : ""}>{info}</div>
      </div>
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
};

export default CardMindMap;
