import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import style from "../../page.module.css";
import { useState } from "react";
import dataArts from "/public/slider/data";
import { nanoid } from "nanoid";
import ItemArts from "./ItemArts";
import { useResize } from "../Hooks/use-resize";
import BlockButtons from "../BlockButtons/BlockButtons";

const Arts = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const { isTablet, isDesktop } = useResize();
  const endImage = dataArts.length - (isTablet ? 2 : isDesktop ? 4 : 1);

  const props = {
    currentImage: currentImage,
    setCurrentImage: setCurrentImage,
    endImage: endImage,
  };

  return (
    <section id='arts' className={styles.container}>
      <div
        id='arts-div'
        className={classNames(styles.title, style.titleComponent)}
      >
        COLLECTION
      </div>
      <div className={styles.mediaQuery}>
        <ItemArts key={nanoid()} src={dataArts[currentImage]} {...props} />
        {(isTablet || isDesktop) && (
          <ItemArts
            key={nanoid()}
            src={dataArts[currentImage + 1]}
            {...props}
          />
        )}
        {isDesktop && (
          <>
            <ItemArts
              key={nanoid()}
              src={dataArts[currentImage + 2]}
              {...props}
            />
            <ItemArts
              key={nanoid()}
              src={dataArts[currentImage + 3]}
              {...props}
            />
          </>
        )}
      </div>
      <BlockButtons {...props} />
    </section>
  );
};

export default Arts;
