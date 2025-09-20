import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-accent-blue" />,
      title: "Email Us",
      detail: "support@translateai.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6 text-accent-purple" />,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent-blue" />,
      title: "Visit Us",
      detail: "San Francisco, CA",
      description: "123 Innovation Drive"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Have questions about TranslateAI? Need enterprise solutions? 
            We're here to help you break down language barriers.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 hover:shadow-elegant transition-all duration-300">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          <p className="text-primary font-medium mb-1">{info.detail}</p>
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <Card className="p-6 bg-gradient-secondary">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-accent-purple mr-3" />
                  <h3 className="text-xl font-semibold">Quick Questions?</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Check out our FAQ section for instant answers to common questions 
                  about TranslateAI features, pricing, and integrations.
                </p>
                <Button variant="outline" className="w-full">
                  View FAQ
                </Button>
              </Card>

              {/* Enterprise Contact */}
              <Card className="p-6 bg-gradient-primary text-white">
                <h3 className="text-xl font-semibold mb-2">Enterprise Solutions</h3>
                <p className="mb-4 opacity-90">
                  Need custom integrations or volume pricing? 
                  Our enterprise team is ready to help.
                </p>
                <Button variant="secondary" className="w-full">
                  Contact Enterprise Team
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;