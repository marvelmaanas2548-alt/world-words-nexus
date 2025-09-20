import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { ArrowLeftRight, Copy, Volume2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TranslationInterface = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [isTranslating, setIsTranslating] = useState(false);
  const { toast } = useToast();

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "zh", name: "Chinese" },
  ];

  const handleTranslate = async () => {
    if (!sourceText.trim()) {
      toast({
        title: "No text to translate",
        description: "Please enter some text to translate.",
        variant: "destructive",
      });
      return;
    }

    setIsTranslating(true);
    
    // Simulate translation API call
    setTimeout(() => {
      setTranslatedText(`[Translated from ${sourceLang} to ${targetLang}] ${sourceText}`);
      setIsTranslating(false);
      toast({
        title: "Translation completed",
        description: "Your text has been successfully translated.",
      });
    }, 1500);
  };

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "Text has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Unable to copy text to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Language Selection */}
      <div className="flex items-center justify-center space-x-4">
        <Select value={sourceLang} onValueChange={setSourceLang}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleSwapLanguages}
          className="hover:bg-accent hover:shadow-elegant transition-all duration-300"
        >
          <ArrowLeftRight className="w-4 h-4" />
        </Button>

        <Select value={targetLang} onValueChange={setTargetLang}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Translation Interface */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Source Text */}
        <Card className="p-6 space-y-4 hover:shadow-elegant transition-all duration-300">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">
              {languages.find(l => l.code === sourceLang)?.name}
            </h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Volume2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Textarea
            placeholder="Enter text to translate..."
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            className="min-h-[200px] resize-none focus:ring-primary"
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              {sourceText.length} characters
            </span>
          </div>
        </Card>

        {/* Translated Text */}
        <Card className="p-6 space-y-4 hover:shadow-elegant transition-all duration-300">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">
              {languages.find(l => l.code === targetLang)?.name}
            </h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Volume2 className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => handleCopy(translatedText)}
                disabled={!translatedText}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="min-h-[200px] p-3 bg-muted/30 rounded-md">
            {isTranslating ? (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
                <span className="ml-2 text-muted-foreground">Translating...</span>
              </div>
            ) : (
              <p className="text-foreground whitespace-pre-wrap">
                {translatedText || "Translation will appear here..."}
              </p>
            )}
          </div>
        </Card>
      </div>

      {/* Translate Button */}
      <div className="flex justify-center">
        <Button 
          onClick={handleTranslate}
          disabled={isTranslating || !sourceText.trim()}
          className="px-8 py-3 text-lg bg-gradient-primary hover:shadow-glow transition-all duration-300"
        >
          {isTranslating ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Translating...
            </>
          ) : (
            "Translate"
          )}
        </Button>
      </div>
    </div>
  );
};

export default TranslationInterface;