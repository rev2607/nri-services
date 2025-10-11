import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import { services } from './data/services';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Generate breadcrumb items based on current page
  const getBreadcrumbItems = () => {
    const items = [{ label: 'Home', href: 'home' }];

    if (currentPage === 'home') {
      items[0].isActive = true;
      return items;
    }

    if (currentPage.startsWith('service-')) {
      const slug = currentPage.replace('service-', '');
      const service = services.find(s => s.slug === slug);
      
      items.push({ label: 'Services', href: 'services' });
      
      if (service) {
        items.push({ label: service.title, isActive: true });
      } else {
        items.push({ label: 'Service Details', isActive: true });
      }
      return items;
    }

    // For other pages
    const pageLabels: Record<string, string> = {
      'about': 'About Us',
      'testimonials': 'Testimonials',
      'contact': 'Contact',
      'faq': 'FAQ'
    };

    const pageLabel = pageLabels[currentPage];
    if (pageLabel) {
      items.push({ label: pageLabel, isActive: true });
    }

    return items;
  };

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

    if (currentPage === 'faq') {
      return <FAQ onNavigate={handleNavigate} />;
    }

    return <Home onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {currentPage !== 'home' && (
        <Breadcrumb items={getBreadcrumbItems()} onNavigate={handleNavigate} />
      )}
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
