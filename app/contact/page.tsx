"use client";

import type React from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact",
          data: formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Thank you for your message! We'll get back to you within 1-2 business days."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setMessage(
          "There was an error sending your message. Please try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setMessage("There was an error sending your message. Please try again.");
    }
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to learn more about our services? We'd love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <Card>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">
                    Visit Us
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Rural Community Partners
                    <br />
                    Southeast Kansas
                    <br />
                    Available by appointment
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <a
                      href="https://www.google.com/maps/search/Southeast+Kansas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View on Google Maps
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">
                    Call Us
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Monday - Friday
                    <br />
                    9:00 AM - 5:00 PM
                  </p>
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="w-full"
                  >
                    <a
                      href="tel:+15555551234"
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      Call (555) 555-1234
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">
                    Email Us
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We respond within
                    <br />
                    1-2 business days
                  </p>
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="w-full"
                  >
                    <a
                      href="mailto:info@ruralcommunitypartners.org"
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-foreground">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {status === "success" && (
                <Alert className="mb-6 border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    {message}
                  </AlertDescription>
                </Alert>
              )}

              {status === "error" && (
                <Alert
                  className="mb-6 border-red-200 bg-red-50"
                  variant="destructive"
                >
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How quickly can I expect a response?",
                a: "We typically respond to inquiries within 1-2 business days. For urgent matters, please call us directly.",
              },
              {
                q: "What services are right for my situation?",
                a: "We offer services for entrepreneurs, communities, and organizations. Visit our Services page to learn more, or contact us to discuss your specific needs.",
              },
              {
                q: "Is there a cost for initial consultations?",
                a: "Initial consultations are typically free. Specific programs may have varying fee structures - we'll discuss details during your consultation.",
              },
              {
                q: "How can I participate in your programs?",
                a: "Visit our Programs page to learn about the Entrepreneur Council, Mentorship Program, and Local Action Teams. You can express interest through our Get Support page.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group bg-background p-6 rounded-lg border border-border cursor-pointer hover:border-primary transition-colors"
              >
                <summary className="font-semibold text-foreground flex items-center justify-between">
                  {item.q}
                  <span className="text-primary group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-muted-foreground mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
