# Portfolio - Daffa Raka Mahendra

Aplikasi portfolio pribadi yang dibangun menggunakan React JS dan Tailwind CSS. Aplikasi ini menampilkan profil, keahlian, layanan, portofolio proyek, sertifikat, testimoni klien, dan informasi kontak dalam satu halaman dengan navigasi smooth scroll.

---

## Tentang Aplikasi

Aplikasi ini dibuat sebagai media presentasi profesional untuk menampilkan pengalaman dan hasil kerja sebagai freelance fullstack developer. Seluruh konten dapat dikelola melalui satu file data terpusat di `src/data/data.js` tanpa perlu mengubah komponen secara langsung.

---

## Fitur Utama

- Single page application dengan navigasi smooth scroll
- Navbar responsif dengan tampilan mobile-friendly
- Halaman hero dengan status ketersediaan freelance
- Bagian about me dengan ringkasan pengalaman dan pendidikan
- Proficiency skills menggunakan logo resmi masing-masing teknologi
- Kartu layanan yang ditawarkan
- Portfolio dengan filter kategori dan modal detail berisi carousel gambar
- Efek blur pada gambar portfolio saat hover
- Bagian pendidikan dan sertifikat yang terpisah
- Testimoni klien
- Form kontak
- Siap deploy ke Vercel

---

## Teknologi yang Digunakan

- React JS 19
- Tailwind CSS 3
- Swiper JS (carousel)
- React Router DOM
- Google Fonts (Inter)
- Devicons CDN (logo teknologi)

---

## Struktur Folder

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   ├── Certificates.jsx
│   ├── Clients.jsx
│   └── Contact.jsx
├── data/
│   └── data.js
├── App.js
└── index.css
```

---

## Cara Menjalankan

Pastikan Node.js sudah terinstall di komputer. Kemudian jalankan perintah berikut secara berurutan.

Install dependencies:

```bash
npm install
```

Jalankan di mode development:

```bash
npm start
```

Aplikasi akan berjalan di `http://localhost:3000`.

---

## Build untuk Production

```bash
npm run build
```

Hasil build akan tersimpan di folder `build/` dan siap untuk di-deploy.

---

## Deploy ke Vercel

1. Push repository ke GitHub
2. Buka vercel.com dan login
3. Klik "Add New Project" lalu pilih repository ini
4. Framework akan terdeteksi otomatis sebagai Create React App
5. Klik Deploy

File `vercel.json` sudah disertakan untuk menangani routing SPA agar tidak terjadi 404 saat refresh halaman.

---

## Kustomisasi Konten

Semua data konten dikelola melalui satu file:

```
src/data/data.js
```

File ini berisi data untuk skills, services, portfolios, education, certificates, dan clients. Cukup ubah isi file tersebut untuk memperbarui konten tanpa menyentuh komponen.

Untuk mengubah informasi kontak seperti email, nomor WhatsApp, dan link media sosial, edit langsung di file `src/components/Contact.jsx`.

---

## Lisensi

Proyek ini bersifat pribadi dan tidak untuk didistribusikan ulang tanpa izin dari pemilik.
