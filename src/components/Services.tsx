import { Palette, Share2, Package, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete brand systems including logos, color palettes, and style guides that define your unique identity.",
    price: "From $2,500",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description: "Eye-catching social content, post templates, and stories that engage your audience and boost presence.",
    price: "From $800",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description: "Product packaging that stands out on shelves and creates memorable unboxing experiences.",
    price: "From $1,500",
  },
  {
    icon: Globe,
    title: "Web & UI Design",
    description: "Beautiful, user-friendly interfaces for websites and apps that convert visitors into customers.",
    price: "From $3,000",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to completion, I deliver design solutions that elevate your brand and engage your audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-accent/50"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">{service.price}</span>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Learn More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
