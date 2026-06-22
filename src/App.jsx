import { Routes, Route } from "react-router-dom";
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
import PortfolioDetail from "./components/PortfolioDetail";

function Home() {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
    </Routes>
  );
}

export default App;
