import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Target, Heart, Zap } from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We believe in the power of communities to shape their own futures through collaboration and support.",
  },
  {
    icon: Users,
    title: "Inclusive Growth",
    description:
      "We ensure all entrepreneurs and community members have access to resources and opportunities.",
  },
  {
    icon: Target,
    title: "Strategic Support",
    description:
      "We provide targeted, data-driven support aligned with real community needs and aspirations.",
  },
  {
    icon: Zap,
    title: "Lasting Impact",
    description:
      "We focus on sustainable solutions that create long-term opportunity and prosperity.",
  },
];

const team = [
  { name: "Director", role: "Executive Leadership" },
  { name: "Program Manager", role: "Community Programs" },
  { name: "Regional Coordinator", role: "Southeast Kansas Operations" },
  { name: "Advisor", role: "Strategic Guidance" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-balance drop-shadow-lg">
            About Rural Community Partners
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
            Empowering rural Southeast Kansas through entrepreneurship,
            collaboration, and strategic community development.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Rural Community Partners supports entrepreneurs, communities,
                and organizations across Southeast Kansas by providing
                mentorship, resources, and strategic guidance. We help people
                find opportunity, connect with expertise, and engage in
                meaningful, locally driven economic development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe thriving rural communities are built on strong local
                businesses, collaborative partnerships, and equitable access to
                quality resources and expertise.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We envision a Southeast Kansas where rural entrepreneurs have
                access to the same resources, networks, and opportunities as
                their urban counterparts. Where communities prosper through
                diverse local economies and strong collaborative partnerships.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A region where economic opportunity is broadly available, where
                people choose to stay and build their futures, and where rural
                communities are recognized as engines of innovation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              What guides our work every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="hover:shadow-lg transition-shadow border-primary/20"
                >
                  <CardHeader>
                    <div className="mb-4 p-3 w-fit bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-foreground">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            What We Do
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Support Entrepreneurs",
                description:
                  "We help aspiring and existing business owners develop plans, find mentors, access resources, and grow thriving enterprises.",
                items: [
                  "Business planning assistance",
                  "Mentorship matching",
                  "Financing guidance",
                  "Training and workshops",
                ],
              },
              {
                title: "Guide Communities",
                description:
                  "We partner with local organizations and municipalities to develop strategic initiatives that strengthen local economies.",
                items: [
                  "Economic development strategy",
                  "Community planning",
                  "Partnership development",
                  "Project implementation",
                ],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-lg border-2 ${
                  idx === 0
                    ? "bg-primary/5 border-primary/30"
                    : idx === 1
                    ? "bg-secondary/5 border-secondary/30"
                    : "bg-accent/5 border-accent/30"
                }`}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {item.items.map((subitem) => (
                    <li key={subitem} className="flex items-start gap-3">
                      <span
                        className={`text-lg font-bold mt-1 ${
                          idx === 0
                            ? "text-primary"
                            : idx === 1
                            ? "text-secondary"
                            : "text-accent"
                        }`}
                      >
                        ✓
                      </span>
                      <span className="text-muted-foreground">{subitem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="w-full py-14 sm:py-18 md:py-22 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We take a comprehensive, collaborative approach focused on
            understanding your unique situation and providing tailored support.
            We combine expert guidance, access to networks, data-driven
            analysis, and accountability to create lasting opportunity and
            impact in rural Southeast Kansas.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Listen",
                desc: "We start by understanding your goals, challenges, and aspirations.",
              },
              {
                title: "Connect",
                desc: "We link you with mentors, resources, partners, and expertise you need.",
              },
              {
                title: "Support",
                desc: "We provide ongoing guidance and accountability to help you succeed.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-lg border-2 border-primary/20 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8 drop-shadow-md">
            Explore our services and discover how Rural Community Partners can
            support your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-black hover:bg-white/20 bg-white/10"
            >
              <Link href="/get-support">Get Support</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
