import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";

const serviceDetails = {
  entrepreneurship: {
    title: "Entrepreneurship Support",
    hero: "Start and Grow Your Business",
    description:
      "We believe in the power of entrepreneurship to transform communities. Our comprehensive support, including partnerships with KU School of Business, helps aspiring and existing entrepreneurs navigate the journey from idea to thriving business.",
    overview:
      "Whether you're in the ideation phase or looking to scale an existing business, our entrepreneurship support provides the guidance, resources, and mentorship you need to succeed. Through our partnerships with KU School of Business programs, you gain access to expert consulting and specialized support.",
    highlights: [
      "Market Validation",
      "Mentorship Matching & SEK Catalyst: Empowered by KU",
      "Jayhawk Consulting",
      "Redtire Consulting",
      "Financing Guidance",
      "Training & Skills Development",
      "Ongoing Accountability Support",
    ],
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We meet with you to understand your business idea, goals, and challenges.",
      },
      {
        step: 2,
        title: "Customized Support Plan",
        description:
          "Based on your needs, we develop a tailored roadmap for success.",
      },
      {
        step: 3,
        title: "Mentorship & KU Partnership Matching",
        description:
          "Connect with experienced mentors and KU School of Business programs aligned with your needs.",
      },
      {
        step: 4,
        title: "Implementation & Support",
        description:
          "We provide ongoing guidance and accountability as you execute your plan.",
      },
    ],
  },
  feasibility: {
    title: "Feasibility Studies & Cost-Benefit Analysis",
    hero: "Make Informed Decisions",
    description:
      "Data-driven insights for projects, business initiatives, and community development.",
    overview:
      "We provide rigorous research and analysis to help you evaluate the viability and impact of your initiatives before making major investments.",
    highlights: [
      "Market Analysis",
      "Financial Projections",
      "Risk Assessment",
      "Impact Evaluation",
      "Custom Research",
    ],
    process: [
      {
        step: 1,
        title: "Scope Definition",
        description: "Clearly define the project or initiative to be studied.",
      },
      {
        step: 2,
        title: "Research & Data Collection",
        description:
          "Comprehensive research including market analysis and data gathering.",
      },
      {
        step: 3,
        title: "Analysis & Modeling",
        description:
          "Financial projections and feasibility assessment with scenario planning.",
      },
      {
        step: 4,
        title: "Report & Recommendations",
        description:
          "Detailed findings with actionable recommendations and next steps.",
      },
    ],
  },
  "community-investment": {
    title: "Community Investment",
    hero: "Investing in Southeast Kansas Communities",
    description:
      "RCP does not 'assist' communities. RCP invests in them. We invest in people, organizations, and coalitions across Southeast Kansas by providing financial resources, hands-on technical support, and dedicated human capacity.",
    overview:
      "Our approach goes beyond traditional technical assistance. We walk alongside community coalitions and nonprofits, contributing time, talent, and treasure to strengthen local leadership, build sustainable systems, and turn community vision into action. This investment may include planning and facilitation, grant writing and fiscal management, staffing support, mentorship, capital access, data and evaluation, and long-term partnership through implementation.",
    highlights: [
      "Strategic Planning & Visioning",
      "Grant Development & Funding Strategy",
      "Fiscal Administration & Compliance",
      "Capacity Building & Organizational Development",
      "Facilitation & Coalition Coordination",
      "Staffing & Human Capacity Support",
      "Data, Evaluation & Learning",
      "Grant Funding & Pass-Through Dollars",
      "Fiscal Sponsorship",
    ],
    process: [
      {
        step: 1,
        title: "Financial Investment",
        description:
          "Grant funding and pass-through dollars, micro-grants and program support, fiscal sponsorship and administration.",
      },
      {
        step: 2,
        title: "Technical Investment",
        description:
          "Planning, facilitation, and strategy, grant development and compliance, program design, data, and evaluation.",
      },
      {
        step: 3,
        title: "Human Investment",
        description:
          "Staff time embedded in communities, mentorship and leadership development, coalition coordination and relationship-building.",
      },
      {
        step: 4,
        title: "Long-term Partnership",
        description:
          "We walk alongside you through implementation, providing ongoing support and accountability.",
      },
    ],
  },
  "community-development": {
    title: "Community Development",
    hero: "Build Stronger Communities",
    description:
      "Strategic initiatives to build thriving local economies and vibrant communities.",
    overview:
      "We work with communities to develop strategic plans, build partnerships, and create sustainable economic development initiatives. Our impact includes securing CDBG grants for playgrounds and trails in small communities, and supporting major projects like the Washington School in Pittsburg.",
    highlights: [
      "Community Planning",
      "Economic Development",
      "Partnership Building",
      "CDBG Grant Support",
      "Asset Assessment",
      "Sustainability Projects",
    ],
    process: [
      {
        step: 1,
        title: "Community Visioning",
        description:
          "Engage stakeholders in defining the community's vision and goals.",
      },
      {
        step: 2,
        title: "Strategic Planning",
        description:
          "Develop comprehensive plans aligned with community assets and needs.",
      },
      {
        step: 3,
        title: "Partnership Development",
        description:
          "Build networks and collaborations to support initiatives.",
      },
      {
        step: 4,
        title: "Implementation & Evaluation",
        description:
          "Execute projects and measure progress toward community goals.",
      },
    ],
    impactStories: [
      "Secured CDBG grants for playground development in small communities",
      "Supported trail infrastructure projects across the region",
      "Helped fund the Washington School project in Pittsburg",
    ],
  },
  regional: {
    title: "Regional Initiatives",
    hero: "Collaborate for Regional Growth",
    description:
      "Southeast Kansas-wide programs and partnerships for collective economic growth.",
    overview:
      "By connecting communities and organizations across Southeast Kansas, we amplify impact and create opportunities that benefit the entire region through a collaborative, community-driven approach.",
    highlights: [
      "Regional Strategy",
      "Multi-Community Projects",
      "Skill Development Programs",
      "Networking & Partnerships",
      "Resource Sharing",
    ],
    process: [
      {
        step: 1,
        title: "Regional Assessment",
        description: "Evaluate regional assets, needs, and opportunities.",
      },
      {
        step: 2,
        title: "Multi-Community Engagement",
        description:
          "Bring together stakeholders from across Southeast Kansas.",
      },
      {
        step: 3,
        title: "Collaborative Planning",
        description: "Develop strategies that benefit multiple communities.",
      },
      {
        step: 4,
        title: "Coordinated Implementation",
        description: "Support execution of cross-community initiatives.",
      },
    ],
  },
};

type ServiceSlug = keyof typeof serviceDetails;

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug: slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as ServiceSlug;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            {service.hero}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {service.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {service.overview}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="w-full py-12 sm:py-16 md:py-18 bg-primary/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            What's Included
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary"></div>
                <p className="font-medium text-foreground text-left">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories - Community Development Only */}
      {slug === "community-development" && "impactStories" in service && (
        <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Impact Stories
            </h3>
            <div className="space-y-4">
              {service.impactStories.map((story, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <p className="text-lg text-muted-foreground">{story}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Our Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((item) => (
              <Card key={item.step}>
                <CardHeader>
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                    {item.step}
                  </div>
                  <CardTitle className="text-foreground">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact us today to discuss how we can support your goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href={`/get-support?service=${slug}`}>Request Support</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
