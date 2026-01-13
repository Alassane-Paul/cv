import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: { name: string; level: "expert" | "avancé" | "intermédiaire" | "notions" }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", level: "avancé" },
      { name: "Dart", level: "avancé" },
      { name: "React Native", level: "intermédiaire" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "expert" },
      { name: "TypeScript", level: "avancé" },
      { name: "JavaScript", level: "expert" },
      { name: "Blade", level: "avancé" },
      { name: "HTML/CSS", level: "expert" },
      { name: "Tailwind CSS", level: "avancé" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "avancé" },
      { name: "Express.js", level: "avancé" },
      { name: "Laravel", level: "avancé" },
      { name: "REST API", level: "expert" },
      { name: "PHP", level: "avancé" },
    ],
  },
  {
    title: "Base de données",
    skills: [
      { name: "MySQL", level: "avancé" },
      { name: "MongoDB", level: "notions" },
    ],
  },
  {
    title: "Outils & No-Code",
    skills: [
      { name: "Git", level: "avancé" },
      { name: "GitHub", level: "avancé" },
      { name: "VS Code", level: "expert" },
      { name: "Figma", level: "expert" },
      { name: "Android Studio", level: "avancé" },
      { name: "No-Code Tools", level: "avancé" },
    ],
  },
];

const levelColors = {
  expert: "bg-primary text-primary-foreground",
  avancé: "bg-accent text-accent-foreground",
  intermédiaire: "bg-secondary text-secondary-foreground",
  notions: "bg-muted text-muted-foreground",
};

const Skills = () => {
  return (
    <section className="bg-card rounded-xl p-6 shadow-card">
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="w-8 h-1 gradient-primary rounded-full" />
        Compétences Techniques
      </h2>
      
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill.name}
                  className={`${levelColors[skill.level]} font-medium`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          <span className="inline-block w-3 h-3 rounded-full bg-primary mr-1 align-middle" /> Expert
          <span className="inline-block w-3 h-3 rounded-full bg-accent mr-1 ml-3 align-middle" /> Avancé
          <span className="inline-block w-3 h-3 rounded-full bg-secondary mr-1 ml-3 align-middle" /> Intermédiaire
          <span className="inline-block w-3 h-3 rounded-full bg-muted mr-1 ml-3 align-middle" /> Notions
        </p>
      </div>
    </section>
  );
};

export default Skills;
