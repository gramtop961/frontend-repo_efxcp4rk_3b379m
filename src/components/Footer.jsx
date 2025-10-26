import { Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {year} BuddyBudget. Split better, save together.</p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="BuddyBudget on Twitter"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-gray-700 hover:text-black hover:border-black/20 transition"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="BuddyBudget on Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-gray-700 hover:text-black hover:border-black/20 transition"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="BuddyBudget on GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-gray-700 hover:text-black hover:border-black/20 transition"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
