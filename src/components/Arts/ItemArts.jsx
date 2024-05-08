import React from "react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ItemArts = ({ src }) => {
  const [loadedSrc, setLoadedSrc] = useState(null);
  useEffect(() => {
    setLoadedSrc(null);
    if (src) {
      const handleLoad = () => {
        setLoadedSrc(src);
      };
      const image = new Image();
      image.addEventListener("load", handleLoad);
      image.src = src;
      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [src]);
  if (loadedSrc === src) {
    return (
      <div className={styles.itemArts}>
        <LazyLoadImage
          className={styles.imgArts}
          loading='lazy'
          alt='Picture of the NFT'
          src={src}
          effect='blur'
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "1s" },
          }}
        />
      </div>
    );
  }
  return (
    <div
      className={styles.itemArts}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--color-white_light)",
        borderRadius: 12,
      }}
    >
      LOADING.....
    </div>
  );
};

export default ItemArts;
