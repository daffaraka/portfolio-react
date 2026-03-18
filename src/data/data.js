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
    icon: "💻",
    desc: "Membangun aplikasi web full-stack berbasis transaksi, ERP, HRIS, dan sistem bisnis menggunakan Laravel & PHP.",
  },
  {
    title: "App Planning",
    icon: "📋",
    desc: "Perencanaan sistem, wireframing di Figma, arsitektur database, dan roadmap pengembangan aplikasi.",
  },
  {
    title: "Deployment & Hosting",
    icon: "🚀",
    desc: "Deploy aplikasi ke VPS, shared hosting, atau cloud. Setup domain, SSL, dan konfigurasi server.",
  },
  {
    title: "Maintenance",
    icon: "🔧",
    desc: "Pemeliharaan rutin, perbaikan bug, update fitur, dan optimasi performa aplikasi yang sudah berjalan.",
  },
  {
    title: "Data Analyst",
    icon: "📊",
    desc: "Analisis data bisnis, pembuatan laporan, visualisasi data, dan insight untuk pengambilan keputusan.",
  },
  {
    title: "Machine Learning",
    icon: "🤖",
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
  { title: "S1 — Teknologi Informasi", issuer: "Universitas Brawijaya", year: "2024", icon: "🏛️" },
  { title: "D3 — Teknologi Informasi", issuer: "Universitas Brawijaya", year: "2021", icon: "🎓" },
];

export const certificates = [
  { title: "Belajar Dasar Cloud dan Gen AI di AWS", issuer: "Dicoding", year: "2025", desc: "Memahami konsep dasar cloud AWS, layanan, infrastruktur global, serta pengenalan Generative AI." },
  { title: "Belajar Dasar Data Science", issuer: "Dicoding", year: "2025", desc: "Mempelajari dasar-dasar data science, termasuk analisis dan pemahaman data." },
  { title: "Belajar Dasar Structured Query Language / SQL", issuer: "Dicoding", year: "2025", desc: "Menguasai query dasar SQL untuk pengelolaan dan analisis data." },
  { title: "Belajar Dasar AI", issuer: "Dicoding", year: "2025", desc: "Memahami konsep dasar Artificial Intelligence dan penerapannya." },
  { title: "Belajar Back-End Pemula dengan JavaScript", issuer: "Dicoding", year: "2025", desc: "Mempelajari dasar backend menggunakan Node.js dan pengembangan API." },
  { title: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding", year: "2025", desc: "Menguasai dasar JavaScript untuk pengembangan aplikasi dan RESTful API sederhana." },
  { title: "Belajar Machine Learning untuk Pemula", issuer: "Dicoding", year: "2026", desc: "Mempelajari pembuatan model machine learning (klasifikasi, regresi, clustering)." },
  { title: "Memulai Pemrograman dengan Python", issuer: "Dicoding", year: "2025", desc: "Menguasai dasar pemrograman Python dan penggunaan tools seperti Jupyter Notebook." },
  { title: "Python Fundamental for Data Science", issuer: "DQLab", year: "2026", desc: "Memahami dasar Python untuk pengolahan dan analisis data." },
  { title: "Machine Learning with Python for Beginner", issuer: "DQLab", year: "2026", desc: "Mempelajari dasar machine learning, data preprocessing, dan implementasi model dengan Scikit-Learn." },
  { title: "Pengantar Machine Learning dengan Python", issuer: "DQLab", year: "2026", desc: "Memahami konsep, jenis, dan pemilihan algoritma machine learning serta implementasi sederhana." },
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
