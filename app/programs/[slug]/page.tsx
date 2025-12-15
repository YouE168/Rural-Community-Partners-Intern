import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Users, Calendar, Award } from "lucide-react";

// Type definitions
type CouncilMember = {
  name: string;
  business: string;
  icon: string;
};

type Mentor = {
  name: string;
  expertise: string;
  icon: string;
};

type ActionTeam = {
  name: string;
  community: string;
  icon: string;
};

type ProgramMember = CouncilMember | Mentor | ActionTeam;

// Program details object - ONLY DECLARED ONCE
const programDetails: {
  [key: string]: {
    title: string;
    hero: string;
    description: string;
    overview: string;
    benefits: string[];
    whoItsFor: string;
    commitment: string;
    members: ProgramMember[];
  };
} = {
  "entrepreneur-council": {
    title: "Entrepreneur Council",
    hero: "Connect with Fellow Entrepreneurs",
    description:
      "The Entrepreneur Council is a peer-led community of successful rural entrepreneurs who share their knowledge, experiences, and networks to help each other succeed.",
    overview:
      "Our Entrepreneur Council brings together business owners and founders for regular meetings, networking opportunities, and collaborative problem-solving. Members benefit from the collective wisdom and experience of their peers, creating a supportive community focused on mutual success.",
    benefits: [
      "Monthly networking meetings and peer discussions",
      "Access to a network of successful entrepreneurs",
      "Business development resources and opportunities",
      "Collaborative problem-solving with peers",
      "Recognition and community visibility",
      "Mentorship opportunities for newer entrepreneurs",
    ],
    whoItsFor:
      "Established entrepreneurs, business owners, and business founders interested in peer networking and collaborative growth",
    commitment:
      "Monthly meetings (typically 2 hours), occasional special events and workshops",
    members: [
      {
        name: "James Mitchell",
        business: "Mitchell's Hardware & Supply",
        icon: "🏪",
      },
      { name: "Laura Chen", business: "Prairie Tech Solutions", icon: "💻" },
      {
        name: "Robert Thompson",
        business: "Thompson Grain & Feed",
        icon: "🌾",
      },
      { name: "Jessica Rodriguez", business: "Small Bites Bakery", icon: "🍰" },
    ],
  },
  mentorship: {
    title: "Mentorship Program",
    hero: "Get Guidance from Industry Experts",
    description:
      "Our Mentorship Program matches aspiring entrepreneurs with experienced business leaders who provide personalized guidance, accountability, and strategic support.",
    overview:
      "We carefully match mentees with mentors based on industry expertise, business stage, and specific development needs. Mentors bring decades of real-world experience while mentees bring fresh perspectives and entrepreneurial energy. Together, they create powerful partnerships that accelerate success.",
    benefits: [
      "One-on-one personalized mentoring",
      "Industry-specific business guidance",
      "Strategic planning and accountability",
      "Network access and introductions",
      "Business skill development",
      "Ongoing support and encouragement",
    ],
    whoItsFor:
      "Entrepreneurs at any business stage seeking professional guidance and accountability",
    commitment:
      "Typically 1-2 hour monthly meetings with flexibility based on mentor/mentee availability",
    members: [
      { name: "Patricia Lee", expertise: "Small Business Finance", icon: "💼" },
      { name: "David Anderson", expertise: "Marketing & Branding", icon: "📊" },
      { name: "Maria Santos", expertise: "E-Commerce Operations", icon: "📦" },
      {
        name: "Thomas Johnson",
        expertise: "Agricultural Innovation",
        icon: "🚜",
      },
    ],
  },
  "local-action-teams": {
    title: "Local Action Teams",
    hero: "Build Stronger Communities Together",
    description:
      "Local Action Teams are community-based groups driven by local leaders to create economic development initiatives that strengthen their communities.",
    overview:
      "Each Local Action Team is tailored to their specific community's assets, needs, and aspirations. Teams work collaboratively on projects ranging from small business retention and growth to infrastructure improvements and quality-of-life enhancements.",
    benefits: [
      "Community-tailored economic development",
      "Collaborative project leadership",
      "Technical support and expertise",
      "Resource connection and funding guidance",
      "Professional facilitation and coaching",
      "Regional networking and cross-community learning",
    ],
    whoItsFor:
      "Communities, municipalities, and local organizations seeking coordinated economic development",
    commitment:
      "Regular team meetings, project work, and collaboration with RCP staff",
    members: [
      {
        name: "Emporia Community Development",
        community: "Emporia, KS",
        icon: "🏛️",
      },
      {
        name: "Marion County Economic Alliance",
        community: "Marion County, KS",
        icon: "🤝",
      },
      {
        name: "Hillsboro Business Alliance",
        community: "Hillsboro, KS",
        icon: "🌟",
      },
      {
        name: "Cottonwood Valley Partnership",
        community: "Butler County, KS",
        icon: "🌳",
      },
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(programDetails).map((slug) => ({
    slug,
  }));
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const program = programDetails[slug as keyof typeof programDetails];

  if (!program) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            {program.hero}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            {program.description}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {program.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {program.overview}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Time Commitment
              </h3>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{program.commitment}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Who It's For
              </h3>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{program.whoItsFor}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Program Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {program.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border"
              >
                <Award className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <p className="font-medium text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members/Participants */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            {slug === "entrepreneur-council"
              ? "Council Members"
              : slug === "mentorship"
              ? "Meet Our Mentors"
              : "Local Action Teams"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {program.members.map((member, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{member.icon}</div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {"business" in member
                      ? member.business
                      : "expertise" in member
                      ? member.expertise
                      : "community" in member
                      ? member.community
                      : ""}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            How to Join
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Express Interest",
                desc: "Contact us or fill out an interest form",
              },
              {
                step: 2,
                title: "Initial Meeting",
                desc: "Discuss your goals and how you can contribute",
              },
              {
                step: 3,
                title: "Onboarding",
                desc: "Learn about program structure and expectations",
              },
              {
                step: 4,
                title: "Active Participation",
                desc: "Engage with your community and mentors",
              },
            ].map((item) => (
              <Card key={item.step}>
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                    {item.step}
                  </div>
                  <CardTitle className="text-foreground">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join a community of entrepreneurs, mentors, and community leaders
            transforming rural Southeast Kansas.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/get-support?service=mentorship">Get Involved</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
