import React from "react";
import { nanoid } from "nanoid";

import ButtonHeader from "../ButtonHeader/ButtonHeader";
import styles from "./styles.module.css";
const dataNav = [
  { name: "ABOUT", ref: "#about" },
  { name: "M-MAP", ref: "#m-map" },
  { name: "FAQ", ref: "#faq" },
  { name: "ARTS", ref: "#arts" },
  { name: "MINT", ref: "#mint" },
];
const NavMenu = ({ setMenuOn, isMobile }) => {
  return (
    <>
      {isMobile ? (
        <div className={styles.mobileNavMenu}>
          {dataNav.map(({ name, ref }) => (
            <div key={nanoid()} className={styles.navMobile}>
              <a href={ref} onClick={() => setMenuOn(false)}>
                {name}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.navMenu}>
          {dataNav.map(({ name, ref }) => (
            <ButtonHeader
              key={nanoid()}
              name={name}
              onClick={() => {
                setMenuOn(false);
                location.href = `${ref}`;
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default NavMenu;
