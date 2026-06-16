import { Monitor, ClipboardList, Rocket, Wrench, BarChart, Bot, Building2, GraduationCap } from "lucide-react";

export const skills = [
  { name: "Laravel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "jQuery", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vue", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Google Cloud", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Machine Learning", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Matplotlib", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
];

export const services = [
  {
    title: "Web Development",
    icon: <Monitor className="text-blue-400" />,
    desc: "Membangun aplikasi web full-stack berbasis transaksi, ERP, HRIS, dan sistem bisnis menggunakan Laravel & PHP.",
  },
  {
    title: "App Planning",
    icon: <ClipboardList className="text-blue-400" />,
    desc: "Perencanaan sistem, wireframing di Figma, arsitektur database, dan roadmap pengembangan aplikasi.",
  },
  {
    title: "Deployment & Hosting",
    icon: <Rocket className="text-blue-400" />,
    desc: "Deploy aplikasi ke VPS, shared hosting, atau cloud. Setup domain, SSL, dan konfigurasi server.",
  },
  {
    title: "Maintenance",
    icon: <Wrench className="text-blue-400" />,
    desc: "Pemeliharaan rutin, perbaikan bug, update fitur, dan optimasi performa aplikasi yang sudah berjalan.",
  },
  {
    title: "Data Analyst",
    icon: <BarChart className="text-blue-400" />,
    desc: "Analisis data bisnis, pembuatan laporan, visualisasi data, dan insight untuk pengambilan keputusan.",
  },
  {
    title: "Machine Learning",
    icon: <Bot className="text-blue-400" />,
    desc: "Sedang aktif belajar dan mengembangkan kemampuan di bidang AI Engineer dan Machine Learning.",
  },
];

export const portfolios = [
  {
    id: 1,
    title: "Sistem ERP Manufaktur",
    category: "ERP",
    desc: "Sistem ERP lengkap untuk perusahaan manufaktur mencakup modul produksi, inventory, pembelian, penjualan, dan laporan keuangan. Dibangun dengan Laravel & Bootstrap.",
    tech: ["Laravel", "Bootstrap", "MySQL", "jQuery"],
    images: [
      "https://placehold.co/800x450/1D4ED8/white?text=ERP+Dashboard",
      "https://placehold.co/800x450/1E40AF/white?text=Inventory+Module",
      "https://placehold.co/800x450/1E3A8A/white?text=Laporan+Keuangan",
    ],
    link: "#",
  },
  {
    id: 2,
    title: "Sistem HRIS",
    category: "Web",
    desc: "Human Resource Information System untuk manajemen karyawan, absensi, penggajian, cuti, dan penilaian kinerja. Terintegrasi dengan mesin fingerprint.",
    tech: ["Laravel", "Bootstrap", "MySQL", "jQuery"],
    images: [
      "https://placehold.co/800x450/0369A1/white?text=HRIS+Dashboard",
      "https://placehold.co/800x450/075985/white?text=Payroll+Module",
      "https://placehold.co/800x450/0C4A6E/white?text=Attendance+Report",
    ],
    link: "#",
  },
  {
    id: 3,
    title: "Aplikasi Kasir & POS",
    category: "Web",
    desc: "Sistem Point of Sale untuk toko retail dengan fitur manajemen produk, transaksi penjualan, laporan harian, dan manajemen stok real-time.",
    tech: ["Laravel", "Bootstrap", "MySQL", "jQuery"],
    images: [
      "https://placehold.co/800x450/1D4ED8/white?text=POS+Interface",
      "https://placehold.co/800x450/1E40AF/white?text=Transaksi+Penjualan",
      "https://placehold.co/800x450/1E3A8A/white?text=Laporan+Harian",
    ],
    link: "#",
  },
  {
    id: 4,
    title: "Sistem Warehousing",
    category: "ERP",
    desc: "Aplikasi manajemen gudang dengan fitur penerimaan barang, pengeluaran, stock opname, lokasi rak, dan laporan pergerakan barang.",
    tech: ["Laravel", "Bootstrap", "MySQL", "Figma"],
    images: [
      "https://placehold.co/800x450/0369A1/white?text=Warehouse+Dashboard",
      "https://placehold.co/800x450/075985/white?text=Stock+Management",
      "https://placehold.co/800x450/0C4A6E/white?text=Receiving+Module",
    ],
    link: "#",
  },
  {
    id: 5,
    title: "Sistem Ordering Online",
    category: "Web",
    desc: "Platform pemesanan online untuk bisnis F&B dan retail dengan fitur katalog produk, keranjang belanja, tracking order, dan notifikasi real-time.",
    tech: ["Laravel", "Bootstrap", "MySQL", "jQuery"],
    images: [
      "https://placehold.co/800x450/1D4ED8/white?text=Ordering+Home",
      "https://placehold.co/800x450/1E40AF/white?text=Product+Catalog",
      "https://placehold.co/800x450/1E3A8A/white?text=Order+Tracking",
    ],
    link: "#",
  },
  {
    id: 6,
    title: "Sistem Audit Internal",
    category: "Web",
    desc: "Aplikasi audit internal perusahaan untuk penjadwalan audit, checklist temuan, tindak lanjut, dan pelaporan hasil audit kepada manajemen.",
    tech: ["Laravel", "Bootstrap", "MySQL", "Figma"],
    images: [
      "https://placehold.co/800x450/0369A1/white?text=Audit+Dashboard",
      "https://placehold.co/800x450/075985/white?text=Checklist+Temuan",
      "https://placehold.co/800x450/0C4A6E/white?text=Laporan+Audit",
    ],
    link: "#",
  },
];

export const education = [
  { title: "S1 — Teknologi Informasi", issuer: "Universitas Brawijaya", year: "2024", icon: <Building2 className="text-blue-400" /> },
  { title: "D3 — Teknologi Informasi", issuer: "Universitas Brawijaya", year: "2021", icon: <GraduationCap className="text-blue-400" /> },
];

export const certificates = [
  { title: "Belajar Dasar Cloud dan Gen AI di AWS.", issuer: "Dicoding", year: "2025", link: "https://www.dicoding.com/certificates/JMZVVDKYRZN9" },
  { title: "Belajar Dasar Data Science", issuer: "Dicoding", year: "2025", link: "https://www.dicoding.com/certificates/1OP8JV4JVPQK" },
  { title: "Belajar Dasar Structured Query Language (SQL)", issuer: "Dicoding", year: "2025", link: "https://www.dicoding.com/certificates/N9ZO2LR6RPG5" },
  { title: "Belajar Dasar AI", issuer: "Dicoding", year: "2025" },
  { title: "Belajar Back-End Pemula dengan JavaScript", issuer: "Dicoding", year: "2025", link: "https://www.dicoding.com/certificates/98XWO0KVLZM3" },
  { title: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding", year: "2025", link: "https://www.dicoding.com/certificates/2VX352KW3PYQ" },
  { title: "Belajar Machine Learning untuk Pemula", issuer: "Dicoding", year: "2026", link: "https://www.dicoding.com/certificates/JLX15M1R5Z72" },
  { title: "Memulai Pemrograman dengan Python", issuer: "Dicoding", year: "2025" },
  { title: "Machine Learning With Python for Beginner", issuer: "DQLab", year: "2026", link: "https://academy.dqlab.id/Certificate_check/result/DQLABDVIZ2TARAJS" },
  { title: "Python Fundamental for Data Science", issuer: "DQLab", year: "2026", link: "https://academy.dqlab.id//certificate/pdf/DQLABINTP1JPGNHI" },
  { title: "Pengantar Machine Learning dengan Python", issuer: "DQLab", year: "2026", link: "https://academy.dqlab.id/Certificate_check/result/DQLABPMLP1WWVKLT" },
  { title: "Belajar Membuat Aplikasi Web dengan React", issuer: "Dicoding / DQLab", year: "2026", link: "https://www.dicoding.com/certificates/EYX4Q03K6PDL" },
  { title: "Belajar Fundamental Aplikasi Web dengan React", issuer: "Dicoding", year: "2026", link: "https://www.dicoding.com/certificates/53XE1D41VZRN" },
  { title: "Belajar Dasar Google Cloud", issuer: "Dicoding", year: "2026", link: "https://www.dicoding.com/certificates/MRZMWNWVRPYQ" },
  { title: "Menjadi Google Cloud Engineer", issuer: "Dicoding", year: "N/A", link: "https://www.dicoding.com/certificates/6RPN7JYO9X2M" },
];

export const clients = [
  {
    name: "PT. Mitra Solusi Industri",
    industry: "Manufaktur",
    testimonial: "Sistem ERP yang dibangun sangat membantu operasional pabrik kami. Pengerjaan tepat waktu dan komunikasi lancar.",
    avatar: "MS",
  },
  {
    name: "CV. Berkah Niaga",
    industry: "Retail & Distribusi",
    testimonial: "Aplikasi kasir dan warehouse-nya mudah dipakai oleh tim kami. Bug cepat ditangani, sangat responsif.",
    avatar: "BN",
  },
  {
    name: "PT. Karya Mandiri Group",
    industry: "Konstruksi",
    testimonial: "HRIS yang dibuat sangat memudahkan HR kami dalam pengelolaan karyawan dan penggajian bulanan.",
    avatar: "KM",
  },
  {
    name: "UD. Sumber Rejeki",
    industry: "F&B",
    testimonial: "Sistem ordering online kami sekarang jauh lebih rapi. Pesanan tidak pernah terlewat lagi. Terima kasih!",
    avatar: "SR",
  },
];
