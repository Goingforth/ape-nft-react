import React from "react";
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import styles from "./styles.module.css";
import classNames from "classnames";
import SocialLinks from "../SocialLinks/SocialLinks";
import NavMenu from "../NavMenu/NavMenu";

const BurgerMenu = ({ menuOn, setMenuOn, isMobile, scroll }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        {menuOn && (
          <div className={isMobile ? styles.navMenuMobile : ""}>
            <NavMenu isMobile={isMobile} setMenuOn={setMenuOn} />
          </div>
        )}

        <div>
          <div
            className={
              !isMobile && menuOn
                ? classNames(styles.container, styles.borderMenuOn)
                : styles.container
            }
          >
            <ButtonHeader
              menuOn={menuOn}
              isMobile={isMobile}
              scroll={scroll}
              name={menuOn ? "CLOSE" : "MENU"}
              onClick={() => {
                menuOn ? setMenuOn(false) : setMenuOn(true);
              }}
            />
          </div>

          <SocialLinks menuOn={menuOn} isMobile={isMobile} scroll={scroll} />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
