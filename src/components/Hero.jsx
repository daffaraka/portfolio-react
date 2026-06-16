export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center z-10 px-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-wide">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for freelance projects
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
          Hi, I'm{" "}
          <span className="text-blue-400">Daffa Raka</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 font-medium mb-3">
          Fullstack Web Developer
        </p>

        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xl mx-auto">
          Fresh graduate dengan 4+ tahun pengalaman freelance. Spesialis aplikasi berbasis transaksi, ERP, HRIS, dan sistem bisnis menggunakan Laravel & PHP.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
          >
            Lihat Portfolio
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 border border-white/15 text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5"
          >
            Hubungi Saya
          </button>
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {["Laravel", "PHP", "Bootstrap", "jQuery", "MySQL", "Figma", "Machine Learning", "AI", "Python", "Java", "Tailwind", "Node.js", "React.js", "Vue", "DevOps", "Django", "FastAPI"].map((t) => (
            <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-md">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 text-xs animate-bounce">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
