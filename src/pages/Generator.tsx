import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Lightbulb } from "lucide-react";

const Generator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    budget: "",
    interests: "",
    skills: "",
    timeAvailability: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.budget || !formData.interests || !formData.skills || !formData.timeAvailability) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-business-ideas", {
        body: formData,
      });

      if (error) throw error;

      if (data?.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      navigate("/results", { state: { ideas: data.ideas } });
    } catch (error) {
      console.error("Error generating ideas:", error);
      toast({
        title: "Error",
        description: "Failed to generate business ideas. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <Lightbulb className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-2">AI Business Idea Generator</h1>
          <p className="text-muted-foreground">Tell us about yourself and get personalized startup ideas</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border">
          <div className="space-y-2">
            <Label htmlFor="budget">Budget (USD)</Label>
            <Input
              id="budget"
              type="number"
              placeholder="e.g., 5000"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests">Interests</Label>
            <Textarea
              id="interests"
              placeholder="e.g., technology, fitness, cooking"
              value={formData.interests}
              onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
              disabled={loading}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">Skills</Label>
            <Textarea
              id="skills"
              placeholder="e.g., web development, marketing, design"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              disabled={loading}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeAvailability">Time Availability</Label>
            <Input
              id="timeAvailability"
              placeholder="e.g., 10 hours per week"
              value={formData.timeAvailability}
              onChange={(e) => setFormData({ ...formData, timeAvailability: e.target.value })}
              disabled={loading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Ideas...
              </>
            ) : (
              "Generate Business Ideas"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Generator;
