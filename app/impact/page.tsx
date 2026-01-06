"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TrendingUp, Users, Building2, Award, ArrowRight } from "lucide-react";

const impactStats = [
  { icon: Users, label: "Active Members", value: "100+" },
  { icon: Building2, label: "Communities Served", value: "25+" },
  { icon: TrendingUp, label: "Economic Impact", value: "$2.3M" },
  { icon: Award, label: "Local Action Teams", value: "12" },
];

const successStories = [
  {
    id: 1,
    title: "Community Innovation Through LHEAT",
    excerpt: "Creative solutions addressing food security and health access",
    fullStory:
      "The $2,500 PHIG Innovation Funds represent one additional opportunity teams received to pilot creative solutions within specific parameters. Even with funding restrictions—including prohibitions on direct food purchases—teams developed innovative strategies like distributing gardening supplies, offering cooking demonstrations, coordinating community-led food basket initiatives, and enhancing access to resource information.",
    impact: "3,000+ residents reached",
    region: "Kansas Statewide",
    image: "",
  },
];

export default function ImpactPage() {
  const [selectedStory, setSelectedStory] = useState<
    (typeof successStories)[0] | null
  >(null);
  const [substackPosts, setSubstackPosts] = useState<any[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    const fetchSubstackPosts = async () => {
      try {
        const feedUrl =
          "https://ruralcommunitypartners.substack.com/api/v1/posts?limit=6";
        const response = await fetch(feedUrl);
        if (response.ok) {
          const data = await response.json();
          setSubstackPosts(data.posts || []);
        }
      } catch (error) {
        console.log("Could not load Substack posts - using mock data");
        setSubstackPosts([
          {
            id: 1,
            title: "Example: The Future of Rural Economic Development",
            subtitle: "Trends and opportunities for Southeast Kansas",
            url: "https://ruralcommunitypartners.substack.com",
            post_date: "2024-12-01",
          },
          {
            id: 1,
            title: "Title",
            subtitle: "Sub-Title",
            url: "https://ruralcommunitypartners.substack.com",
            post_date: "Post Date",
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

      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-balance drop-shadow-lg">
            Our Impact & Stories
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
            Real stories of entrepreneurs, communities, and economic
            transformation in Southeast Kansas
          </p>
        </div>
      </section>

      <section className="w-full py-12 sm:py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={idx}
                  className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-16 sm:py-20 md:py-24 bg-primary/5">
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

                      <div className="pt-6 border-t border-white/30">
                        <p className="text-sm text-white/80 mb-1">Impact</p>
                        <p className="text-2xl font-bold text-white">
                          {story.impact}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-4">
                        {story.id === 2 ? (
                          <Link
                            href="/programs/local-action-teams"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-gray-900 hover:bg-white/90 h-11 px-8"
                          >
                            Learn More About Local Action Teams
                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        ) : (
                          <>
                            <button
                              onClick={() => setSelectedStory(story)}
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-gray-900 hover:bg-white/90 h-11 px-8"
                            >
                              Read Full Story
                              <ArrowRight className="h-5 w-5" />
                            </button>
                            <Link
                              href="/get-support"
                              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-white text-white hover:bg-white/10 bg-transparent h-11 px-8"
                            >
                              Get Similar Support
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="relative min-h-[400px] md:min-h-full">
                    <img
                      src={story.image}
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

      {selectedStory && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-background rounded-xl max-w-4xl w-full my-8">
            <div className="relative">
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                aria-label="Close modal"
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
                  src={selectedStory.image}
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

      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
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
