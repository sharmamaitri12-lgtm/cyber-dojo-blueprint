import { useEffect, useState } from "react";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const StatCounter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border transition-smooth hover:scale-105">
      <span className="text-4xl font-bold text-primary">{count.toLocaleString()}+</span>
      <span className="text-sm text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-primary/10 shadow-glow">
              <Shield className="w-16 h-16 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            The Digital Self-Defense{" "}
            <span className="text-primary">Dojo</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Master the art of cybersecurity through gamified training that transforms you from vulnerable target to digital warrior.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <StatCounter end={12500} label="Modules Completed" />
            <StatCounter end={8420} label="Threats Identified" />
            <StatCounter end={15300} label="Students Trained" />
          </div>

          <div className="pt-8">
            <Button 
              size="lg" 
              className="gradient-accent text-lg px-8 py-6 shadow-glow hover:shadow-glow transition-smooth"
              onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Begin Your Training
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
