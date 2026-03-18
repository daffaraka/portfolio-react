import { services } from "../data/data";

export default function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Yang Saya Tawarkan</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Layanan</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Solusi digital yang saya sediakan untuk membantu bisnis Anda berkembang.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-[#111827] rounded-xl p-6 border border-white/5 hover:border-blue-500/30 hover:-translate-y-1 transition-all group cursor-default"
            >
              <div className="w-12 h-12 bg-blue-600/15 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600/25 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
