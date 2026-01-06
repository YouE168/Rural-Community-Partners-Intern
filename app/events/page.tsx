"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Image as ImageIcon,
  X,
} from "lucide-react";
import { useState } from "react";

const allEvents = [
  {
    id: 1,
    title: "Coming Soon",
    description: "Description",
    date: "Date",
    time: "Time",
    location: "Location",
    type: "Workshop",
    attendees: 25,
    image: "/images/workshop-placeholder.jpg",
  },
  {
    id: 2,
    title: "Coming Soon",
    description: "Description",
    date: "Date",
    time: "Time",
    location: "Location",
    type: "Summit",
    attendees: 100,
    image: "/images/summit-placeholder.jpg",
  },
];

const pastEvents = [
  {
    id: 101,
    title: "Social Media for Small Business",
    date: "November 5, 2025",
    location: "Fort Scott, KS",
    attendees: 45,
  },
  {
    id: 102,
    title:
      "National Lead Poisoning Prevention Week - Southeast Kansas Awareness Series",
    date: "October 18 - 25, 2025",
    location:
      "Various communities across Southeast Kansas (Bourbon, Crawford, Labette, and Montgomery Counties)",
    attendees: "No Limit",
  },
  {
    id: 103,
    title: "Dare to Dream: Women's Entrepreneurship Statewide Conference",
    date: "September 28, 2025",
    location: "Fort Scott Community College, KS",
    attendees: 45,
  },
];

export default function EventsPage() {
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<
    (typeof allEvents)[0] | null
  >(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    dietaryRestrictions: "",
    accessibilityNeeds: "",
  });
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleRegisterClick = (event: (typeof allEvents)[0]) => {
    setSelectedEvent(event);
    setIsRegistering(true);
    setSubmitStatus({ type: null, message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "event-registration",
          data: {
            ...formData,
            eventId: selectedEvent?.id,
            eventTitle: selectedEvent?.title,
            eventDate: selectedEvent?.date,
          },
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Registration successful! We'll send you a confirmation email shortly.",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          organization: "",
          dietaryRestrictions: "",
          accessibilityNeeds: "",
        });
        setTimeout(() => {
          setIsRegistering(false);
          setSelectedEvent(null);
        }, 3000);
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Registration failed. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    }
  };

  const closeModal = () => {
    setIsRegistering(false);
    setSelectedEvent(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      dietaryRestrictions: "",
      accessibilityNeeds: "",
    });
    setSubmitStatus({ type: null, message: "" });
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-balance drop-shadow-lg">
            Events & Workshops
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
            Join us for training, networking, and learning opportunities
            designed for rural entrepreneurs and community leaders
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground">
              Register now for our upcoming workshops, networking events, and
              summits
            </p>
          </div>

          <div className="space-y-6">
            {allEvents.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Event Image */}
                    <div className="md:col-span-1 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center min-h-[250px]">
                      <ImageIcon className="h-24 w-24 text-primary/40" />
                      {/* Replace with actual image when available:
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      /> */}
                    </div>

                    {/* Event Details */}
                    <div className="md:col-span-2 p-6">
                      <div className="grid md:grid-cols-3 gap-6 h-full">
                        <div className="md:col-span-2">
                          <div className="flex items-start gap-3 mb-4">
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                              {event.type}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {event.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <Users className="h-4 w-4" />
                              <span>{event.attendees} people registered</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-between md:border-l md:border-border md:pl-6">
                          <div></div>
                          <Button
                            onClick={() => handleRegisterClick(event)}
                            className="w-full"
                          >
                            Register Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Registration Modal */}
      {isRegistering && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-background border-b border-border p-6 flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Register for {selectedEvent?.title}
                </h2>
                <p className="text-muted-foreground mt-1">
                  {selectedEvent?.date} • {selectedEvent?.location}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">
                    Phone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="organization">Organization (Optional)</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="dietaryRestrictions">
                  Dietary Restrictions (Optional)
                </Label>
                <Textarea
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="accessibilityNeeds">
                  Accessibility Needs (Optional)
                </Label>
                <Textarea
                  id="accessibilityNeeds"
                  name="accessibilityNeeds"
                  value={formData.accessibilityNeeds}
                  onChange={handleInputChange}
                  rows={2}
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-md ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeModal}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Complete Registration
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Past Events */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setShowPastEvents(!showPastEvents)}
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors mb-6 flex items-center gap-2"
          >
            {showPastEvents ? "▼" : "▶"} Past Events Archive
          </button>

          {showPastEvents && (
            <div className="grid md:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="opacity-75">
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let us know what topics or training you'd be interested in. We're
            always developing new programming based on community needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Suggest an Event Topic</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
