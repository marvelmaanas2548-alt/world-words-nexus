import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Zap, Shield, Users, Award, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-accent-blue" />,
      title: "100+ Languages",
      description: "Support for over 100 languages and dialects with high accuracy translation."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-purple" />,
      title: "Lightning Fast",
      description: "Get instant translations with our advanced AI-powered translation engine."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent-blue" />,
      title: "Secure & Private",
      description: "Your data is encrypted and never stored. Complete privacy guaranteed."
    },
    {
      icon: <Users className="w-8 h-8 text-accent-purple" />,
      title: "Team Collaboration",
      description: "Share translations with your team and collaborate on projects seamlessly."
    },
    {
      icon: <Award className="w-8 h-8 text-accent-blue" />,
      title: "Enterprise Grade",
      description: "Professional-grade accuracy trusted by businesses worldwide."
    },
    {
      icon: <Clock className="w-8 h-8 text-accent-purple" />,
      title: "24/7 Available",
      description: "Access our translation service anytime, anywhere, on any device."
    }
  ];

  const stats = [
    { value: "50M+", label: "Translations" },
    { value: "100+", label: "Languages" },
    { value: "99.9%", label: "Uptime" },
    { value: "500K+", label: "Users" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Breaking Down
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Language Barriers</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            TranslateAI is the world's most advanced AI-powered translation platform, 
            making global communication effortless and accurate for millions of users worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">AI-Powered</Badge>
            <Badge variant="secondary" className="text-sm">Real-time</Badge>
            <Badge variant="secondary" className="text-sm">Secure</Badge>
            <Badge variant="secondary" className="text-sm">Global</Badge>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose TranslateAI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of translation with cutting-edge AI technology 
              that understands context, culture, and nuance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We believe that language should never be a barrier to human connection, 
            understanding, and progress. Our mission is to create the most accurate, 
            accessible, and intelligent translation platform that empowers people 
            to communicate freely across cultures and languages.
          </p>
          <Card className="p-8 bg-gradient-primary text-white">
            <blockquote className="text-xl italic">
              "TranslateAI has revolutionized how our global team communicates. 
              The accuracy and speed are unmatched."
            </blockquote>
            <cite className="block mt-4 text-sm opacity-90">
              — Sarah Chen, Global Communications Director
            </cite>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;