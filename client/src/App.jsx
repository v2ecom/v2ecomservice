import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import FreeAuditPopup from './components/ui/FreeAuditPopup';
import ScrollToTop from './components/ui/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import FaqPage from './pages/FaqPage';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Service Pages
import AmazonAccountManagement from './pages/services/AmazonAccountManagement';
import AmazonPPCManagement from './pages/services/AmazonPPCManagement';
import ProductListingOptimization from './pages/services/ProductListingOptimization';
import FlipkartAccountManagement from './pages/services/FlipkartAccountManagement';
import MeeshoAccountManagement from './pages/services/MeeshoAccountManagement';
import MarketplaceOnboarding from './pages/services/MarketplaceOnboarding';
import ProductResearch from './pages/services/ProductResearch';
import EcommerceConsulting from './pages/services/EcommerceConsulting';
import CatalogManagement from './pages/services/CatalogManagement';
import AccountHealthManagement from './pages/services/AccountHealthManagement';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-surface font-inter flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

            {/* Individual Service Routes */}
            <Route path="/services/amazon-account-management" element={<AmazonAccountManagement />} />
            <Route path="/services/amazon-ppc-management" element={<AmazonPPCManagement />} />
            <Route path="/services/product-listing-optimization" element={<ProductListingOptimization />} />
            <Route path="/services/flipkart-account-management" element={<FlipkartAccountManagement />} />
            <Route path="/services/meesho-account-management" element={<MeeshoAccountManagement />} />
            <Route path="/services/marketplace-onboarding" element={<MarketplaceOnboarding />} />
            <Route path="/services/product-research" element={<ProductResearch />} />
            <Route path="/services/ecommerce-consulting" element={<EcommerceConsulting />} />
            <Route path="/services/catalog-management" element={<CatalogManagement />} />
            <Route path="/services/account-health-management" element={<AccountHealthManagement />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <FreeAuditPopup />
      </div>
    </Router>
  );
}

export default App;
