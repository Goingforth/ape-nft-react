"use client";
import React from "react";
import classNames from "classnames";
import Link from "next/link";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import { useState } from "react";
// import { useResize } from "../Hooks/use-resize";
import useWindowSize from "@rooks/use-window-size";
import styles from "./styles.module.css";

import { logo } from "../../image/logo/logo.jsx";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);
  // const { isMobile } = useResize();
   const { innerWidth } = useWindowSize();
   const isMobile = innerWidth < 768;
   const isTablet = innerWidth >= 768 && innerWidth < 1440;
   const isDesktop = innerWidth >= 1440;
  return (
    <div
      id='#header'
      className={
        menuOn && isMobile
          ? classNames(styles.container, styles.headerMenuOnMobile)
          : styles.container
      }
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link className={styles.logo} href='/'>
          {logo}
        </Link>
        <BurgerMenu menuOn={menuOn} setMenuOn={setMenuOn} isMobile={isMobile} />
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
