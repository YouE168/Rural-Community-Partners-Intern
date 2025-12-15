import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, TrendingUp, Users, MapPin, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Entrepreneurship Support",
    description:
      "Business planning, mentorship, and resources to help you start and grow your business.",
    href: "/services/entrepreneurship",
    bgColor: "from-primary/15 to-primary/5",
    borderColor: "border-primary/30",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: BarChart3,
    title: "Feasibility Studies",
    description:
      "Data-driven analysis to evaluate business viability and community projects.",
    href: "/services/feasibility",
    bgColor: "from-secondary/15 to-secondary/5",
    borderColor: "border-secondary/30",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Technical Assistance",
    description:
      "Expert guidance on implementation, project management, and strategic planning.",
    href: "/services/technical-assistance",
    bgColor: "from-accent/15 to-accent/5",
    borderColor: "border-accent/30",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: MapPin,
    title: "Community Development",
    description:
      "Building strong local economies through collaborative initiatives.",
    href: "/services/community-development",
    bgColor: "from-primary/15 via-accent/10 to-primary/5",
    borderColor: "border-primary/20",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Regional Initiatives",
    description:
      "Southeast Kansas-wide programs supporting economic development.",
    href: "/services/regional",
    bgColor: "from-secondary/15 via-primary/10 to-secondary/5",
    borderColor: "border-secondary/20",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
  },
];

export default function Services() {
  return (
    <section className="w-full py-20 sm:py-28 md:py-32 bg-gradient-to-b from-background via-primary/3 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive support tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.href}
                className={`group hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${service.bgColor} border-2 ${service.borderColor} overflow-hidden`}
              >
                <CardHeader>
                  <div
                    className={`mb-4 p-4 w-fit ${service.iconBg} rounded-xl transition-all group-hover:scale-110`}
                  >
                    <Icon className={`h-7 w-7 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-foreground text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full bg-transparent border-primary/40 hover:border-primary/60 hover:bg-primary/5 transition-all group-hover:text-primary"
                  >
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
