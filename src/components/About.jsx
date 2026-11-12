import { Laptop } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white text-slate-800">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left — visual */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-60 h-60 rounded-2xl bg-slate-50 flex items-center justify-center text-7xl shadow-xl shadow-slate-200/80 border border-slate-200">
              <Laptop size={80} className="text-slate-700" strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm shadow-lg">
              <span className="text-blue-600 font-bold">4+</span>
              <span className="text-slate-600 ml-1 font-medium">Tahun Freelance</span>
            </div>
            <div className="absolute -top-4 -left-4 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm shadow-lg">
              <span className="text-blue-600 font-bold">30+</span>
              <span className="text-slate-600 ml-1 font-medium">Proyek Selesai</span>
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div>
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Tentang Saya</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-snug">
            Fullstack Developer<br />
            <span className="text-slate-500 font-normal text-2xl">Lulusan Universitas Brawijaya</span>
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            Saya adalah fresh graduate dengan gelar Diploma dan Sarjana Teknologi Informasi dari Universitas Brawijaya, dengan lebih dari 4 tahun pengalaman sebagai freelance fullstack developer.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6 text-sm">
            Keahlian utama saya meliputi pengembangan aplikasi web menggunakan <span className="text-slate-900 font-semibold">Laravel, PHP, Bootstrap, jQuery, dan Figma</span>. Saya fokus pada pembuatan aplikasi berbasis transaksi seperti ERP, sistem gudang, ordering, kasir, HRIS, dan audit. Saat ini sedang aktif belajar di bidang <span className="text-blue-600 font-semibold">AI Engineer &amp; Machine Learning</span>.
          </p>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Proyek", value: "30+" },
              { label: "Klien", value: "20+" },
              { label: "Teknologi", value: "12+" },
            ].map((s) => (
              <div key={s.label} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center shadow-sm hover:border-blue-400 transition-colors">
                <p className="text-2xl font-bold text-blue-600">{s.value}</p>
                <p className="text-slate-500 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
