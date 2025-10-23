import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useEffect } from "react";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ideas = location.state?.ideas;

  useEffect(() => {
    if (!ideas) {
      navigate("/generator");
    }
  }, [ideas, navigate]);

  if (!ideas) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Button
          variant="outline"
          onClick={() => navigate("/generator")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Generate More Ideas
        </Button>

        <div className="text-center mb-8">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-2">Your Business Ideas</h1>
          <p className="text-muted-foreground">AI-generated startup suggestions tailored for you</p>
        </div>

        <div className="bg-card p-8 rounded-lg border">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <div className="whitespace-pre-wrap">{ideas}</div>
          </div>
        </div>

        <div className="mt-8 text-center space-y-4">
          <p className="text-muted-foreground">Want to explore more resources?</p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => navigate("/resources")} variant="outline">
              View Resources
            </Button>
            <Button onClick={() => navigate("/contact")}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
