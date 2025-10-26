import { Sparkles, HeartHandshake } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-pink-100 to-sky-100" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-400/40 to-blue-400/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-400/40 to-teal-400/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 items-center gap-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-black/5 mb-4">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Split expenses the friendly way</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
            Buddy up your budget.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600">
              Save smarter together.
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-prose">
            BuddyBudget makes it easy for roommates and couples to track shared expenses, settle up in seconds, and set colorful goals you can actually hit—together.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#download" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-black text-white font-semibold shadow hover:shadow-md transition">
              Download the app
            </a>
            <a href="#screens" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold border border-black/10 shadow-sm hover:bg-gray-50 transition">
              See how it works
            </a>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-gray-600">
            <HeartHandshake className="h-4 w-4 text-rose-500" />
            Trusted by thousands of happy households
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
          <div className="relative mx-auto w-[260px] sm:w-[300px] md:w-[340px] aspect-[9/19] rounded-[2rem] bg-white border-8 border-black/90 shadow-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605901309584-818e259d4a7c?auto=format&fit=crop&w=900&q=80"
              alt="BuddyBudget app home screen showing shared expenses"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
