import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-[600px] md:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/HomePage.jpg"
          alt="Rural community members collaborating"
          fill
          className="object-cover object-[center_35%]"
          priority
          quality={90}
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8FB854]/60 via-[#8FB854]/60 to-[#8FB854]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl space-y-8 text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight drop-shadow-lg">
            Empowering Rural Communities
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
            Rural Community Partners supports entrepreneurs, communities, and
            local organizations across Southeast Kansas. We help you find
            resources, connect with mentors, and engage with opportunities for
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              asChild
              className="bg-secondary hover:bg-secondary/90 text-black font-semibold text-base hover:scale-105 transition-transform shadow-xl"
            >
              <Link href="/get-support">
                Get Support <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm font-semibold text-base shadow-xl"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
