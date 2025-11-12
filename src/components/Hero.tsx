import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl lg:max-w-5xl mx-auto text-center text-white space-y-8">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Available for freelance projects</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-gradient">PICAZO</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">
              I design brands that people remember
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Transforming ideas into visual systems — logos, branding, and social campaigns crafted for clarity and lasting impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground glow-accent">
              Let's Work Together
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-white">
            <div>
              <div className="text-3xl font-bold text-accent">4+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">30+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
