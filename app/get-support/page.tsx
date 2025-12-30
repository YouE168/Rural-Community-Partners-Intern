"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralSupportForm from "@/components/forms/general-support-form";
import MentorshipForm from "@/components/forms/mentorship-form";
import TechnicalAssistanceForm from "@/components/forms/technical-assistance-form";
import { useSearchParams } from "next/navigation";

export default function GetSupportPage() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("service") || "general";

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-balance drop-shadow-lg">
            Request Support
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
            Choose the type of support you need and tell us more about your
            situation
          </p>
        </div>
      </section>

      {/* Forms Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue={initialTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">General Support</TabsTrigger>
              <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  General Support Request
                </h2>
                <p className="text-muted-foreground">
                  Tell us about your situation and the type of assistance you're
                  looking for. We'll review your request and connect you with
                  the right resources.
                </p>
              </div>
              <GeneralSupportForm />
            </TabsContent>

            <TabsContent value="mentorship" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Mentorship Program Application
                </h2>
                <p className="text-muted-foreground">
                  Join our mentorship program and get paired with an experienced
                  mentor who can guide your entrepreneurial journey.
                </p>
              </div>
              <MentorshipForm />
            </TabsContent>

            <TabsContent value="technical" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Technical Assistance Request
                </h2>
                <p className="text-muted-foreground">
                  Request expert technical assistance for your project or
                  initiative. We'll assess your needs and provide specialized
                  support.
                </p>
              </div>
              <TechnicalAssistanceForm />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  );
}
