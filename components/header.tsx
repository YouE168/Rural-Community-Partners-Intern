"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Programs", href: "/programs" },
    { label: "Impact", href: "/impact" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Rural Community Partners logo"
              width={64}
              height={64}
              className="h-16 w-auto transition-transform group-hover:scale-105"
            />
          </div>
          <span className="hidden text-lg font-bold text-foreground sm:inline">
            Rural Community Partners
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-foreground transition-all relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-3">
          <Button
            variant="outline"
            asChild
            className="border-primary/30 hover:border-primary/60 transition-all bg-transparent"
          >
            <Link href="/get-support">Get Support</Link>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all"
          >
            <Link href="/donate">Donate</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-foreground" />
          ) : (
            <Menu size={24} className="text-foreground" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t bg-white/90 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:text-primary hover:bg-primary/5 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t pt-4 mt-4 flex flex-col gap-2">
              <Button
                variant="outline"
                asChild
                className="w-full border-primary/30 hover:border-primary/60 bg-transparent"
              >
                <Link href="/get-support">Get Support</Link>
              </Button>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary to-secondary"
              >
                <Link href="/donate">Donate</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
