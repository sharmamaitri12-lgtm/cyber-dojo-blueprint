import { Target, Zap, Trophy } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Practical Skills",
      description: "Real-world scenarios that build muscle memory",
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Learn from mistakes with immediate corrections",
    },
    {
      icon: Trophy,
      title: "Progress Tracking",
      description: "Watch your security awareness level rise",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why <span className="text-primary">Gamified Training?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Traditional cybersecurity training is boring, forgettable, and ineffective. The Digital Self-Defense Dojo 
            transforms dry security concepts into engaging, interactive experiences that stick. By borrowing principles 
            from martial arts training, we create muscle memory for digital threats. Our gamified approach turns learning 
            into achievement, making you actually want to improve your security posture. Studies show that gamified 
            training increases retention by 60% and engagement by 90% compared to traditional methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg transition-smooth hover:bg-secondary/50"
              >
                <div className="p-4 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
