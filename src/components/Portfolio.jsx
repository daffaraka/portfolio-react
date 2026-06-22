import { useState } from "react";
import { Link } from "react-router-dom";
import { portfolios } from "../data/data";

const categories = ["All", "Web", "ERP"];

const createSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

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
            <Link
              to={`/portfolio/${createSlug(p.title)}`}
              key={p.id}
              className="bg-[#0A0A0F] rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/30 hover:-translate-y-1 transition-all cursor-pointer group block"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
