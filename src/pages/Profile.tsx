import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Mail, 
  Calendar, 
  Globe, 
  Settings, 
  BarChart3, 
  Clock, 
  Award,
  Edit2,
  Save
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    joinDate: "March 2023",
    plan: "Pro",
    avatar: ""
  });
  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const stats = [
    { label: "Translations", value: "2,847", icon: <Globe className="w-5 h-5" /> },
    { label: "Languages Used", value: "12", icon: <Award className="w-5 h-5" /> },
    { label: "Words Translated", value: "45.2K", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Time Saved", value: "127 hrs", icon: <Clock className="w-5 h-5" /> }
  ];

  const recentTranslations = [
    { from: "English", to: "Spanish", text: "Hello, how are you?", date: "2 hours ago" },
    { from: "French", to: "English", text: "Bonjour, comment allez-vous?", date: "5 hours ago" },
    { from: "German", to: "English", text: "Guten Tag, wie geht es Ihnen?", date: "1 day ago" },
    { from: "Japanese", to: "English", text: "こんにちは、元気ですか？", date: "2 days ago" }
  ];

  const favoriteLanguages = [
    { language: "Spanish", usage: 85 },
    { language: "French", usage: 72 },
    { language: "German", usage: 58 },
    { language: "Italian", usage: 43 },
    { language: "Portuguese", usage: 31 }
  ];

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Profile</h1>
          <p className="text-muted-foreground">
            Manage your account settings and view your translation activity.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Profile Card */}
            <Card className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={userInfo.avatar} />
                    <AvatarFallback className="bg-gradient-primary text-white text-xl">
                      {userInfo.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">{userInfo.name}</h2>
                    <p className="text-muted-foreground">{userInfo.email}</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <Badge variant="secondary">{userInfo.plan} Plan</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        Joined {userInfo.joinDate}
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="p-4 text-center hover:shadow-elegant transition-all duration-300">
                    <div className="flex justify-center mb-2 text-accent-blue">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Language Usage */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Most Used Languages</h3>
              <div className="space-y-4">
                {favoriteLanguages.map((lang, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-20 text-sm font-medium">{lang.language}</div>
                    <div className="flex-1">
                      <Progress value={lang.usage} className="h-2" />
                    </div>
                    <div className="text-sm text-muted-foreground w-12">{lang.usage}%</div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Translations</h3>
              <div className="space-y-4">
                {recentTranslations.map((translation, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{translation.from}</Badge>
                        <span className="text-muted-foreground">→</span>
                        <Badge variant="outline">{translation.to}</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{translation.date}</span>
                    </div>
                    <p className="text-sm">{translation.text}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Monthly Progress */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">This Month's Progress</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">324</div>
                  <div className="text-sm text-muted-foreground">Translations</div>
                  <div className="text-xs text-green-600 mt-1">+12% from last month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5.2K</div>
                  <div className="text-sm text-muted-foreground">Words</div>
                  <div className="text-xs text-green-600 mt-1">+8% from last month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">7</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                  <div className="text-xs text-blue-600 mt-1">Same as last month</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
              <div className="space-y-4 max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                {isEditing && (
                  <Button onClick={handleSave} className="bg-gradient-primary">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                )}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Email Notifications</div>
                    <div className="text-sm text-muted-foreground">Receive updates about your translations</div>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Auto-save Translations</div>
                    <div className="text-sm text-muted-foreground">Automatically save your translation history</div>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Default Languages</div>
                    <div className="text-sm text-muted-foreground">Set your preferred source and target languages</div>
                  </div>
                  <Button variant="outline" size="sm">Set Default</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Subscription</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Pro Plan</div>
                  <div className="text-sm text-muted-foreground">Unlimited translations, priority support</div>
                </div>
                <Button variant="outline">Manage Subscription</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;