import "./assets/styles/globalStyles.scss";

import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";

function App() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header handleScrollTo={handleScrollTo} />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
