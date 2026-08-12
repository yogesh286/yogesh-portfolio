import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BuiltWith from "./components/BuiltWith";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-sage min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <BuiltWith />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
