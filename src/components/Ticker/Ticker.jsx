import React from "react";
import styles from "./styles.module.css";
import Marquee from "react-fast-marquee";
import { dataTicker } from "./TickerItems";
import { nanoid } from "nanoid";

const Ticker = () => {
  return (
    <Marquee className={styles.ticker}>
      <div className={styles.tickerItem}>
        {dataTicker.map((Item) => {
          return <Item key={nanoid()} />;
        })}
      </div>
    </Marquee>
  );
};

export default Ticker;
