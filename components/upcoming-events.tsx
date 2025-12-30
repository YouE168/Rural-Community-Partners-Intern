import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Users, Sparkles } from "lucide-react";

export default function UpcomingEvents() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Join Our Upcoming Events
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with entrepreneurs, learn from experts, and grow your
            network at our workshops, summits, and community gatherings across
            Southeast Kansas.
          </p>
        </div>

        <div className="space-y-4">
          <Button size="lg" asChild className="text-lg px-8 py-6">
            <Link href="/events">
              View All Events <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Free and open to all entrepreneurs and community leaders
          </p>
        </div>
      </div>
    </section>
  );
}
