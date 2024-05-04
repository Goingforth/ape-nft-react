import Arts from "./components/Arts/Arts";
import FAQ from "./components/FAQ/FAQ";
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
      <NoSSRMindMap />*/}
      <FAQ />
      <Arts />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
