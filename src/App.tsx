import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home onNavigate={handleNavigate} />;
    }

    if (currentPage.startsWith('service-')) {
      const slug = currentPage.replace('service-', '');
      return <ServicePage slug={slug} onNavigate={handleNavigate} />;
    }

    if (currentPage === 'about') {
      return <About onNavigate={handleNavigate} />;
    }

    if (currentPage === 'testimonials') {
      return <Testimonials onNavigate={handleNavigate} />;
    }

    if (currentPage === 'contact') {
      return <Contact />;
    }

    return <Home onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-warm-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
