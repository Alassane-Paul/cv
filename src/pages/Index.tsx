import Header from "@/components/cv/Header";
import Skills from "@/components/cv/Skills";
import Experience from "@/components/cv/Experience";
import Education from "@/components/cv/Education";
import Projects from "@/components/cv/Projects";
import Languages from "@/components/cv/Languages";
import PrintButton from "@/components/cv/PrintButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Experience />
            <Projects />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <Skills />
            <Education />
            <Languages />
          </div>
      </div>
      </div>
      
      <PrintButton />
    </div>
  );
};

export default Index;
