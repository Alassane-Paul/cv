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
    title: "Système de Gestion d'École",
    description: "Application web complète de gestion scolaire avec suivi des élèves, notes, emplois du temps et communication parents-enseignants.",
    technologies: ["Laravel", "Blade", "MySQL", "Tailwind CSS"],
    type: "web",
    github: "https://github.com/paulalassane/gestion-ecole",
  },
  {
    title: "LomoHealth",
    description: "Plateforme de santé digitale permettant de numériser les carnet de vaccination des enfants par le biais d'un QR code et d'alerter les parents en cas de retard de vaccination et de notifier lors d'une nouvelle vague de vaccination avec support de langues locales.",
    technologies: ["Laravel", "Blade", "Flutter", "MySQL", "API REST"],
    type: "web",
    github: "https://github.com/Alassane-Paul/LomoHealth",
  },
  {
    title: "Dzumevi",
    description: "Application de services locaux connectant les utilisateurs avec des prestataires de proximité.",
    technologies: ["Flutter", "Dart", "Laravel", "MySQL"],
    type: "mobile",
    github: "https://github.com/paulalassane/dzumevi",
  },
  {
    title: "QuizzApp",
    description: "Application mobile de quiz interactif avec système de scores, classements et catégories variées.",
    technologies: ["Flutter", "Dart", "Firebase"],
    type: "mobile",
    github: "https://github.com/Alassane-Paul/Quizz_App",
  },
  {
    title: "TaskApp",
    description: "Application de gestion de tâches avec notifications, priorités et synchronisation en temps réel.",
    technologies: ["Flutter", "Dart", "Laravel", "MySQL"],
    type: "mobile",
    github: "https://github.com/Alassane-Paul/Task_App",
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
