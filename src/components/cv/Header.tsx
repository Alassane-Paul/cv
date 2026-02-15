import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="gradient-dark text-primary-foreground py-12 px-8 rounded-2xl mb-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Photo placeholder */}
          <div className="w-32 h-32 rounded-full bg-primary/20 border-4 border-primary-foreground/30 flex items-center justify-center text-4xl font-bold shrink-0">
            PA
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Paul Alassane</h1>
            <p className="text-xl text-primary-foreground/80 mb-4">
              Développeur Full-Stack Junior
            </p>
            <p className="text-primary-foreground/70 max-w-lg mb-6">
              Passionné par le développement mobile et web, je cherche à contribuer à des projets innovants tout en développant mes compétences techniques.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <a href="mailto:alassanepaul0@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                alassanepaul0@gmail.com
              </a>
              <a href="tel:+22891782947" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                +228 91 78 29 47
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Lomé, Togo
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm">
              <a href="https://github.com/Alassane-Paul" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Github className="w-4 h-4" />
                github.com/Alassane-Paul
              </a>
              <a href="https://www.linkedin.com/in/paul-alassane-2602423a3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
