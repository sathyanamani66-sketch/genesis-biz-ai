import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, BookOpen, Mail, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <Sparkles className="w-20 h-20 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl font-bold mb-6">AI Business Idea Generator</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Struggling to come up with the perfect business idea? Let AI help! Enter your budget, 
            interests, and skills to get personalized startup suggestions powered by artificial intelligence.
          </p>
          <Button size="lg" onClick={() => navigate("/generator")} className="text-lg px-8 py-6">
            Get Started - Generate Ideas
          </Button>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Your Profile</h3>
              <p className="text-muted-foreground">Tell us about your budget, interests, skills, and available time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">Our AI analyzes your profile and generates tailored business ideas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Ideas</h3>
              <p className="text-muted-foreground">Receive 3-5 unique business ideas with profit estimates and startup steps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What You'll Get</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-6 rounded-lg border">
            <TrendingUp className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Profit Potential</h3>
            <p className="text-muted-foreground">Realistic monthly profit estimates for each business idea</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <BookOpen className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Step-by-Step Guide</h3>
            <p className="text-muted-foreground">Clear action steps to turn your idea into reality</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <Sparkles className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Personalized Ideas</h3>
            <p className="text-muted-foreground">Ideas matched to your unique skills and interests</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Entrepreneurial Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Generate your personalized business ideas in minutes
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => navigate("/generator")}>
              Generate Ideas Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/resources")}>
              <BookOpen className="mr-2 h-5 w-5" />
              View Resources
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
