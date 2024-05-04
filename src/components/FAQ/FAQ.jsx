"use client";
import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import style from "../../page.module.css";
import dataFAQ from "../../const/dataFAQ";
import { useResize } from "../Hooks/use-resize";

import { nanoid } from "nanoid";
import { useState } from "react";

const FAQ = () => {
  const { isMobile, isDesktop } = useResize();

  const [isActive, setIsActive] = useState(1);

  return (
    <section id='faq' className={styles.container}>
      <div className={classNames(styles.title, style.titleComponent)}>FAQ</div>
      <div className={styles.mapFAQ}>
        {dataFAQ.map((item) => {
          const { serialNumber, image, question, answer } = item;
          return (
            <div
              key={nanoid()}
              className={styles.itemFAQ}
              style={{
                backgroundColor:
                  isActive === serialNumber ? "var(--color-black)" : "",
              }}
              onClick={() => {
                setIsActive(serialNumber);
              }}
            >
              {!isMobile &&
                (isActive === serialNumber ? (
                  <div className={styles.imageWrapper}>
                    <img
                      src={image}
                      alt='imageUser'
                      width='100%'
                      height='100%'
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      width: !isDesktop ? "148px" : "248px",
                      height: "0px",
                      backgroundColor: "var(--color-black)",
                    }}
                  />
                ))}
              <div
                className={styles.blockNumber}
                style={{
                  color: isActive === serialNumber ? "var(--color-white)" : "",
                }}
              >
                [ {serialNumber} ]
              </div>
              <div className={styles.blockInfo}>
                <div
                  className={styles.blockInfoQuestion}
                  style={{
                    color: isActive === serialNumber ? "var(--color-red)" : "",
                  }}
                >
                  {question}
                </div>

                {isActive === serialNumber && (
                  <div className={styles.blockInfoAnswer}>{answer}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
