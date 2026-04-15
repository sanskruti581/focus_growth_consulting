import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import WorkPage from './pages/WorkPage';
import WorkDetailPage from './pages/WorkDetailPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import InsightsPage from './pages/InsightsPage';
import InsightDetailPage from './pages/InsightDetailPage';
import AuditPage from './pages/AuditPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:workSlug" element={<WorkDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:insightSlug" element={<InsightDetailPage />} />
          <Route path="/audit" element={<AuditPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
