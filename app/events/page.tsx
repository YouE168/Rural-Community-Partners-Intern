"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
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
    registrationUrl: "#register",
  },

  {
    id: 2,
    title: "Example: Regional Leadership Summit",
    description:
      "Network with community leaders and innovators from across Southeast Kansas for a full day of learning.",
    date: "January 10, 2026",
    time: "8:30 AM - 5:00 PM",
    location: "Salina, KS",
    type: "Summit",
    attendees: 100,
    registrationUrl: "#register",
  },
];

const pastEvents = [
  {
    id: 101,
    title: "Example: Entrepreneur Networking Event",
    date: "September 15, 2024",
    location: "Topeka, KS",
    attendees: 45,
  },
  {
    id: 102,
    title: "Title",
    date: "Date",
    location: "Location",
    attendees: 32,
  },
];

export default function EventsPage() {
  const [showPastEvents, setShowPastEvents] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Events & Workshops
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
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
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-6">
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
                      <Button asChild className="w-full">
                        <a href={event.registrationUrl}>Register Now</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
