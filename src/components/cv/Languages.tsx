import { Languages as LanguagesIcon, Users } from "lucide-react";

const Languages = () => {
  return (
    <div className="space-y-6">
      <section className="bg-card rounded-xl p-6 shadow-card">
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <span className="w-8 h-1 gradient-primary rounded-full" />
          Langues
        </h2>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-foreground">Français</span>
              <span className="text-sm text-muted-foreground">Langue maternelle</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full gradient-primary rounded-full" style={{ width: "100%" }} />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-foreground">Anglais</span>
              <span className="text-sm text-muted-foreground">Intermédiaire</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full gradient-accent rounded-full" style={{ width: "60%" }} />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-foreground">Ewé</span>
              <span className="text-sm text-muted-foreground">Courant</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full gradient-primary rounded-full" style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-card rounded-xl p-6 shadow-card">
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <span className="w-8 h-1 gradient-primary rounded-full" />
          Qualités
        </h2>
        
        <div className="flex flex-wrap gap-2">
          {[
            "Autonome",
            "Rigoureux",
            "Curieux",
            "Adaptable",
            "Esprit d'équipe",
            "Apprenant rapide",
            "Proactif",
            "Organisé",
          ].map((quality) => (
            <span
              key={quality}
              className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
            >
              {quality}
            </span>
          ))}
        </div>
      </section>
      
      <section className="bg-card rounded-xl p-6 shadow-card">
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <span className="w-8 h-1 gradient-primary rounded-full" />
          Centres d'intérêt
        </h2>
        
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Musique</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>Nouvelles technologies</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Open Source</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>No-Code</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Communauté dev</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>Lecture tech</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Languages;
