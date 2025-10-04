import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, XCircle, Mail } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface RedFlag {
  id: string;
  text: string;
  explanation: string;
}

const redFlags: RedFlag[] = [
  {
    id: "domain",
    text: "support@amaz0n-security.com",
    explanation: "The misspelled domain (amaz0n with a zero) is a classic phishing tactic.",
  },
  {
    id: "urgency",
    text: "URGENT: Immediate action required",
    explanation: "Creating false urgency is a manipulation technique to bypass critical thinking.",
  },
  {
    id: "password",
    text: "verify your password immediately",
    explanation: "Legitimate companies never ask you to verify passwords via email links.",
  },
  {
    id: "link",
    text: "Click here to avoid suspension",
    explanation: "Suspicious links with threats are red flags—always verify through official channels.",
  },
];

const PhishingKata = () => {
  const [foundFlags, setFoundFlags] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ type: "correct" | "incorrect"; message: string } | null>(null);
  const [completed, setCompleted] = useState(false);

  const handleFlagClick = (flagId: string) => {
    const flag = redFlags.find(f => f.id === flagId);
    
    if (foundFlags.includes(flagId)) {
      setFeedback({
        type: "incorrect",
        message: "You already found this red flag—keep searching for the others!",
      });
      return;
    }

    setFoundFlags([...foundFlags, flagId]);
    setFeedback({
      type: "correct",
      message: flag?.explanation || "Correct!",
    });

    if (foundFlags.length + 1 === redFlags.length) {
      setCompleted(true);
    }

    setTimeout(() => setFeedback(null), 4000);
  };

  const handleReset = () => {
    setFoundFlags([]);
    setFeedback(null);
    setCompleted(false);
  };

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="outline" className="text-sm px-4 py-1">
            <Mail className="w-4 h-4 mr-2 inline" />
            Interactive Training
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Phishing <span className="text-primary">Kata</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find all 4 red flags in this simulated phishing email
          </p>
        </div>

        <div className="space-y-6">
          {/* Progress Tracker */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {redFlags.map((_, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-smooth ${
                    foundFlags.length > index
                      ? "border-primary bg-primary/20"
                      : "border-muted bg-muted/20"
                  }`}
                >
                  {foundFlags.length > index && <CheckCircle2 className="w-5 h-5 text-primary" />}
                </div>
              ))}
            </div>
            <Badge variant="secondary">
              {foundFlags.length} / {redFlags.length} Found
            </Badge>
          </div>

          {/* Simulated Email */}
          <Card className="gradient-card shadow-card border-border">
            <CardHeader className="border-b border-border bg-muted/20">
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">From:</span>
                    <button
                      onClick={() => handleFlagClick("domain")}
                      className={`text-sm font-mono hover:bg-primary/10 px-2 py-1 rounded transition-smooth ${
                        foundFlags.includes("domain") ? "bg-primary/20 line-through" : ""
                      }`}
                    >
                      support@amaz0n-security.com
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Subject:</span>
                    <button
                      onClick={() => handleFlagClick("urgency")}
                      className={`text-sm font-semibold hover:bg-primary/10 px-2 py-1 rounded transition-smooth ${
                        foundFlags.includes("urgency") ? "bg-primary/20 line-through" : ""
                      }`}
                    >
                      URGENT: Immediate action required - Account Security Alert
                    </button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4 text-sm leading-relaxed">
                <p>Dear Valued Customer,</p>
                <p>
                  We have detected unusual activity on your account and need you to{" "}
                  <button
                    onClick={() => handleFlagClick("password")}
                    className={`font-semibold hover:bg-primary/10 px-1 rounded transition-smooth ${
                      foundFlags.includes("password") ? "bg-primary/20 line-through" : ""
                    }`}
                  >
                    verify your password immediately
                  </button>{" "}
                  to prevent account suspension. This is a mandatory security measure.
                </p>
                <p>
                  Your account will be permanently locked within 24 hours if you do not take action.
                  We take security seriously and this verification is required to protect your personal information.
                </p>
                <p>
                  <button
                    onClick={() => handleFlagClick("link")}
                    className={`text-primary font-semibold hover:bg-primary/10 px-2 py-1 rounded transition-smooth underline ${
                      foundFlags.includes("link") ? "bg-primary/20 line-through" : ""
                    }`}
                  >
                    Click here to avoid suspension
                  </button>
                </p>
                <p className="text-muted-foreground">
                  Thank you for your immediate attention to this matter.
                  <br />
                  Amazon Security Team
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feedback Alert */}
          {feedback && (
            <Alert className={feedback.type === "correct" ? "border-primary" : "border-destructive"}>
              {feedback.type === "correct" ? (
                <CheckCircle2 className="h-4 w-4 text-primary" />
              ) : (
                <XCircle className="h-4 w-4 text-destructive" />
              )}
              <AlertDescription>{feedback.message}</AlertDescription>
            </Alert>
          )}

          {/* Completion Message */}
          {completed && (
            <Card className="gradient-accent shadow-glow border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Kata Complete!
                </CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  You've successfully identified all phishing red flags. Remember these patterns to protect yourself in the real world.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleReset} variant="secondary" className="w-full">
                  Practice Again
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Instructions */}
          <Card className="bg-muted/20 border-border">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Training Instructions:</p>
                  <p className="text-sm text-muted-foreground">
                    Click on any suspicious elements in the email above. Each red flag you identify will be highlighted and explained. Find all 4 to complete this kata.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PhishingKata;
