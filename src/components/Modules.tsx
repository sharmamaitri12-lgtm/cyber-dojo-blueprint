import { Mail, Lock, MessageSquare, Volume2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const modules = [
  {
    title: "Phishing Kata",
    description: "Learn to identify and deflect phishing attacks through pattern recognition exercises. Master the art of spotting deceptive emails and protecting your digital identity.",
    time: "15-20 minutes",
    icon: Mail,
    link: "/phishing-kata",
  },
  {
    title: "Password Stance",
    description: "Build an unbreakable foundation with password management techniques. Develop the discipline to create and maintain fortress-strong authentication across all platforms.",
    time: "10-15 minutes",
    icon: Lock,
  },
  {
    title: "Verbal Jujitsu",
    description: "Master the subtle art of secure communication. Learn to redirect social engineering attacks and protect sensitive information through conversational awareness.",
    time: "20-25 minutes",
    icon: MessageSquare,
  },
  {
    title: "The Yell",
    description: "Develop your incident response instincts. Train to recognize security breaches instantly and execute the perfect response protocol when threats materialize.",
    time: "12-18 minutes",
    icon: Volume2,
  },
];

const Modules = () => {
  return (
    <section id="modules" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Training <span className="text-primary">Modules</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four essential disciplines to master your digital defense
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const cardContent = (
              <Card 
                className="gradient-card shadow-card border-border transition-smooth hover:scale-105 hover:shadow-glow group cursor-pointer h-full"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {module.time}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mt-4">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
            
            return module.link ? (
              <Link key={index} to={module.link}>
                {cardContent}
              </Link>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modules;
