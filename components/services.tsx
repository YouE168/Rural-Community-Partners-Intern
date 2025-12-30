"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  TrendingUp,
  Users,
  MapPin,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScroll();
    container.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 360; // card width + gap
    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-12 sm:py-14 md:py-16 bg-gradient-to-b from-background via-primary/3 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support tailored to your needs
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scrollbar-hide"
          >
            <div className="flex gap-5 min-w-max">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.href}
                    className={`group hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${service.bgColor} border-2 ${service.borderColor} overflow-hidden w-[340px] flex-shrink-0`}
                  >
                    <CardHeader className="pb-3">
                      <div
                        className={`mb-3 p-3 w-fit ${service.iconBg} rounded-lg transition-all group-hover:scale-110`}
                      >
                        <Icon className={`h-6 w-6 ${service.iconColor}`} />
                      </div>
                      <CardTitle className="text-foreground text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-0">
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <Button
                        variant="outline"
                        size="sm"
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

          {/* Left scroll button */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-3 shadow-lg transition-all z-10 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Right scroll button */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-3 shadow-lg transition-all z-10 hover:scale-110 animate-pulse"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
