import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, DollarSign, Wrench, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resources = () => {
  const navigate = useNavigate();

  const resources = [
    {
      icon: BookOpen,
      title: "Business Tutorials",
      description: "Learn the fundamentals of starting and running a business",
      links: [
        { name: "Small Business Administration", url: "https://www.sba.gov/business-guide" },
        { name: "Entrepreneur's Handbook", url: "https://www.entrepreneur.com/starting-a-business" },
        { name: "HubSpot Business Resources", url: "https://www.hubspot.com/startups" },
      ],
    },
    {
      icon: DollarSign,
      title: "Funding Information",
      description: "Explore different funding options for your startup",
      links: [
        { name: "Kickstarter", url: "https://www.kickstarter.com/" },
        { name: "Small Business Loans", url: "https://www.sba.gov/funding-programs/loans" },
        { name: "Angel Investment Network", url: "https://www.angelinvestmentnetwork.com/" },
      ],
    },
    {
      icon: Wrench,
      title: "Business Tools",
      description: "Essential tools to help you build and grow your business",
      links: [
        { name: "Canva - Design Tool", url: "https://www.canva.com/" },
        { name: "Google Workspace", url: "https://workspace.google.com/" },
        { name: "Trello - Project Management", url: "https://trello.com/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Business Resources</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to turn your idea into reality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <resource.icon className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
