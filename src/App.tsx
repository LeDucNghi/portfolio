import "./assets/styles/globalStyles.scss";

import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
