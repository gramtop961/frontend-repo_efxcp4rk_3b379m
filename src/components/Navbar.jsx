import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 grid place-items-center shadow-md">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600">
            BuddyBudget
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#screens" className="text-gray-600 hover:text-gray-900">Screenshots</a>
          <a href="#download" className="text-gray-600 hover:text-gray-900">Get the app</a>
        </nav>
        <a href="#download" className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition">
          Get Started
        </a>
      </div>
    </header>
  );
}
