import React from 'react'
    import { BrowserRouter, Routes, Route } from 'react-router-dom'
    import Home from './pages/Home'
    import About from './pages/About'
    import Programs from './pages/Programs'
    import Impact from './pages/Impact'
    import Membership from './pages/Membership'
    import News from './pages/News'
    import Contact from './pages/Contact'
    import Navbar from './components/Navbar'
    import Footer from './components/Footer'

    export default function App() {
      return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )
    }
