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

const services = [
  {
    slug: "entrepreneurship",
    title: "Entrepreneurship Support",
    description:
      "Start and grow your business with comprehensive support and mentorship",
    details: [
      "Market Validation",
      "Mentorship matching & SEK Catalyst: Empowered by KU",
      "KU School of Business Services",
      "Micro Grant Program (administered by SEK Small Business Entrepreneurship Council)",
      "Jayhawk Consulting",
      "Redtire Consulting",
      "Access to financing resources and guidance",
      "Training workshops and skill development",
      "Ongoing support and accountability",
    ],
    whoItsFor:
      "Aspiring entrepreneurs, startup founders, and small business owners",
  },
  {
    slug: "feasibility",
    title: "Feasibility Studies & Cost-Benefit Analysis",
    description: "Data-driven decision making for projects and initiatives",
    details: [
      "Market analysis and competitive landscape",
      "Financial projections and feasibility assessment",
      "Risk analysis and mitigation strategies",
      "Community impact evaluation",
      "Customized research and data analysis",
    ],
    whoItsFor: "Entrepreneurs, community organizations, and local governments",
  },
  {
    slug: "community-investment",
    title: "Community Investment",
    description:
      "Investing time, talent, and treasure in Southeast Kansas communities",
    details: [
      "Strategic Planning & Visioning",
      "Grant Development & Funding Strategy",
      "Fiscal Administration & Compliance",
      "Capacity Building & Organizational Development",
      "Facilitation & Coalition Coordination",
      "Staffing & Human Capacity Support",
      "Data, Evaluation & Learning",
      "Grant funding and pass-through dollars",
      "Fiscal sponsorship and administration",
    ],
    whoItsFor:
      "Nonprofits, community coalitions, local governments, and informal community groups in Southeast Kansas",
  },
  {
    slug: "community-development",
    title: "Community Development",
    description: "Building strong local economies through collaboration",
    details: [
      "Community visioning and strategic planning",
      "Economic development initiatives",
      "Local partnership development",
      "Infrastructure and asset assessment",
      "CDBG grant support (playgrounds, trails, community facilities)",
      "Sustainable development projects",
    ],
    whoItsFor: "Communities, municipalities, and regional organizations",
  },
  {
    slug: "regional",
    title: "Regional Initiatives",
    description: "Southeast Kansas-wide programs for economic growth",
    details: [
      "Regional economic development strategies",
      "Multi-community collaboration projects",
      "Area-wide skill development programs",
      "Regional networking and partnership building",
      "Cross-community resource sharing",
    ],
    whoItsFor: "Regional organizations and multi-community initiatives",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-balance drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
            Comprehensive support tailored to your unique needs and goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service) => (
              <Card
                key={service.slug}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardHeader className="bg-primary/5 pb-4">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">
                        What's Included
                      </h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">
                              •
                            </span>
                            <span className="text-muted-foreground">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">
                        Who It's For
                      </h4>
                      <p className="text-muted-foreground mb-6">
                        {service.whoItsFor}
                      </p>
                      <Button asChild>
                        <Link href={`/get-support?service=${service.slug}`}>
                          Request This Service
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
