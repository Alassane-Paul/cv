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
    title: "Développeur Full-Stack (Freelance)",
    company: "Clients Divers",
    period: "2024 - Présent",
    description: [
      "Développement d'applications web complètes avec Laravel et React",
      "Création d'interfaces utilisateur modernes avec Blade et Tailwind CSS",
      "Conception et intégration d'APIs RESTful avec Node.js et Express",
      "Développement d'applications mobiles Flutter pour divers clients",
      "Maquettage et prototypage sur Figma avant développement",
    ],
    technologies: ["Laravel", "React", "Flutter", "Node.js", "Express", "MySQL", "Figma"],
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
