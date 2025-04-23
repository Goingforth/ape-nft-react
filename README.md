# Тестове завдання Frontend

Реалізувати лендінг Ape NFT відповідно до технічного завдання.

https://docs.google.com/document/d/1U3BNnY61mQnyvSC_dphAVgYDP1omhO4g/edit?pli=1

# APE-NFT

### Frontend Test Task

Implement Ape NFT landing page according to the technical specifications.

https://docs.google.com/document/d/1U3BNnY61mQnyvSC_dphAVgYDP1omhO4g/edit?pli=1

### Build

[Front : ](https://ape-nft-react.netlify.app/)

### Technologies

- React or Next.js

### Materials

- [Layout](https://www.figma.com/file/NhwvCnRetLh4PsJY3rD2d6/Ape-NFT?type=design&node-id=51%3A952&mode=design&t=FRLZSC6KhEuOSkVs-1)
- [Fonts](https://drive.google.com/drive/folders/1n42pKMaNp9CBfmU2qcVhw4NB5AaO5b-x?usp=sharing)

### Technical specifications

1.Header

- Contains logo, burger menu on all versions.
- Logo is a link to the page.
- (As an additional task) Mobile menu and social media icons are fixed and when scrolling the mobile menu and icons change color (see ui-kit). In this case, the logo disappears when scrolling.

  2.Burger-menu

- Contains a close button, navigation menu, social networks.
- Each menu item should be clickable and when clicked, the mobile menu should close and a smooth scroll to the corresponding section on the page should occur.
- The height of the burger menu on a mobile phone is full screen and has a black background.
- On a tablet, the burger menu is transparent, loses its background and looks similar to the desktop version.
- (As an additional task) You can add an animation of the appearance and disappearance of the mobile menu.
  3.Hero
- When clicking on Meet Apes, a smooth scroll occurs to the Mint section.
  4.About
- The section contains a title, two blocks of text, an image and a banner.
- (As an additional task) The banner (the red line with the inscriptions) should contain a “moving line” animation

  5.MIND map

- When laying out cards on a tablet and desktop, use CSS Grid
- In the mobile version, the cards are in a slider. The slider can be switched both by dragging and by buttons, the slider has standard behavior (not infinite). When clicking or dragging, one slide is flipped.
- The red card must be active and contain a link (any).

  6.FAQ

- By default, the first answer is open.
- On mobile, there is only the title and the text that appears when opening. Starting from the tablet version, when opening different items, the image should also change.
- Only one answer can be open at a time.
- When opening an item, the color of the question and the number changes, the background appears (and the image on all screens, except mobile). On hover or focus, only the color changes (see ui-kit)
- All texts and images for items are next to the layout

  7.Arts

- The section contains a slider on all versions.
- On mobile, it is only one slide, in the tablet version two, on the desktop - 4. The slider can be switched both by dragging and by buttons, the slider has standard behavior (not infinite). When clicking or dragging, one slide is flipped.
- The image for the slider is present next to the layout, the number of slides is at your discretion.

  8.Contact Us (MINT)

- The form must be validated.
- Field appearance states when filling in and error are present in ui-kit.
- Form fields are required to be filled in.
- The user must be able to submit the form and see information about it.

  9.Footer

- Contains copyright information.

### Acceptance criteria

- The layout is fixed in px.
- The layout is semantic and valid, accessibility will be a bonus (а11y).
- The layout is adaptive and cross-browser - mobile from 360px to 480px (rubber layout, must stretch), tablet - 768px, desktop - 1280px.
- Use the Mobile first approach.
- The code must be clean, with formatting preserved. It is recommended to use ESLint/Prettier.
- The code is divided into separate components.
