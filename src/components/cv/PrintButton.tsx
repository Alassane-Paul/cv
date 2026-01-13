import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed bottom-6 right-6 flex gap-2 no-print z-50">
      <Button
        onClick={handlePrint}
        className="gradient-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all"
      >
        <Download className="w-4 h-4 mr-2" />
        Télécharger PDF
      </Button>
    </div>
  );
};

export default PrintButton;
