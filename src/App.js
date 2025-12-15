import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


function AppContent() {
  const location = useLocation();

  const headerByPath = (pathname) => {
    switch (pathname) {
      case "/":
        return {
          title: "Luxury hair essentials, rooted in confidence.",
          subtitle:
            "Shop premium hair, tools, and products. Book consultations to get your perfect match.",
          ctaText: "Explore Shop",
        };
      case "/shop":
        return {
          title: "Shop everything hair",
          subtitle:
            "Human hair, extensions, braiding hair, products, styling tools, and salon tools.",
        };
      case "/services":
        return {
          title: "Consultations & support",
          subtitle: "Professional guidance for installs and aftercare.",
        };
      case "/about":
        return {
          title: "About ROOTED",
          subtitle: "Quality-first, guidance-led, care-focused.",
        };
      case "/contact":
        return {
          title: "Contact & booking",
          subtitle: "Request a consultation and we’ll follow up.",
        };
      default:
        return { title: "ROOTED" };
    }
  };

  return (
    <>
      <Header {...headerByPath(location.pathname)} />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-rooted-offwhite">
        <Navbar />
        <AppContent />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
