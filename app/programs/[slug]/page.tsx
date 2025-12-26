import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Users,
  Calendar,
  Award,
  MapPin,
  Target,
  TrendingUp,
} from "lucide-react";

// Type definitions
type CouncilMember = {
  name: string;
  business: string;
  icon: string;
  image?: string;
  role?: string;
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

// LHEAT Project Data
const lheatProjects = [
  {
    county: "Barton County",
    issue: "Food insecurity",
    project: "Container Gardening for Food Access",
    activities: "Purchase & distribute container gardening kits",
    reach: "~30 households/facilities",
    outcomes: "Number of kits distributed; participant survey",
    color: "from-green-500 to-emerald-600",
  },
  {
    county: "Bourbon County",
    issue: "Barriers due to lack of vital documents",
    project: "Vital Records Assistance Program",
    activities: "Navigation, fee support, forms, outreach",
    reach: "20–25 residents",
    outcomes: "Documents obtained; participant feedback",
    color: "from-blue-500 to-cyan-600",
  },
  {
    county: "Cowley County",
    issue: "Fragmented resource navigation",
    project: "Referral Navigation & Community Conversations",
    activities: "Community conversations; referral tools; resource packets",
    reach: "150–200 reached; 40–60 participants",
    outcomes: "Participation counts; tool usefulness",
    color: "from-purple-500 to-pink-600",
  },
  {
    county: "Crawford County",
    issue: "Food access needs",
    project: "Arma Holiday Healthy Food Baskets",
    activities:
      "Identify families; coordinate resources for holiday support; assemble and distribute baskets",
    reach: "Families identified via schools/choir",
    outcomes: "Number of families served; qualitative feedback",
    color: "from-orange-500 to-red-600",
  },
  {
    county: "Geary County",
    issue: "Winter clothing & essential needs insecurity",
    project: "Winter Warmth & Essentials Partnership",
    activities: "Winter gear purchase/distribution; partner coordination",
    reach: "~400 individuals",
    outcomes: "Items distributed; partner/recipient feedback",
    color: "from-indigo-500 to-blue-600",
  },
  {
    county: "Labette County",
    issue: "Nutrition skills + community identity & creativity needs",
    project: "Cooking Demonstrations & Library Murals",
    activities: "Cooking classes; incentives; student-designed murals",
    reach: "150–200 participants; full library audience",
    outcomes: "Class surveys; visitor/community engagement",
    color: "from-yellow-500 to-orange-600",
  },
  {
    county: "Mitchell County",
    issue: "ESL inclusion + basic needs (laundry, hygiene, toys, books)",
    project: "CIT Classes, Laundry Love, Toys & Hygiene Kits",
    activities: "ESL classes; Laundry Love; toy distribution; hygiene kits",
    reach: "CIT: ~10/class; Laundry Love: 15–20/event",
    outcomes: "Participation counts; participant feedback",
    color: "from-teal-500 to-green-600",
  },
  {
    county: "Montgomery County",
    issue: "Limited nonprofit digital capacity",
    project: "Social media & Fundraising Capacity-Building",
    activities: "Build social media platforms; training; toolkit creation",
    reach: "Multi-organization reach; ~10k impressions goal",
    outcomes: "Platform activity; toolkit use; engagement metrics",
    color: "from-rose-500 to-pink-600",
  },
  {
    county: "Sedgwick County",
    issue: "High menthol/vaping use among African Americans",
    project: "Commit to Quit Pop-Ups",
    activities: "MLK event; four pop-ups; culturally tailored education",
    reach: "≥500 individuals reached; ≥150 Quit Kits",
    outcomes: "Reach metrics; Quit Kit distribution",
    color: "from-violet-500 to-purple-600",
  },
  {
    county: "Shawnee County",
    issue: "Multiple essential needs across populations",
    project: "Shawnee Community Essentials & Safety Initiative",
    activities:
      "Eight mini-projects (child comfort room, hygiene kits, foster kits, trafficking awareness, blessing box, incontinence supplies, period products, admin support)",
    reach: "~1,000 individuals",
    outcomes: "Counts served per project; partner feedback",
    color: "from-cyan-500 to-blue-600",
  },
  {
    county: "Thomas-Sherman Counties",
    issue: "Winter isolation, mental health strain & basic needs",
    project: "Winter Care Packets & Mental Health Chats",
    activities: "250 care packets; resource lists; mental health chat",
    reach: "~250 individuals",
    outcomes: "Distribution feedback; mental health session insights",
    color: "from-emerald-500 to-teal-600",
  },
  {
    county: "Wyandotte County",
    issue: "Narrative inequity & lack of community representation",
    project: "Stories of Wyandotte",
    activities: "Resident storytelling; videography; photography; equipment",
    reach: "20–25 storytellers",
    outcomes: "Stories produced; engagement metrics",
    color: "from-amber-500 to-yellow-600",
  },
];

// Program details object
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
    title: "Small Business and Entrepreneurs Council",
    hero: "Connect with Fellow Entrepreneurs",
    description:
      "The Small Business and Entrepreneurs Council is a peer-led community of successful rural entrepreneurs who share their knowledge, experiences, and networks to help each other succeed.",
    overview:
      "Our Small Business and Entrepreneurs Council brings together business owners and community leaders for regular meetings, networking opportunities, and collaborative problem-solving. Members benefit from the collective wisdom and experience of their peers, creating a supportive community focused on mutual success.",
    benefits: [
      "Monthly networking meetings and peer discussions",
      "Access to a network of successful entrepreneurs and community leaders",
      "Business development resources and opportunities",
      "Collaborative problem-solving with peers",
      "Recognition and community visibility",
      "Support for community health and economic initiatives",
    ],
    whoItsFor:
      "Established entrepreneurs, business owners, and community leaders interested in peer networking and collaborative growth",
    commitment:
      "Monthly meetings (typically 2 hours), occasional special events and workshops",
    members: [
      {
        name: "Jody Love",
        business: "",
        icon: "👤",
        image: "/Jody-headshot.jpg",
      },
      {
        name: "Melissa Weed",
        business: " ",
        icon: "👤",
        image: "/MelissaWeed-headshot.jpg",
      },
      {
        name: "Brianne Ford",
        business: "",
        icon: "👤",
        image: "/BrianneFord-headshot.jpg",
      },
      {
        name: "Heather Horton",
        business: "",
        icon: "👤",
        image: "/HeatherHorton-headshot.jpg",
      },
      {
        name: "Blanca",
        business: "",
        icon: "👤",
        image: "/Blanca-headshot.jpg",
      },
      {
        name: "Nancy Brown",
        business: "",
        icon: "👤",
        image: "/NacyBrown-headshot.jpg",
      },
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
      { name: "Comming Soon", expertise: "", icon: "" },
      { name: "Comming Soon", expertise: "", icon: "" },

      {
        name: "Comming Soon",
        expertise: "",
        icon: "",
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
        name: "Lauren Coover",
        business: "GrowLabette",
        icon: "👤",
        image: "",
        role: "Local Action Team",
      },
      {
        name: "Dianne Gambill",
        business: "LiveWell Crawford",
        icon: "👤",
        image: "",
        role: "Local Action Team",
      },
      {
        name: "Brad Stroud",
        business: "LiveWell Crawford",
        icon: "👤",
        image: "/BradStroud.jpg",
        role: "Local Action Team",
      },
      {
        name: "Linda Follett",
        business: "Montgomery LHEAT",
        icon: "👤",
        image: "",
        role: "Local Action Team",
      },
      {
        name: "Aura Brillhart",
        business: "Healthy Bourbon County Action Team",
        icon: "👤",
        image: "",
        role: "Local Action Team",
      },
    ],
  },
  "board-members": {
    title: "Board Members",
    hero: "Leadership Guiding Our Mission",
    description:
      "Meet the dedicated board members of Rural Community Partners who provide strategic direction and governance for our organization.",
    overview:
      "Our Board of Directors brings together diverse expertise in rural development, entrepreneurship, and community leadership. They guide our strategic vision and ensure we remain committed to empowering rural communities across Southeast Kansas.",
    benefits: [
      "Strategic governance and organizational oversight",
      "Deep expertise in rural economic development",
      "Commitment to community-driven solutions",
      "Network of regional and statewide connections",
      "Fiduciary responsibility and accountability",
      "Long-term vision for sustainable impact",
    ],
    whoItsFor:
      "Community leaders passionate about rural development and governance",
    commitment:
      "Quarterly board meetings, committee participation, and strategic planning sessions",
    members: [
      {
        name: "Jody Love",
        business: "Board Member",
        icon: "👤",
        image: "/Jody-headshot.jpg",
      },
      {
        name: "Darrell Pulliam",
        business: "Board Member",
        icon: "👤",
        image: "/placeholder-darrell.jpg",
      },
      {
        name: "Christina Pacheco",
        business: "Board Member",
        icon: "👤",
        image: "/placeholder-christina.jpg",
      },
      {
        name: "Randy Robinson",
        business: "Board Member",
        icon: "👤",
        image: "/placeholder-randy.jpg",
      },
      {
        name: "Quinton Holmes",
        business: "Board Member",
        icon: "👤",
        image: "/placeholder-quinton.jpg",
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
      <section className="w-full py-12 sm:py-16 md:py-20 bg-background">
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

      {/* Members/Participants - 3 PER ROW */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              {slug === "entrepreneur-council"
                ? "Meet Our Council Members"
                : slug === "mentorship"
                ? "Connect with Our Mentors"
                : slug === "local-action-teams"
                ? "Active Local Action Teams"
                : slug === "board-members"
                ? "Meet Our Board"
                : "Team Members"}
            </h3>
            {slug === "entrepreneur-council" && (
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dedicated community leaders driving economic development and
                entrepreneurship across Southeast Kansas
              </p>
            )}
          </div>

          {/* 3 columns grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {program.members.map((member, idx) => (
              <Card
                key={idx}
                className="text-center overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2"
              >
                <CardContent className="pt-6 pb-5 px-4">
                  <div className="mb-4 flex justify-center">
                    {"image" in member && member.image ? (
                      <div className="relative group">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 animate-pulse" />

                        <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-br from-primary via-accent to-secondary">
                          <div className="w-full h-full rounded-full p-1 bg-background overflow-hidden">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover ring-4 ring-background shadow-xl group-hover:scale-105 transition-transform duration-300"
                              style={{
                                objectPosition: "center 20%",
                              }}
                            />
                          </div>
                        </div>

                        {/* DYNAMIC BADGE */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                          {slug === "entrepreneur-council"
                            ? "Council Member"
                            : slug === "mentorship"
                            ? "Mentor"
                            : slug === "local-action-teams"
                            ? "Team Leader"
                            : slug === "board-members"
                            ? "Board Member"
                            : "Member"}
                        </div>
                      </div>
                    ) : (
                      <div className="text-5xl p-4 bg-primary/10 rounded-full">
                        {member.icon}
                      </div>
                    )}
                  </div>

                  <div className="relative mb-2">
                    <h4 className="font-bold text-lg text-foreground">
                      {member.name}
                    </h4>
                    <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-1.5 rounded-full" />
                  </div>

                  <p className="text-sm text-muted-foreground font-medium leading-tight">
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

      {/* ✅ LHEAT INNOVATION PROJECTS - FOR LOCAL ACTION TEAMS */}
      {slug === "local-action-teams" && (
        <section className="w-full py-12 sm:py-16 md:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-foreground mb-4">
                LHEAT Innovation Projects
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                Explore the impact of Local Health Equity Action Teams (LHEATs)
                across Kansas. These 12 community-led projects reached an
                estimated{" "}
                <span className="font-bold text-primary">3,000+ residents</span>{" "}
                through innovative solutions addressing food security, health
                access, and community well-being.
              </p>
            </div>

            {/* Key Highlights Stats*/}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="pt-8 pb-6">
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                    12
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-1">
                    Local Action Teams
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Across Kansas Counties
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 bg-gradient-to-br from-secondary/5 to-primary/5">
                <CardContent className="pt-8 pb-6">
                  <div className="text-6xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-3">
                    3,000+
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-1">
                    Residents Reached
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Through Innovation Projects
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 bg-gradient-to-br from-accent/5 to-secondary/5 sm:col-span-2 lg:col-span-1">
                <CardContent className="pt-8 pb-6">
                  <div className="text-6xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-3">
                    $2,500
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-1">
                    Innovation Funds
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Per LHEAT Team
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Project Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {lheatProjects.map((project, idx) => (
                <Card
                  key={idx}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 overflow-hidden"
                >
                  {/* County Header with Gradient */}
                  <div
                    className={`bg-gradient-to-r ${project.color} p-4 text-white`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-5 w-5" />
                      <h4 className="font-bold text-lg">{project.county}</h4>
                    </div>
                    <p className="text-sm opacity-90 italic">
                      "{project.issue}"
                    </p>
                  </div>

                  <CardContent className="pt-4 pb-5">
                    {/* Project Name */}
                    <div className="mb-4">
                      <div className="flex items-start gap-2 mb-2">
                        <Target className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <h5 className="font-bold text-foreground text-sm leading-tight">
                          {project.project}
                        </h5>
                      </div>
                    </div>

                    {/* Activities */}
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        Key Activities
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        {project.activities}
                      </p>
                    </div>

                    {/* Reach */}
                    <div className="mb-3 p-2 bg-primary/5 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <p className="text-xs font-semibold text-primary uppercase">
                          Estimated Reach
                        </p>
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        {project.reach}
                      </p>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        Outcomes & Metrics
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {project.outcomes}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* PDF Download Option */}
            <div className="bg-primary/5 rounded-lg border-2 border-primary/20 p-6 text-center">
              <div className="mb-4">
                <div className="text-5xl mb-3">📊</div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Download Complete Data
                </h4>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Get the full LHEAT Innovation Projects report with detailed
                  information on all 12 teams and their community impact.
                </p>
              </div>

              <Button size="lg" asChild className="gap-2">
                <a
                  href="/LHEAT-Innovation-Report-2024.pdf"
                  download="LHEAT-Innovation-Report-2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Full Report (PDF)
                </a>
              </Button>

              <p className="text-xs text-muted-foreground mt-3">
                PDF Format • Updated December 2024
              </p>
            </div>

            {/* Additional Context */}
            <div className="mt-10 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              <h4 className="font-bold text-foreground mb-4 text-2xl">
                About LHEAT Innovation Funds
              </h4>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The $2,500 PHIG Innovation Funds empowered 12 Local Health
                  Equity Action Teams (LHEATs) across Kansas to design and
                  implement community-led projects that addressed locally
                  defined needs while adhering to funding restrictions,
                  including prohibitions on direct food purchases.
                </p>
                <p>
                  Even within these parameters, LHEATs developed creative,
                  high-impact strategies to strengthen food access, basic needs
                  support, social connection, navigation of services, and
                  community identity. Several teams advanced nutrition and food
                  security indirectly by distributing gardening supplies,
                  offering cooking demonstrations, coordinating community-led
                  food basket initiatives, and enhancing access to resource
                  information.
                </p>
                <p className="font-semibold text-foreground">
                  These projects demonstrate how flexible, locally controlled
                  innovation funds can catalyze practical solutions, deepen
                  community partnerships, and advance health equity in ways that
                  reflect community priorities and values.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-10 text-center">
            {slug === "entrepreneur-council"
              ? "Why Join the Council?"
              : slug === "mentorship"
              ? "Why Join Our Program?"
              : slug === "local-action-teams"
              ? "Why Join a Team?"
              : slug === "board-members"
              ? "Board Responsibilities"
              : "Program Benefits"}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {program.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <Award className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <p className="font-medium text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-3 text-center">
            Ready to Join?
          </h3>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            {slug === "entrepreneur-council"
              ? "Becoming a council member is easy. Follow these simple steps to get started."
              : slug === "mentorship"
              ? "Getting matched with a mentor is simple. Here's how to begin your journey."
              : slug === "local-action-teams"
              ? "Starting a Local Action Team in your community is straightforward. Here's the process."
              : slug === "board-members"
              ? "Joining our Board of Directors involves a nomination and selection process. Here's how it works."
              : "Getting involved is easy. Follow these simple steps."}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                step: 1,
                title: "Express Interest",
                desc: "Reach out via our contact form or email to express your interest in joining",
              },
              {
                step: 2,
                title: "Initial Conversation",
                desc: "We'll schedule a casual chat to discuss your goals and experience",
              },
              {
                step: 3,
                title: "Welcome Onboarding",
                desc: "Learn about program structure, expectations, and how to contribute",
              },
              {
                step: 4,
                title: "Engage & Collaborate",
                desc: "Start networking, sharing insights, and growing with fellow entrepreneurs",
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-lg mb-3 shadow-md">
                    {item.step}
                  </div>
                  <CardTitle className="text-foreground text-lg">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
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
