import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import ImpactPreview from "@/components/impact-preview";
import UpcomingEvents from "@/components/upcoming-events";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ImpactPreview />
      <UpcomingEvents />
      <CallToAction />
      <Footer />
    </main>
  );
}
