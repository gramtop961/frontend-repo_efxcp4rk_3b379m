export default function Screenshots() {
  return (
    <section id="screens" className="py-20 bg-gradient-to-b from-white to-indigo-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">Real app screenshots</h2>
          <p className="mt-2 text-gray-600">A peek at how easy it is to split, track, and save—together.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PhoneFrame src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80" alt="Split expenses feed on mobile" />
          <PhoneFrame src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80" alt="Budget categories with bright colors" />
          <PhoneFrame src="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=80" alt="Savings goal progress with charts" />
        </div>

        <div id="download" className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-black text-white font-semibold shadow hover:shadow-md transition" href="#">
            Download for iOS
          </a>
          <a className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold border border-black/10 shadow-sm hover:bg-gray-50 transition" href="#">
            Download for Android
          </a>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ src, alt }) {
  return (
    <div className="relative mx-auto w-[260px] sm:w-full max-w-[320px] aspect-[9/19] rounded-[2rem] bg-white border-8 border-black/90 shadow-2xl overflow-hidden">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}
