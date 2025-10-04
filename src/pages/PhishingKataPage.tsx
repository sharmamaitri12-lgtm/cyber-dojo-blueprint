import PhishingKata from "@/components/PhishingKata";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PhishingKataPage = () => {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Dojo
            </Button>
          </Link>
        </div>
      </div>
      <PhishingKata />
    </div>
  );
};

export default PhishingKataPage;
