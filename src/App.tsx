import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Fleet from './components/Fleet';
import Services from './components/Services';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CarDetailPage from './pages/CarDetailPage';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gotam-black">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Fleet />
        <Services />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/car/:id" element={<CarDetailPage />} />
    </Routes>
  );
}

export default App;

