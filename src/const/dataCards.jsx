import Image from "next/image";
import UpLeftArrow from "../image/icon/up-left-arrow.png";

const dataCards = [
  {
    id: 0,
    isActive: false,
    title: "YAPE DROP",
    info: "All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own",
  },
  {
    id: 1,
    isActive: false,
    title: "New Collection",
    info: "Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game",
  },
  {
    id: 2,
    isActive: false,
    title: "Token",
    info: "Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it",
  },
  {
    id: 3,
    isActive: true,
    title: (
      <>
        <p>Learn</p> <p>more</p> in mind map
      </>
    ),
    info: (
      <Image
        src={UpLeftArrow}
        fill
        alt='Picture of the up-left-arrow'
        sizes='(min-width: 24px)'
      />
    ),
  },
];

export default dataCards;
