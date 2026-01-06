"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function GetSupportPage() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    serviceType: initialService,
    county: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting form data:", formData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "support",
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            organization: formData.organization,
            serviceType: formData.serviceType,
            county: formData.county,
            message: formData.message,
          },
          timestamp: new Date().toISOString(),
        }),
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      // Check if response is actually JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        alert(
          "API Error: The server returned an unexpected response. Check the console for details."
        );
        return;
      }

      const result = await response.json();
      console.log("Response data:", result);

      if (result.success) {
        alert(
          "Support request submitted successfully! We'll be in touch soon."
        );
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          serviceType: "",
          county: "",
          message: "",
        });
      } else {
        alert(
          `Error: ${
            result.message ||
            "There was an error submitting your request. Please try again."
          }`
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        `There was an error submitting your request: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-balance drop-shadow-lg">
            Request Support
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
            Tell us how we can help you grow your business or strengthen your
            community
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Support Request Form</CardTitle>
              <p className="text-muted-foreground mt-2">
                Complete the form below and we'll connect you with the right
                resources and support for your needs.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="John Smith"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Organization */}
                <div className="space-y-2">
                  <Label htmlFor="organization">
                    Business/Organization Name
                  </Label>
                  <Input
                    id="organization"
                    type="text"
                    value={formData.organization}
                    onChange={(e) =>
                      handleChange("organization", e.target.value)
                    }
                    placeholder="Your business or organization"
                  />
                </div>

                {/* County */}
                <div className="space-y-2">
                  <Label htmlFor="county">
                    County <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="county"
                    type="text"
                    required
                    value={formData.county}
                    onChange={(e) => handleChange("county", e.target.value)}
                    placeholder="e.g., Lyon County"
                  />
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <Label htmlFor="serviceType">
                    Type of Support Needed{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      handleChange("serviceType", value)
                    }
                    required
                  >
                    <SelectTrigger id="serviceType">
                      <SelectValue placeholder="Select a service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">
                        General Support & Resources
                      </SelectItem>
                      <SelectItem value="mentorship">
                        Mentorship Program
                      </SelectItem>
                      <SelectItem value="technical">
                        Technical Assistance
                      </SelectItem>
                      <SelectItem value="microgrant">
                        SBEC Micro Grant Program
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.serviceType === "microgrant" && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Micro-grants help remove barriers, strengthen local
                      businesses, and inform smarter rural entrepreneurship
                      systems.
                    </p>
                  )}
                  {formData.serviceType === "mentorship" && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Get paired with an experienced mentor who can guide your
                      entrepreneurial journey.
                    </p>
                  )}
                  {formData.serviceType === "technical" && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Receive expert technical assistance for your project or
                      initiative.
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Tell Us About Your Needs{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Please describe your situation, what you're hoping to achieve, and how we can best support you..."
                    rows={6}
                    className="resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Support Request"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Questions? Email us at{" "}
              <a
                href="mailto:support@ruralcommunitypartners.org"
                className="text-primary hover:underline"
              >
                support@ruralcommunitypartners.org
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
