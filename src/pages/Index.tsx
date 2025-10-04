import Hero from "@/components/Hero";
import Modules from "@/components/Modules";
import About from "@/components/About";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Modules />
      <About />
      <CTA />
    </div>
  );
};

export default Index;
