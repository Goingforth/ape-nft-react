import Arts from "./components/Arts/Arts";
import About from "./components/About/About";
import MindMap from "./components/MIndMap/MindMap";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import Hero from "./components/Hero/Hero";
import styles from "./page.module.css";
import "./fonts/fonts.css";

function App() {
  return (
    <main className={styles.container}>
      <Hero />
      <About />
      <MindMap />
      <FAQ />
      <Arts />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
