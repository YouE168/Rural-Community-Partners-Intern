import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Entrepreneur Kickoff Workshop",
    date: "December 15, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Kansas City, KS",
    description: "Learn essential skills to start your business journey.",
  },
  {
    title: "Mentorship Matching Event",
    date: "December 22, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Virtual",
    description: "Connect with experienced mentors in your industry.",
  },
  {
    title: "Regional Leadership Summit",
    date: "January 10, 2026",
    time: "8:30 AM - 5:00 PM",
    location: "Salina, KS",
    description: "Network with community leaders and innovators.",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for workshops, networking, and learning opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-foreground">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-sm text-foreground pt-2">
                  {event.description}
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="w-full bg-transparent"
                >
                  <Link href={`/events/${index}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-8">
          <Button asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
