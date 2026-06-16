import { Laptop } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left — visual */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-60 h-60 rounded-2xl bg-[#0A0A0F] flex items-center justify-center text-7xl shadow-2xl shadow-black/40 border border-white/5">
              <Laptop size={80} className="text-gray-400" strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#111827] border border-white/10 rounded-xl px-4 py-2.5 text-sm shadow-lg">
              <span className="text-blue-400 font-bold">4+</span>
              <span className="text-gray-400 ml-1">Tahun Freelance</span>
            </div>
            <div className="absolute -top-4 -left-4 bg-[#111827] border border-white/10 rounded-xl px-4 py-2.5 text-sm shadow-lg">
              <span className="text-blue-400 font-bold">30+</span>
              <span className="text-gray-400 ml-1">Proyek Selesai</span>
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div>
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Tentang Saya</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
            Fullstack Developer<br />
            <span className="text-gray-400 font-normal text-2xl">Lulusan Universitas Brawijaya</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4 text-sm">
            Saya adalah fresh graduate dengan gelar Diploma dan Sarjana Teknologi Informasi dari Universitas Brawijaya, dengan lebih dari 4 tahun pengalaman sebagai freelance fullstack developer.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6 text-sm">
            Keahlian utama saya meliputi pengembangan aplikasi web menggunakan <span className="text-white font-medium">Laravel, PHP, Bootstrap, jQuery, dan Figma</span>. Saya fokus pada pembuatan aplikasi berbasis transaksi seperti ERP, sistem gudang, ordering, kasir, HRIS, dan audit. Saat ini sedang aktif belajar di bidang <span className="text-blue-400 font-medium">AI Engineer & Machine Learning</span>.
          </p>



          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Proyek", value: "30+" },
              { label: "Klien", value: "20+" },
              { label: "Teknologi", value: "12+" },
            ].map((s) => (
              <div key={s.label} className="bg-[#111827] border border-white/5 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-blue-400">{s.value}</p>
                <p className="text-gray-500 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
