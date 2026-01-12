"use client";

import Link from "next/link";

export default function FloatingSupportButton() {
  return (
    <Link
      href="/get-support"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-semibold group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 group-hover:scale-110 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <span className="hidden sm:inline">Get Support</span>
      <span className="sm:hidden">Help</span>
    </Link>
  );
}
