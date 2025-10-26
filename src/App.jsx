import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Scene from "./components/Scene";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <MainContent>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Buddy up your budget
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600">
                Save smarter together
              </span>
            </h1>
            <p className="mt-4 text-gray-700 max-w-prose">
              BuddyBudget helps roommates and couples split expenses, settle up fairly, and hit shared goals with a friendly, colorful experience.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#download" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-black text-white font-semibold shadow hover:shadow-md transition">
                Download the app
              </a>
              <a href="#screens" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold border border-black/10 shadow-sm hover:bg-gray-50 transition">
                See screenshots
              </a>
            </div>
          </div>
          <div className="relative">
            <Scene />
          </div>
        </div>
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;
