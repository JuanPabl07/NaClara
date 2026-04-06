import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";

/**
 * Design Philosophy: Elegância Clássica Contemporânea
 * - Sticky header with navigation
 * - Full-screen hero section
 * - Services grid with detailed information
 * - Differentials section with key benefits
 * - About section with professional credentials
 * - Testimonials with Google ratings
 * - Final CTA section
 * - Footer with contact information
 */

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-cream">
          <Header />
          <main>
            <Hero />
            <Services />
            <Differentials />
            <About />
            <Testimonials />
            <CTAFinal />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
