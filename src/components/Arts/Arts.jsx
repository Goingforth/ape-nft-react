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
  return (
    <section id='arts' className={styles.container}>
      <div
        id='arts-div'
        className={classNames(styles.title, style.titleComponent)}
      >
        COLLECTION
      </div>
      <div className={styles.mediaQuery}>
        <ItemArts
          key={nanoid()}
          src={dataArts[currentImage]}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          endImage={endImage}
        />
        {(isTablet || isDesktop) && (
          <ItemArts
            key={nanoid()}
            src={dataArts[currentImage + 1]}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            endImage={endImage}
          />
        )}
        {isDesktop && (
          <>
            <ItemArts
              key={nanoid()}
              src={dataArts[currentImage + 2]}
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}
              endImage={endImage}
            />
            <ItemArts
              key={nanoid()}
              src={dataArts[currentImage + 3]}
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}
              endImage={endImage}
            />
          </>
        )}
      </div>
      <BlockButtons
        current={currentImage}
        setCurrent={setCurrentImage}
        endImage={endImage}
      />
    </section>
  );
};

export default Arts;
