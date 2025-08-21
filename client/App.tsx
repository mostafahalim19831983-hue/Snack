import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot, type Root } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Admin components
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ExitIntentModal } from "@/components/admin/ExitIntentModal";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminHero from "./pages/admin/Hero";
import AdminWhyChoose from "./pages/admin/WhyChoose";
import AdminWalmart from "./pages/admin/Walmart";
import AdminInsideBox from "./pages/admin/InsideBox";
import AdminTestimonials from "./pages/admin/Testimonials";
import AdminOfferPricing from "./pages/admin/OfferPricing";
import AdminFooter from "./pages/admin/Footer";
import AdminSEO from "./pages/admin/SEO";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
          <Route path="/admin/hero" element={<AdminLayout><AdminHero /></AdminLayout>} />
          <Route path="/admin/why-choose" element={<AdminLayout><AdminWhyChoose /></AdminLayout>} />
          <Route path="/admin/walmart" element={<AdminLayout><AdminWalmart /></AdminLayout>} />
          <Route path="/admin/inside-box" element={<AdminLayout><AdminInsideBox /></AdminLayout>} />
          <Route path="/admin/testimonials" element={<AdminLayout><AdminTestimonials /></AdminLayout>} />
          <Route path="/admin/offer-pricing" element={<AdminLayout><AdminOfferPricing /></AdminLayout>} />
          <Route path="/admin/footer" element={<AdminLayout><AdminFooter /></AdminLayout>} />
          <Route path="/admin/seo" element={<AdminLayout><AdminSEO /></AdminLayout>} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Exit Intent Modal for admin pages */}
        <ExitIntentModal />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Robust root management to prevent createRoot warnings
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

// Extend the container type to include our custom property
interface ExtendedHTMLElement extends HTMLElement {
  _reactRoot?: Root;
}

const extendedContainer = container as ExtendedHTMLElement;

// Check if root already exists, if not create one
if (!extendedContainer._reactRoot) {
  extendedContainer._reactRoot = createRoot(container);
}

// Render the app
extendedContainer._reactRoot.render(<App />);
