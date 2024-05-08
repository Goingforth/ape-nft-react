import React from "react";
import styles from "./styles.module.css";
import { heroMobile, heroTablet, heroDesktop } from "../../image/hero/index";
import { useResize } from "../Hooks/use-resize";

const Hero = () => {
  const { isMobile, isTablet, isDesktop } = useResize();

  return (
    <section className={styles.container}>
      <div className={styles.heroText1}>diD yOu seE iT ?</div>
      <div className={styles.heroTitle}>
        <span>YACHT</span> <span>APES</span>
      </div>
      <div className={styles.heroText2}>Apes aRe eveRywhere</div>
      <div className={styles.imgWrapper}>
        <img
          src={isMobile ? heroMobile : isTablet ? heroTablet : heroDesktop}
          alt='heroImage'
          className={styles.imageHero}
        />
      </div>
      <button
        type='button'
        onClick={() => (location.href = "#mint")}
        className={styles.heroButton}
      >
        MEET APES
      </button>
      {isMobile && (
        <div className={styles.heroText3}>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </div>
      )}
      {isTablet && (
        <div className={styles.heroText3}>
          <div style={{ textAlign: "right" }}>Yacht Ape is a</div>
          <div style={{ textAlign: "justify" }}>
            collection of unique digital apes that you can own in NFT format
          </div>
        </div>
      )}
      {isDesktop && (
        <div className={styles.heroText3}>
          <div style={{ textAlign: "right" }}>Yacht Ape is a collection</div>
          <div style={{ textAlign: "justify" }}>
            of unique digital apes that you can own in NFT format
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
