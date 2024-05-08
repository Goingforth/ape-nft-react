import React from "react";
import classNames from "classnames";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import { useState, useEffect } from "react";
import { useResize } from "../Hooks/use-resize";

import styles from "./styles.module.css";

import { logo } from "../../image/logo/logo.jsx";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);
  const [scroll, setScroll] = useState(0);
  const { isMobile } = useResize();
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    isMobile && window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <div
      id='#header'
      className={
        menuOn && isMobile
          ? classNames(styles.container, styles.headerMenuOnMobile)
          : styles.container
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {scroll === 0 || menuOn || !isMobile ? (
          <div
            className={styles.logo}
            onClick={() => {
              location.href = "/";
            }}
          >
            {logo}
          </div>
        ) : (
          <div className={styles.logo}></div>
        )}

        <BurgerMenu
          menuOn={menuOn}
          setMenuOn={setMenuOn}
          isMobile={isMobile}
          scroll={scroll}
        />
      </div>
      {menuOn && isMobile && (
        <div className={styles.copyRight}>
          © Yacht ape 2024 all rights reserved
        </div>
      )}
    </div>
  );
};

export default Header;
