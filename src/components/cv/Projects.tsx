import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  type: "mobile" | "web";
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "ShopTogo",
    description: "Application mobile e-commerce complète avec gestion de panier, système de paiement intégré, et suivi de commandes en temps réel.",
    technologies: ["Flutter", "Dart", "Firebase", "Stripe"],
    type: "mobile",
    github: "https://github.com/paulalassane/shoptogo",
  },
  {
    title: "TaskFlow",
    description: "Application de gestion de tâches avec synchronisation cloud, notifications, et collaboration d'équipe.",
    technologies: ["Flutter", "Firebase", "Cloud Functions"],
    type: "mobile",
    github: "https://github.com/paulalassane/taskflow",
  },
  {
    title: "Fitness Tracker",
    description: "Application de suivi fitness avec intégration de capteurs, visualisation de données et objectifs personnalisés.",
    technologies: ["Flutter", "Dart", "Charts", "SQLite"],
    type: "mobile",
    github: "https://github.com/paulalassane/fitness-tracker",
  },
  {
    title: "Portfolio Personnel",
    description: "Site web portfolio moderne et responsive avec animations fluides et mode sombre.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    type: "web",
    github: "https://github.com/paulalassane/portfolio",
    demo: "https://paulalassane.dev",
  },
];

const Projects = () => {
  return (
    <section className="bg-card rounded-xl p-6 shadow-card">
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="w-8 h-1 gradient-primary rounded-full" />
        Projets Personnels
      </h2>
      
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-border bg-secondary/30 hover:shadow-card transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {project.type === "mobile" ? (
                    <Smartphone className="w-4 h-4 text-primary" />
                  ) : (
                    <Globe className="w-4 h-4 text-accent" />
                  )}
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-secondary transition-colors"
                  >
                    <Github className="w-4 h-4 text-muted-foreground" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-secondary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-xs text-muted-foreground mt-4 text-center">
        Plus de projets disponibles sur mon GitHub
      </p>
    </section>
  );
};

export default Projects;
