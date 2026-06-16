import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Certificates from "./components/Certificates";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#0A0A0F] min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Skills />
      <Services />
      <Portfolio />
      {/* <Clients /> */}
      <Contact />
    </div>
  );
}

export default App;
