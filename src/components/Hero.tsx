import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Available for freelance projects</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I design brands that people{" "}
              <span className="text-gradient">remember</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Transforming ideas into visual systems — logos, branding, and social campaigns crafted for clarity and lasting impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground glow-accent">
                Let's Work Together
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start pt-8">
              <div>
                <div className="text-3xl font-bold text-accent">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Professional graphic designer workspace"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-multiply" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="text-2xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
