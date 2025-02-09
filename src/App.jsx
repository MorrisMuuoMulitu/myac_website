import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Programs from "./pages/Programs"; // Import Programs page
import SDGProjects from "./pages/SDGProjects"; // Import new program pages
import LeadershipTraining from "./pages/LeadershipTraining";
import AgriTech from "./pages/AgriTech";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/programs" element={<Programs />} /> {/* Add Programs route */}
        <Route path="/programs/sdg-projects" element={<SDGProjects />} /> {/* Add SDG Projects route */}
        <Route path="/programs/leadership-training" element={<LeadershipTraining />} />{/* Add Leadership Training route */}
        <Route path="/programs/agri-tech" element={<AgriTech />} />{/* Add AgriTech route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
