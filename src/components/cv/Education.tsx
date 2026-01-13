import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="bg-card rounded-xl p-6 shadow-card">
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="w-8 h-1 gradient-primary rounded-full" />
        Formation
      </h2>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Licence en Informatique</h3>
            <p className="text-muted-foreground text-sm">Université de Lomé</p>
            <p className="text-muted-foreground text-sm">2021 - 2024</p>
            <p className="text-sm text-foreground/80 mt-2">
              Spécialisation en développement logiciel et systèmes d'information
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Baccalauréat Série C</h3>
            <p className="text-muted-foreground text-sm">Lycée de Lomé</p>
            <p className="text-muted-foreground text-sm">2021</p>
            <p className="text-sm text-foreground/80 mt-2">
              Mention Bien
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          Certifications & Formations
        </h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span><strong>Flutter & Dart - The Complete Guide</strong> - Udemy (2024)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span><strong>React - The Complete Course</strong> - Udemy (2023)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span><strong>Firebase Fundamentals</strong> - Google (2024)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span><strong>Git & GitHub Bootcamp</strong> - Coursera (2023)</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
