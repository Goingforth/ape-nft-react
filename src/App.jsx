import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import styles from "./page.module.css";
import "./fonts/fonts.css";

function App() {
  return (
    <main className={styles.container}>
      <div>START</div>
      {/* <NoSSRHero />
      <NoSSRAbout />
      <NoSSRMindMap />
      <NoSSRFAQ />
      <NoSSRArts />*/}
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
