import Header from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home/>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;