"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TrendingUp, Users, Building2, Award, ArrowRight } from "lucide-react";

const impactStats = [
  { icon: Users, label: "Entrepreneurs Supported", value: "150+" },
  { icon: Building2, label: "Communities Served", value: "25+" },
  { icon: TrendingUp, label: "Economic Impact", value: "$2.3M" },
  { icon: Award, label: "Active Mentors", value: "50+" },
];

const successStories = [
  {
    id: 1,
    title: "Sarah's Artisan Bakery Success",
    excerpt: "From home-based idea to thriving business with 5 employees",
    fullStory:
      "Sarah had a passion for baking but no business experience. Through our mentorship program and technical assistance, she developed a comprehensive business plan, secured financing, and launched her artisan bakery. Today, her business generates over $150,000 in annual revenue and employs 5 local residents.",
    impact: "$150K+ annual revenue",
    region: "Lyon County",
    image:
      "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=500&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Agricultural Innovation Adoption",
    excerpt: "Sustainable farming increases yields while reducing costs",
    fullStory:
      "A family farm was struggling with rising input costs. Our technical assistance helped them implement sustainable farming practices and precision agriculture technology. Within two years, they reduced input costs by 40% while increasing yields, making their operation more profitable and environmentally sustainable.",
    impact: "40% cost reduction",
    region: "Butler County",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Community Revitalization Project",
    excerpt: "Small town attracts new businesses and retains residents",
    fullStory:
      "A rural town used our community development services to create a comprehensive economic development strategy. Through coordinated effort, they attracted 3 new businesses, supported the expansion of 2 existing companies, and created 50 new jobs. The community is now experiencing renewed growth and resident confidence.",
    impact: "50 new jobs created",
    region: "Marion County",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  },
];

export default function ImpactPage() {
  const [selectedStory, setSelectedStory] = useState<
    (typeof successStories)[0] | null
  >(null);
  const [substackPosts, setSubstackPosts] = useState<any[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    // Fetch Substack feed - Replace with your actual Substack integration
    const fetchSubstackPosts = async () => {
      try {
        // Using the Substack RSS feed
        const feedUrl =
          "https://ruralcommunitypartners.substack.com/api/v1/posts?limit=6";
        const response = await fetch(feedUrl);
        if (response.ok) {
          const data = await response.json();
          setSubstackPosts(data.posts || []);
        }
      } catch (error) {
        console.log("[v0] Could not load Substack posts - using mock data");
        // Mock data for demonstration
        setSubstackPosts([
          {
            id: 1,
            title: "Supporting Rural Entrepreneurs: Key Insights from 2024",
            subtitle: "Lessons learned from working with 150+ entrepreneurs",
            url: "https://ruralcommunitypartners.substack.com",
            post_date: "2024-12-01",
          },
          {
            id: 2,
            title: "The Future of Rural Economic Development",
            subtitle: "Trends and opportunities for Southeast Kansas",
            url: "https://ruralcommunitypartners.substack.com",
            post_date: "2024-11-24",
          },
          {
            id: 3,
            title: "Mentor Spotlight: Building Businesses in Rural Areas",
            subtitle: "Meet one of our experienced mentors",
            url: "https://ruralcommunitypartners.substack.com",
            post_date: "2024-11-17",
          },
        ]);
      } finally {
        setLoadingPosts(false);
      }
    };

    fetchSubstackPosts();
  }, []);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Our Impact & Stories
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories of entrepreneurs, communities, and economic
            transformation in Southeast Kansas
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {impactStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card key={idx} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories - Split Screen Layout */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Real transformation happening across Southeast Kansas
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, idx) => (
              <div
                key={story.id}
                className={`rounded-2xl overflow-hidden ${
                  idx % 3 === 0
                    ? "bg-gradient-to-br from-[#7BC04B]/90 to-[#659B3C]/90"
                    : idx % 3 === 1
                    ? "bg-gradient-to-br from-[#FF9500]/90 to-[#E68600]/90"
                    : "bg-gradient-to-br from-[#0EA5E9]/90 to-[#0C8FCC]/90"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                  {/* Content - Left Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                          {story.region}
                        </span>
                        <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                          {story.title}
                        </h3>
                        <p className="text-lg lg:text-xl text-white/95 leading-relaxed">
                          {story.fullStory}
                        </p>
                      </div>

                      {/* Impact stat */}
                      <div className="pt-6 border-t border-white/30">
                        <p className="text-sm text-white/80 mb-1">Impact</p>
                        <p className="text-2xl font-bold text-white">
                          {story.impact}
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <Button
                          size="lg"
                          className="bg-white text-gray-900 hover:bg-white/90 font-semibold"
                          onClick={() => setSelectedStory(story)}
                        >
                          Read Full Story
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-2 border-white text-white hover:bg-white/10 font-semibold bg-transparent"
                          asChild
                        >
                          <Link href="/get-support">Get Similar Support</Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Image - Right Side */}
                  <div className="relative min-h-[400px] md:min-h-full">
                    <img
                      src={
                        story.image || "/placeholder.svg?height=600&width=600"
                      }
                      alt={story.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Detail Modal/View */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-background rounded-xl max-w-4xl w-full my-8">
            <div className="relative">
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="h-96 overflow-hidden rounded-t-xl">
                <img
                  src={selectedStory.image || "/placeholder.svg"}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-8">
              <div className="flex gap-3 mb-4">
                <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {selectedStory.region}
                </span>
                <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  {selectedStory.impact}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                {selectedStory.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {selectedStory.fullStory}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Substack Blog Feed */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Latest Updates & Insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Stories, tips, and insights from our team and community
            </p>
          </div>

          {loadingPosts ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading latest posts...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {substackPosts.slice(0, 3).map((post: any) => (
                <Card
                  key={post.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-foreground line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">
                      {post.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        {post.post_date
                          ? new Date(post.post_date).toLocaleDateString()
                          : "Recent"}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center">
            <Button asChild size="lg">
              <a
                href="https://ruralcommunitypartners.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read All Articles on Substack
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Your Story Could Be Next
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join entrepreneurs and communities transforming rural Southeast
            Kansas. Let's write your success story together.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/get-support">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
