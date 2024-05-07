"use client";
import React from "react";
import { nanoid } from "nanoid";

import ButtonHeader from "../ButtonHeader/ButtonHeader";
import { discord, logoMarkBlue, logoX } from "../../image/burgerMenu/index";
import styles from "./styles.module.css";

const dataSocialLinks = [
  { name: discord, link: "https://discord.com/" },
  { name: logoMarkBlue, link: "https://youtube.com/" },
  { name: logoX, link: "https://twitter.com/" },
];

const SocialLinks = ({ menuOn, isMobile, scroll }) => {
  return (
    <div className={styles.container}>
      {dataSocialLinks.map(({ name, link }) => {
        return (
          <ButtonHeader
            key={nanoid()}
            name={name}
            icon='true'
            border='true'
            onClick={() => (location.href = `${link}`)}
            menuOn={menuOn}
            isMobile={isMobile}
            scroll={scroll}
          />
        );
      })}
    </div>
  );
};

export default SocialLinks;
