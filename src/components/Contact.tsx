import { useState } from "react";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Replace with your form handler (Netlify Forms, Formspree, etc.)
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Create <span className="text-gradient">Together</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Fill out the form below or reach out directly via email.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-xl mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  I typically respond within 24 hours. Let's discuss how we can bring your vision to life.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:hello@yourname.com"
                  className="flex items-center gap-3 text-foreground hover:text-accent transition-smooth"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm">hello@yourname.com</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-accent transition-smooth"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm">@yourname</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-accent transition-smooth"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm">Your Name</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type *
                  </label>
                  <Select value={formData.projectType} onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                    <SelectTrigger id="projectType">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="branding">Brand Identity</SelectItem>
                      <SelectItem value="social">Social Media Design</SelectItem>
                      <SelectItem value="packaging">Packaging Design</SelectItem>
                      <SelectItem value="web">Web & UI Design</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<1k">Less than $1,000</SelectItem>
                      <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                      <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                      <SelectItem value=">5k">$5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, goals, and timeline..."
                  rows={6}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-hover">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
