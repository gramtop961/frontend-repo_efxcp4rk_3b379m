export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600">
            BuddyBudget
          </span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#screens" className="text-gray-600 hover:text-gray-900">Screenshots</a>
          <a href="#download" className="text-gray-600 hover:text-gray-900">Get the app</a>
        </nav>
        <a
          href="#download"
          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
