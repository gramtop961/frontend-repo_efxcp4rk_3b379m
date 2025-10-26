import { Users, PieChart, Shield, Target } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Split with ease",
    text: "Add roommates or partners, assign who owes what, and never argue over receipts again.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: PieChart,
    title: "Colorful budgets",
    text: "Create playful categories and track spending with vibrant charts that make money fun.",
    color: "from-blue-500 to-sky-500",
  },
  {
    icon: Target,
    title: "Shared goals",
    text: "Set savings goals together and watch your progress climb, confetti included.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Private & secure",
    text: "Your data is protected with encryption and best-in-class security practices.",
    color: "from-purple-500 to-indigo-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900">Made for modern households</h2>
          <p className="mt-2 text-gray-600">
            A friendly toolkit that keeps everyone in the loop and your budget on track.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${f.color} text-white grid place-items-center shadow`}> 
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
