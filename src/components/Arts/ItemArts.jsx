import React from "react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ItemArts = ({ src, setCurrentImage, currentImage, endImage }) => {
  const [loadedSrc, setLoadedSrc] = useState(null);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);

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
  //
  useEffect(() => {
    if (dragEnd > dragStart && currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else if (dragEnd < dragStart && currentImage < endImage) {
      setCurrentImage(currentImage + 1);
    }
  }, [dragEnd]);
  //

  if (loadedSrc === src) {
    return (
      <div
        className={styles.itemArts}
        draggable='true'
        onDragStart={({ clientX }) => setDragStart(clientX)}
        onDragEnd={({ clientX }) => setDragEnd(clientX)}
        onTouchStart={(e) => {
          setDragStart(e.changedTouches[0].clientX);
        }}
        onTouchEnd={(e) => {
          setDragEnd(e.changedTouches[0].clientX);
        }}
      >
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
