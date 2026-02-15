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
            <h3 className="font-semibold text-foreground">Formation Développeur Web & Mobile</h3>
            <p className="text-muted-foreground text-sm">Académie Digitale Numérique (ADN)</p>
            <p className="text-muted-foreground text-sm">2025 - 2026</p>
            <p className="text-sm text-foreground/80 mt-2">
              Formation intensive en développement Full-Stack, web/ web mobile et outils No-Code
            </p>
          </div>
        </div>
        
        {/* <div className="flex gap-4">
          <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Baccalauréat Série D</h3>
            <p className="text-muted-foreground text-sm">2022</p>
            <p className="text-sm text-foreground/80 mt-2">
              Sciences de la vie et de la terre
            </p>
          </div>
        </div> */}
      </div>
      
      <div className="mt-8">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          Compétences Complémentaires
        </h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span><strong>Flutter & Dart</strong> - Développement mobile cross-platform</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span><strong>React & Node.js</strong> - Développement Full-Stack</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span><strong>Laravel & PHP</strong> - Backend robuste</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span><strong>Figma</strong> - Design UI/UX professionnel</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span><strong>No-Code Development</strong> - Prototypage rapide et solutions agiles</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
