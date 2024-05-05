import React from "react";
import styles from "./styles.module.css";
import IconX from "../../image/icon/add-sharp.png";

const TickerItem1 = () => {
  return <div>Destroy stereotypes</div>;
};
const TickerItem2 = () => {
  return <div>HAVE NO LIMITS</div>;
};
const TickerItem3 = () => {
  return <div>Break rules</div>;
};

const Separator = () => {
  return (
    <img
      src={IconX}
      alt='X'
      width='36px'
      height='36px'
      className={styles.separator}
    />
  );
};

export const dataTicker = [
  TickerItem1,
  Separator,
  TickerItem2,
  Separator,
  TickerItem3,
  Separator,
];
