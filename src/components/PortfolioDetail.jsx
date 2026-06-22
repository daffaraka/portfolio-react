import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { portfolios } from "../data/data";

const createSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export default function PortfolioDetail() {
  const { slug } = useParams();
  const project = portfolios.find(p => createSlug(p.title) === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-3xl font-bold mb-4">Proyek tidak ditemukan</h1>
        <Link to="/" className="text-blue-400 hover:underline">Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0F] min-h-screen font-sans text-white py-12 px-4 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Menggunakan Hash Link atau sekadar "/" tergantung pada behavior router */}
        <Link to="/" onClick={() => setTimeout(() => { const el = document.getElementById("portfolio"); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 100)} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-300 hover:text-white transition-all mb-8 font-medium shadow-sm hover:shadow-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Portofolio
        </Link>

        <div className="bg-[#111827] rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-8">
          <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-[300px] md:h-[500px] object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <span className="text-sm text-blue-400 font-semibold uppercase tracking-wider">{project.category}</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">{project.title}</h1>
          
          <div className="bg-[#111827] border border-white/5 p-6 rounded-xl mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">Deskripsi Proyek</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">{project.desc}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Teknologi yang Digunakan</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-4 py-2 bg-blue-600/15 text-blue-400 border border-blue-500/20 rounded-lg text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all"
            >
              Kunjungi Proyek
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        {/* PROYEK LAINNYA */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8">Proyek Lainnya</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolios.filter(p => createSlug(p.title) !== slug).slice(0, 3).map((p) => (
              <Link
                to={`/portfolio/${createSlug(p.title)}`}
                key={p.id}
                className="bg-[#111827] rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/30 hover:-translate-y-1 transition-all cursor-pointer group block"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-lg">
                      Lihat Detail
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">{p.category}</span>
                  <h4 className="text-white font-semibold mt-1 mb-1 text-sm truncate">{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
