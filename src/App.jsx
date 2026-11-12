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
    <div className="bg-[#0A0A0F] min-h-screen font-sans text-gray-100">
      {/* Accessibility skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Portfolio />
        <About />
        <Certificates />
        <Skills />
        <Services />
        {/* <Clients /> */}
        <Contact />
      </main>
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
