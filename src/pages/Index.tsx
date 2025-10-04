import Hero from "@/components/Hero";
import Modules from "@/components/Modules";
import PhishingKata from "@/components/PhishingKata";
import About from "@/components/About";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Modules />
      <PhishingKata />
      <About />
      <CTA />
    </div>
  );
};

export default Index;
