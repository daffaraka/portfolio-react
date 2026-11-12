import { skills } from "../data/data";

const row1 = skills.slice(0, Math.ceil(skills.length / 2));
const row2 = skills.slice(Math.ceil(skills.length / 2));

// 4x duplikasi untuk menjamin loop halus tanpa putus di segala resolusi layar
const listRow1 = [...row1, ...row1, ...row1, ...row1];
const listRow2 = [...row2, ...row2, ...row2, ...row2];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white text-slate-800 overflow-hidden relative">
      <div className="max-w-5xl mx-auto mb-14 text-center">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Kemampuan</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Proficiency Skills</h2>
        <p className="text-slate-600 text-sm mt-3 max-w-md mx-auto">
          Teknologi yang saya kuasai dan gunakan sehari-hari dalam pengembangan proyek.
        </p>
      </div>

      {/* Marquee Carousel Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Left & Right Gradient Masks for smooth edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="space-y-4 md:space-y-5">
          {/* Row 1: Berjalan otomatis ke KIRI */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-left flex gap-4 md:gap-5 py-1">
              {listRow1.map((skill, index) => (
                <div
                  key={`r1-${skill.name}-${index}`}
                  className="flex items-center gap-3.5 px-5 py-3.5 bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-blue-500 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group flex-shrink-0 cursor-pointer select-none"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm border border-slate-100 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <img src={skill.img} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-semibold text-slate-800 text-sm group-hover:text-blue-600 transition-colors whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Berjalan otomatis ke KANAN */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-right flex gap-4 md:gap-5 py-1">
              {listRow2.map((skill, index) => (
                <div
                  key={`r2-${skill.name}-${index}`}
                  className="flex items-center gap-3.5 px-5 py-3.5 bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-blue-500 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group flex-shrink-0 cursor-pointer select-none"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm border border-slate-100 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <img src={skill.img} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-semibold text-slate-800 text-sm group-hover:text-blue-600 transition-colors whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info hint */}
        <p className="text-center text-xs text-slate-400 mt-8 font-medium">
          Arahkan kursor atau sentuh kartu untuk menjeda
        </p>
      </div>
    </section>
  );
}
