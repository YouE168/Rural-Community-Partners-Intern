import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Briefcase, MapPin } from "lucide-react";

const programs = [
  {
    slug: "entrepreneur-council",
    title: "Small Business & Entrepreneur Council",
    description:
      "A peer-led group of successful entrepreneurs providing guidance and support",
    details:
      "Monthly meetings, business networking, peer mentorship, and collaborative problem-solving",
  },
  {
    slug: "mentorship",
    title: "Mentorship Program",
    description:
      "One-on-one matching with experienced mentors in your industry",
    details:
      "Personalized guidance, skill development, accountability, and strategic planning",
  },
  {
    icon: MapPin,
    slug: "local-action-teams",
    title: "Local Action Teams",
    description: "Community-based teams driving local economic development",
    details:
      "Community projects, local partnerships, asset-based development, and sustained impact",
  },

  {
    slug: "board-members",
    title: "Board Members",
    description:
      "Leadership guiding Rural Community Partners' strategic vision",
    details:
      "Strategic governance, organizational oversight, and commitment to rural community development",
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/*CHANGE TO THE RIGHT IMAGE */}
          <img
            src="/your-image.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Special Initiatives
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized programs designed to create lasting impact in rural
            Southeast Kansas
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <Card
                  key={program.slug}
                  className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="text-foreground">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-6 flex-1">
                      {program.details}
                    </p>
                    <Button asChild className="w-full">
                      <Link href={`/programs/${program.slug}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
