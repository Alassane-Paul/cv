import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Développeur Mobile (Stage)",
    company: "Startup Tech Lomé",
    period: "Juin 2024 - Août 2024",
    description: [
      "Développement d'une application mobile de gestion de livraison avec Flutter",
      "Intégration de Firebase Authentication et Firestore",
      "Mise en place de notifications push et géolocalisation",
      "Collaboration avec l'équipe backend pour l'intégration des APIs",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
  },
  {
    title: "Projet Personnel - Application E-commerce",
    company: "Projet Autodidacte",
    period: "Mars 2024 - Mai 2024",
    description: [
      "Conception et développement d'une application mobile marketplace",
      "Implémentation d'un système de panier et de paiement simulé",
      "Création d'un back-office React pour la gestion des produits",
      "Déploiement sur Firebase Hosting",
    ],
    technologies: ["Flutter", "React", "Node.js", "Firebase"],
  },
  {
    title: "Développeur Web Junior (Freelance)",
    company: "Clients Divers",
    period: "Janvier 2024 - Présent",
    description: [
      "Création de sites vitrines responsives pour PME locales",
      "Développement de landing pages optimisées",
      "Maintenance et mise à jour de sites existants",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "WordPress"],
  },
];

const Experience = () => {
  return (
    <section className="bg-card rounded-xl p-6 shadow-card">
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="w-8 h-1 gradient-primary rounded-full" />
        Expériences Professionnelles
      </h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-primary/30">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full gradient-primary" />
            
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {exp.company}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </span>
              </div>
            </div>
            
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80 mb-3">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-1.5">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
