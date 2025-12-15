import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-primary-foreground py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">Rural Community Partners</h3>
            <p className="text-sm text-primary-foreground/80">
              Empowering rural communities and entrepreneurs in Southeast Kansas
              through support, mentorship, and collaboration.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/entrepreneurship"
                  className="hover:text-secondary transition-colors"
                >
                  Entrepreneurship
                </Link>
              </li>
              <li>
                <Link
                  href="/services/feasibility"
                  className="hover:text-secondary transition-colors"
                >
                  Feasibility Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/services/technical-assistance"
                  className="hover:text-secondary transition-colors"
                >
                  Technical Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/community-development"
                  className="hover:text-secondary transition-colors"
                >
                  Community Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/programs/entrepreneur-council"
                  className="hover:text-secondary transition-colors"
                >
                  Entrepreneur Council
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/mentorship"
                  className="hover:text-secondary transition-colors"
                >
                  Mentorship Program
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/local-action-teams"
                  className="hover:text-secondary transition-colors"
                >
                  Local Action Teams
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-secondary transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="hover:text-secondary transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/impact"
                  className="hover:text-secondary transition-colors"
                >
                  Our Impact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 Rural Community Partners. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="hover:text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-secondary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
