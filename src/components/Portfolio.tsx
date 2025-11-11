import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import portfolio images
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  {
    id: 1,
    title: "Corporate Logo Suite",
    image: portfolio1,
    tags: ["Logo", "Branding"],
    shortDesc: "Modern logo collection for tech startups",
    client: "Tech Ventures Inc.",
    year: "2024",
    challenge: "Create versatile logos that work across digital and print media",
    solution: "Designed a modular system with multiple logo variations",
    results: "40% increase in brand recognition",
  },
  {
    id: 2,
    title: "Social Media Campaign",
    image: portfolio2,
    tags: ["Social Media", "Digital"],
    shortDesc: "Vibrant Instagram template set",
    client: "Creative Studio",
    year: "2024",
    challenge: "Stand out in crowded social feeds",
    solution: "Bold gradients with consistent brand elements",
    results: "3x engagement increase",
  },
  {
    id: 3,
    title: "Event Poster Series",
    image: portfolio3,
    tags: ["Poster", "Print"],
    shortDesc: "Bold geometric event posters",
    client: "Music Festival",
    year: "2023",
    challenge: "Capture festival energy in print",
    solution: "Dynamic typography with vibrant colors",
    results: "Record ticket sales",
  },
  {
    id: 4,
    title: "Brand Identity System",
    image: portfolio4,
    tags: ["Branding", "Identity"],
    shortDesc: "Complete corporate identity package",
    client: "Luxury Brand",
    year: "2023",
    challenge: "Communicate elegance and trust",
    solution: "Minimal design with premium materials",
    results: "Brand value increased 60%",
  },
  {
    id: 5,
    title: "Product Packaging",
    image: portfolio5,
    tags: ["Packaging", "Product"],
    shortDesc: "Premium product box design",
    client: "Tech Product Co.",
    year: "2024",
    challenge: "Create memorable unboxing experience",
    solution: "Striking pattern with embossed details",
    results: "Featured in design awards",
  },
  {
    id: 6,
    title: "Website Design",
    image: portfolio6,
    tags: ["Web", "UI/UX"],
    shortDesc: "Modern responsive website",
    client: "Digital Agency",
    year: "2024",
    challenge: "Balance aesthetics with usability",
    solution: "Clean interface with smooth animations",
    results: "50% longer session duration",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A showcase of recent projects that transformed brands and delivered measurable results.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="portfolio-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-primary-foreground">
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm opacity-90 mb-4">{project.shortDesc}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20"
                >
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <div className="space-y-6">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-96 object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                  <p className="text-muted-foreground">
                    {selectedProject.client} • {selectedProject.year}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-accent">Challenge</h3>
                    <p className="text-sm text-muted-foreground">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-accent">Solution</h3>
                    <p className="text-sm text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-accent">Results</h3>
                    <p className="text-sm text-muted-foreground">{selectedProject.results}</p>
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent-hover">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  View Full Project
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
