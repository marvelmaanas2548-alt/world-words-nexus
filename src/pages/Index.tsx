import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TranslationInterface from "@/components/TranslationInterface";
import { Globe, Zap, Shield, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-accent-blue" />,
      title: "100+ Languages",
      description: "Translate between over 100 languages instantly"
    },
    {
      icon: <Zap className="w-6 h-6 text-accent-purple" />,
      title: "Lightning Fast",
      description: "Get results in seconds with AI-powered translation"
    },
    {
      icon: <Shield className="w-6 h-6 text-accent-blue" />,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-3 h-3 mr-1" />
              #1 AI Translation Platform
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Break Down
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Language Barriers</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience the future of translation with our AI-powered platform. 
            Accurate, fast, and secure translations for over 100 languages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Start Translating
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Translation Interface */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TranslationInterface />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose TranslateAI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powered by cutting-edge AI technology for accurate, contextual translations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 group">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-gradient-primary text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join millions of users who trust TranslateAI for their translation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/profile">
                <Button variant="secondary" size="lg">
                  Create Account
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
