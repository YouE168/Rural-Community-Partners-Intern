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

export default function TechnicalAssistanceForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    projectTitle: "",
    assistanceType: "",
    projectDetails: "",
    timeline: "",
    challenges: "",
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
          formType: "technical-assistance",
          data: formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Thank you! Your technical assistance request has been submitted. We'll assess your needs and be in touch within 3-5 business days."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          projectTitle: "",
          assistanceType: "",
          projectDetails: "",
          timeline: "",
          challenges: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setMessage(
          "There was an error submitting your request. Please try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        "There was an error submitting your request. Please try again."
      );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request Technical Assistance</CardTitle>
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
              <Label htmlFor="organization">Organization Name *</Label>
              <Input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                placeholder="Your organization"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectTitle">Project/Initiative Title *</Label>
            <Input
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleChange}
              required
              placeholder="Name of your project"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="assistanceType">
              Type of Technical Assistance Needed *
            </Label>
            <Select
              value={formData.assistanceType}
              onValueChange={(value) =>
                handleSelectChange("assistanceType", value)
              }
            >
              <SelectTrigger id="assistanceType">
                <SelectValue placeholder="Select assistance type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="strategic">Strategic Planning</SelectItem>
                <SelectItem value="project">Project Management</SelectItem>
                <SelectItem value="operations">
                  Operations & Efficiency
                </SelectItem>
                <SelectItem value="technology">
                  Technology Implementation
                </SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectDetails">
              Describe Your Project or Initiative *
            </Label>
            <Textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
              placeholder="Provide details about your project, goals, and current status..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Timeline for Assistance Needed *</Label>
            <Select
              value={formData.timeline}
              onValueChange={(value) => handleSelectChange("timeline", value)}
            >
              <SelectTrigger id="timeline">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">
                  Immediate (within 2 weeks)
                </SelectItem>
                <SelectItem value="soon">Soon (within 1 month)</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="challenges">Key Challenges or Questions *</Label>
            <Textarea
              id="challenges"
              name="challenges"
              value={formData.challenges}
              onChange={handleChange}
              required
              placeholder="What specific challenges are you facing? What questions do you need answered?"
              rows={4}
            />
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full"
          >
            {status === "loading" ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
