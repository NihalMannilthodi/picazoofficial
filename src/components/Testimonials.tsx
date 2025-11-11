import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "The branding work exceeded all expectations. Our new identity perfectly captures our vision and has significantly improved our market presence.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content: "Professional, creative, and responsive. The social media designs drove a 3x increase in engagement. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Creative Studios",
    content: "Working with this designer was a game-changer. The attention to detail and understanding of our brand DNA was remarkable.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take my word for it — hear what clients say about working together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-sm text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
