import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";

const donationLevels = [
  {
    amount: "$25",
    name: "Supporter",
    description: "Help launch a new entrepreneur",
    impact:
      "Covers the cost of essential business tools and resources for one startup",
    icon: Zap,
  },
  {
    amount: "$100",
    name: "Champion",
    description: "Support mentorship connections",
    impact: "Enables 5 hours of expert mentorship for an aspiring entrepreneur",
    icon: Users,
  },
  {
    amount: "$500",
    name: "Catalyst",
    description: "Fund feasibility research",
    impact:
      "Funds a complete feasibility study for a community project or business initiative",
    icon: TrendingUp,
  },
  {
    amount: "$2,500+",
    name: "Partner",
    description: "Transform a region",
    impact:
      "Supports comprehensive regional development and multi-year initiatives",
    icon: Heart,
  },
];

const impactStories = [
  {
    title: "Sarah's Bakery Success",
    description:
      "With mentorship and feasibility support, Sarah launched her artisan bakery and now employs 5 people in her rural community.",
    result: "$150K+ annual revenue",
  },
  {
    title: "Agricultural Tech Innovation",
    description:
      "A farmer used our technical assistance to implement sustainable farming practices, increasing yields while reducing costs.",
    result: "40% cost reduction",
  },
  {
    title: "Community Revitalization",
    description:
      "A small town used our community development services to attract 3 new businesses and retain residents.",
    result: "50 new jobs created",
  },
];

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Support Rural Opportunity
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Your donation directly empowers entrepreneurs, strengthens
            communities, and creates lasting economic opportunity in Southeast
            Kansas.
          </p>
        </div>
      </section>

      {/* Tax Information */}
      <section className="w-full py-8 bg-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-foreground">
            <span className="font-semibold">
              Rural Community Partners is a 501(c)(3) nonprofit.
            </span>{" "}
            Your donation is tax-deductible to the fullest extent allowed by
            law.
          </p>
        </div>
      </section>

      {/* Donation Levels */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ways to Give
            </h2>
            <p className="text-lg text-muted-foreground">
              Every contribution, no matter the size, makes a real difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                      {level.description}
                    </p>
                    <div className="bg-primary/5 p-4 rounded-lg mb-4">
                      <p className="text-sm font-medium text-foreground">
                        {level.impact}
                      </p>
                    </div>
                    <Button asChild className="w-full">
                      <a href="#donate-form">{`Donate ${level.amount}`}</a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your Impact in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              See how donations are transforming lives and communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {impactStories.map((story, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-foreground">
                    {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{story.description}</p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-primary">
                      {story.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section
        id="donate-form"
        className="w-full py-16 sm:py-20 md:py-24 bg-background"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Make Your Donation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose how you'd like to support Rural Community Partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* One-Time Donation */}
            <Card>
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-foreground">
                  One-Time Donation
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  Make an immediate impact with a single contribution. You can
                  choose any amount.
                </p>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    min="1"
                  />
                </div>
                <Button className="w-full">Donate Now</Button>
              </CardContent>
            </Card>

            {/* Monthly Giving */}
            <Card>
              <CardHeader className="bg-secondary/5">
                <CardTitle className="text-foreground">
                  Monthly Giving
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  Make a consistent impact with a monthly recurring donation.
                  Cancel anytime.
                </p>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Monthly Amount</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    min="1"
                  />
                </div>
                <Button variant="secondary" className="w-full">
                  Start Monthly Giving
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Donation Processing Note */}
          <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">Note:</span> Donations are
              currently processed through our secure partner portal. You'll be
              redirected to complete your donation securely. We accept all major
              credit cards and can arrange alternative payment methods upon
              request.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is my donation tax-deductible?",
                a: "Yes! Rural Community Partners is a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible to the fullest extent allowed by law. We'll send you a receipt for your records.",
              },
              {
                q: "How is my donation used?",
                a: "We allocate funds across program areas: mentorship support, feasibility studies, technical assistance, and community development initiatives. Check our annual impact report for detailed breakdowns.",
              },
              {
                q: "Can I make a donation in memory or honor of someone?",
                a: "We'd be honored to recognize your gift. Please contact us at [email] to arrange a memorial or honorific donation.",
              },
              {
                q: "Do you accept donations of stock or property?",
                a: "Yes, we accept a variety of donation types including stock transfers and in-kind contributions. Please contact our team to discuss options that work best for you.",
              },
              {
                q: "Can I suggest how my donation is used?",
                a: "We welcome donor input! Many of our donors recommend specific programs or initiatives. We'll discuss how your donation can best support your interests.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-background p-6 rounded-lg border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Have Questions About Giving?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Our team is here to help. Contact us to discuss your donation or
            explore partnership opportunities.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
