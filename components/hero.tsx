import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 min-h-[600px] md:min-h-[700px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 text-white">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Empowering Rural Communities
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl">
              Rural Community Partners supports entrepreneurs, communities, and
              local organizations across Southeast Kansas. We help you find
              resources, connect with mentors, and engage with opportunities for
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                asChild
                className="bg-secondary hover:bg-secondary/90 text-black font-semibold text-base hover:scale-105 transition-transform"
              >
                <Link href="/get-support">
                  Get Support <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent font-semibold text-base"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/rural-community-entrepreneurs-working-together-in-.jpg"
              alt="Rural community members collaborating"
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
