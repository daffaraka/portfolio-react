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
        <Link to="/" onClick={() => setTimeout(() => { const el = document.getElementById("portfolio"); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 100)} className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
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
      </div>
    </div>
  );
}
