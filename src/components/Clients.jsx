import { clients } from "../data/data";

export default function Clients() {
  return (
    <section id="clients" className="py-24 px-4 bg-[#111827]/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Kepercayaan Klien</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Klien & Testimoni</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Apa yang klien katakan tentang hasil kerja saya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {clients.map((c) => (
            <div
              key={c.name}
              className="bg-[#0A0A0F] rounded-xl p-6 border border-white/5 hover:border-blue-500/20 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">"{c.testimonial}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xs flex-shrink-0">
                  {c.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{c.name}</p>
                  <p className="text-gray-500 text-xs">{c.industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
