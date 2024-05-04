"use client";
import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import style from "../../page.module.css";
import { useState } from "react";
import dataCards from "../../const/dataCards";
import { nanoid } from "nanoid";
import CardMindMap from "./CardMindMap";
import { useResize } from "../Hooks/use-resize";

import BlockButtons from "../BlockButtons/BlockButtons";

const MindMap = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const { isMobile } = useResize();

  return (
    <section id='m-map' className={styles.container}>
      <div className={classNames(styles.title, style.titleComponent)}>
        MIND MAP
      </div>

      {isMobile && (
        <CardMindMap
          key={nanoid()}
          title={dataCards[currentCard].title}
          info={dataCards[currentCard].info}
          isActive={dataCards[currentCard].isActive}
        />
      )}
      {!isMobile && (
        <div className={styles.mediaQuery}>
          {dataCards.map(({ title, info, isActive }) => (
            <CardMindMap
              key={nanoid()}
              title={title}
              info={info}
              isActive={isActive}
            />
          ))}
        </div>
      )}

      {isMobile && (
        <BlockButtons
          current={currentCard}
          setCurrent={setCurrentCard}
          endImage={dataCards.length - 1}
        />
      )}
    </section>
  );
};

export default MindMap;
