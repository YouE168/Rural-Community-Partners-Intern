"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function MentorshipForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessStage: "",
    industry: "",
    businessIdea: "",
    specificNeeds: "",
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

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
          formType: "mentorship",
          data: formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Great! Your mentorship application has been received. We'll review it and match you with a mentor soon."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          businessStage: "",
          industry: "",
          businessIdea: "",
          specificNeeds: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setMessage(
          "There was an error submitting your application. Please try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        "There was an error submitting your application. Please try again."
      );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Apply for Mentorship</CardTitle>
      </CardHeader>
      <CardContent>
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
                placeholder="John Doe"
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
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(555) 123-4567"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name *</Label>
              <Input
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                placeholder="Your business name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="businessStage">Business Stage *</Label>
              <Select
                value={formData.businessStage}
                onValueChange={(value) =>
                  handleSelectChange("businessStage", value)
                }
              >
                <SelectTrigger id="businessStage">
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ideation">Ideation</SelectItem>
                  <SelectItem value="startup">Startup (0-1 year)</SelectItem>
                  <SelectItem value="early">
                    Early Growth (1-3 years)
                  </SelectItem>
                  <SelectItem value="growth">Growth (3+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry *</Label>
              <Input
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                placeholder="e.g., Retail, Agriculture, Tech"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessIdea">
              Tell Us About Your Business Idea or Venture *
            </Label>
            <Textarea
              id="businessIdea"
              name="businessIdea"
              value={formData.businessIdea}
              onChange={handleChange}
              required
              placeholder="Describe your business, what problem it solves, and your vision..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specificNeeds">
              Specific Areas Where You Need Mentorship *
            </Label>
            <Textarea
              id="specificNeeds"
              name="specificNeeds"
              value={formData.specificNeeds}
              onChange={handleChange}
              required
              placeholder="e.g., Business planning, marketing strategy, financial management, operations..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full"
          >
            {status === "loading" ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
