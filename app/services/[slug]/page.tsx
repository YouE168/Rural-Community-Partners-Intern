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
      "We believe in the power of entrepreneurship to transform communities. Our comprehensive support helps aspiring and existing entrepreneurs navigate the journey from idea to thriving business.",
    overview:
      "Whether you're in the ideation phase or looking to scale an existing business, our entrepreneurship support provides the guidance, resources, and mentorship you need to succeed.",
    highlights: [
      "Business Plan Development",
      "Mentorship Matching",
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
        title: "Mentorship Matching",
        description:
          "Connect with experienced mentors who have succeeded in your industry.",
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
  "technical-assistance": {
    title: "Technical Assistance",
    hero: "Expert Guidance for Implementation",
    description:
      "Hands-on support to help you successfully implement projects and overcome challenges.",
    overview:
      "Our technical assistance provides the specialized expertise you need to navigate complex projects and achieve your operational goals.",
    highlights: [
      "Strategic Planning",
      "Project Management",
      "Operations Improvement",
      "Technology Integration",
      "Custom Consulting",
    ],
    process: [
      {
        step: 1,
        title: "Needs Assessment",
        description:
          "Identify specific challenges and opportunities for improvement.",
      },
      {
        step: 2,
        title: "Expert Engagement",
        description: "Connect with specialists in your area of need.",
      },
      {
        step: 3,
        title: "Implementation Support",
        description: "Hands-on guidance through planning and execution phases.",
      },
      {
        step: 4,
        title: "Sustainability Planning",
        description:
          "Build capacity to maintain improvements and continue progress.",
      },
    ],
  },
  "community-development": {
    title: "Community Development",
    hero: "Build Stronger Communities",
    description:
      "Strategic initiatives to build thriving local economies and vibrant communities.",
    overview:
      "We work with communities to develop strategic plans, build partnerships, and create sustainable economic development initiatives.",
    highlights: [
      "Community Planning",
      "Economic Development",
      "Partnership Building",
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
  },
  regional: {
    title: "Regional Initiatives",
    hero: "Collaborate for Regional Growth",
    description:
      "Southeast Kansas-wide programs and partnerships for collective economic growth.",
    overview:
      "By connecting communities and organizations across Southeast Kansas, we amplify impact and create opportunities that benefit the entire region.",
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

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceDetails[slug as keyof typeof serviceDetails];

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
      <section className="w-full py-16 sm:py-20 md:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            What's Included
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {service.highlights.map((highlight, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-6">
                  <p className="font-medium text-foreground">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
