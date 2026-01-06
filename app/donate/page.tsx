import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  Building2,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const DONATION_URL =
  "https://southeastkansas.fcsuite.com/erp/donate/create/fund?funit_id=3112";

const donationLevels = [
  {
    amount: "$50",
    name: "Ecosystem Builder",
    impact: "Support foundational resources for emerging entrepreneurs",
    icon: Building2,
  },
  {
    amount: "$100",
    name: "Opportunity Connector",
    impact: "Enable mentorship connections and networking opportunities",
    icon: Users,
  },
  {
    amount: "$250",
    name: "Small Business Champion",
    impact: "Fund essential business development tools and training",
    icon: TrendingUp,
  },
  {
    amount: "$500",
    name: "Rural Innovation Partner",
    impact: "Support comprehensive feasibility studies and strategic planning",
    icon: Handshake,
  },
  {
    amount: "$1,000+",
    name: "Legacy Investor",
    impact: "Enable transformative multi-year regional initiatives",
    icon: Heart,
  },
];

const impactStats = [
  {
    number: "200+",
    label: "Small Businesses Supported",
    icon: Users,
  },
  {
    number: "$3.3M",
    label: "New Capital Investment",
    icon: TrendingUp,
  },
  {
    number: "$200K+",
    label: "Micro-Grants Provided",
    icon: Heart,
  },
  {
    number: "50+",
    label: "New Jobs Created",
    icon: Zap,
  },
];

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section with CTA */}
      <section className="relative w-full py-16 sm:py-24 md:py-32 overflow-hidden">
        <Image
          src="/GroupPicture-Donate-background.jpg"
          alt="Donate background"
          fill
          className="object-cover object-[center_30%]"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Invest in Rural Opportunity
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Every dollar empowers entrepreneurs and creates lasting economic
            growth in Southeast Kansas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              asChild
              className="text-lg px-8 py-6 w-full sm:w-auto"
            >
              <a href={DONATION_URL} target="_blank" rel="noopener noreferrer">
                Donate Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-white/90 drop-shadow">
            <span className="font-semibold">Tax-Deductible</span> • Secure
            Payment via Community Foundation of SEK
          </p>
        </div>
      </section>

      {/* Tax Information */}
      <section className="w-full py-8 bg-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-foreground">
            <span className="font-semibold">
              Your donation is tax-deductible.
            </span>{" "}
            Donations are processed through the Community Foundation of
            Southeast Kansas (501(c)(3)). Rural Community Partners operates with
            HBCAT and CFSEK as fiscal agents.
          </p>
        </div>
      </section>

      {/* Donation Support Levels */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Donation Support Levels
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose a giving level that matches your commitment to rural
              development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {donationLevels.map((level) => {
              const Icon = level.icon;
              return (
                <Card
                  key={level.amount}
                  className="hover:shadow-lg transition-shadow flex flex-col"
                >
                  <CardHeader>
                    <div className="mb-4 p-3 w-fit bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-primary mb-2">
                        {level.amount}
                      </CardTitle>
                      <h3 className="text-lg font-semibold text-foreground">
                        {level.name}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {level.impact}
                    </p>
                    <Button asChild className="w-full">
                      <a
                        href={DONATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Donate {level.amount}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-20 bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join us in building thriving rural communities across Southeast
            Kansas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href={DONATION_URL} target="_blank" rel="noopener noreferrer">
                Donate Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact">Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
