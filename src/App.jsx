import {
  Arts,
  About,
  MindMap,
  FAQ,
  Footer,
  ContactUs,
  Hero,
  Header,
} from "./components/index";
import styles from "./page.module.css";
import "./fonts/fonts.css";

function App() {
  return (
    <main className={styles.container}>
      <Header />
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
