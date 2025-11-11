import { Search, Palette, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "Deep dive into your brand, goals, and audience. I research competitors and define the creative direction.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Iterate",
    description: "Create initial concepts, gather feedback, and refine until the design perfectly captures your vision.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deliver & Support",
    description: "Final files delivered with style guides. Ongoing support ensures smooth implementation and brand consistency.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A streamlined approach that ensures quality results and clear communication at every step.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step card */}
                <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                  {/* Step number */}
                  <div className="text-6xl font-bold text-accent/20 mb-4">{step.number}</div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Connecting line for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden h-8 w-0.5 bg-border mx-auto my-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
