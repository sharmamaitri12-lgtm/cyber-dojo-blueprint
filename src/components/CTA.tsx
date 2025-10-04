import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="gradient-card shadow-glow rounded-2xl p-12 text-center space-y-6 border border-primary/20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Level Up Your{" "}
            <span className="text-primary">Security?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who have transformed their digital defense skills. Your journey to becoming a cybersecurity black belt starts here.
          </p>
          <Button 
            size="lg"
            className="gradient-accent text-lg px-8 py-6 shadow-glow hover:shadow-glow transition-smooth group"
          >
            Start Your First Kata
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Complete the first module free
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
