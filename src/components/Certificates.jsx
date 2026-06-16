import { education, certificates } from "../data/data";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-4 bg-[#111827]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Kredensial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Pendidikan & Sertifikat</h2>
        </div>

        {/* Pendidikan */}
        <div className="mb-12">
          <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-500 rounded-full inline-block" />
            Pendidikan
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((e) => (
              <div
                key={e.title}
                className="bg-[#0A0A0F] rounded-xl p-5 border border-white/5 hover:border-blue-500/30 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[#0A0A0F] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {e.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{e.title}</h4>
                  <p className="text-blue-400 text-xs font-medium mt-0.5">{e.issuer}</p>
                  <p className="text-gray-600 text-xs mt-1">{e.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sertifikat */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-500 rounded-full inline-block" />
            Sertifikat
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((c) => (
              <div
                key={c.title}
                className="bg-[#0A0A0F] rounded-xl p-5 border border-white/5 hover:border-blue-500/30 hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md">
                    {c.issuer}
                  </span>
                  <span className="text-gray-600 text-xs">{c.year}</span>
                </div>
                <h4 className="text-white font-semibold text-sm leading-snug mb-2">{c.title}</h4>
                {c.desc && <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>}
                {c.link && (
                  <a href={c.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs mt-3 font-medium transition-colors">
                    Lihat Sertifikat
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
