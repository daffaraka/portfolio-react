import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { portfolios } from "../data/data";

const categories = ["All", "Web", "ERP"];

function Modal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#111827] rounded-2xl max-w-2xl w-full overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
          {project.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-60 object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">{project.category}</span>
              <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-white transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-blue-600/15 text-blue-400 border border-blue-500/20 rounded-md text-xs font-medium">
                {t}
              </span>
            ))}
          </div>
          {project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-all"
            >
              Lihat Proyek
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "All" ? portfolios : portfolios.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 px-4 bg-[#111827]/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Hasil Kerja</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Portfolio</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Beberapa proyek yang telah saya kerjakan untuk klien dari berbagai industri.
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === c
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-[#0A0A0F] text-gray-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelected(p)}
              className="bg-[#0A0A0F] rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/30 hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-full h-44 object-cover group-hover:scale-105 group-hover:blur-sm transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-lg">
                    Lihat Detail
                  </span>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">{p.category}</span>
                <h3 className="text-white font-semibold mt-1 mb-1.5 text-sm">{p.title}</h3>
                <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-white/5 text-gray-500 rounded text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
