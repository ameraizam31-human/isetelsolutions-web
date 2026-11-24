# isetelsolutions.my

Laman utama I Setel Solutions dan halaman pautan (`/pautan`) untuk profil media sosial.

```
public/                  # fail statik yang diterbitkan (laman utama, /pautan, gambar)
public/_headers          # header keselamatan Cloudflare Pages
functions/api/chat.js    # Cloudflare Pages Function: proksi chat ke Groq (POST /api/chat)
```

## Hosting: Cloudflare Pages

- Projek Pages: `isetelsolutions`, disambung ke repo ini, cabang produksi `main`.
- Tetapan binaan: tiada arahan binaan, direktori output `public`.
- Rahsia: `GROQ_API_KEY` (Settings → Variables and Secrets, jenis Secret). Masukkan sendiri dalam papan pemuka; jangan simpan dalam repo.
- Domain: `isetelsolutions.my` dan `www.isetelsolutions.my` ditambah sebagai Custom domains projek ini.

## Chat

`public/index.html` menghantar `POST /api/chat` dengan `{ "message": "...", "history": [...] }`.
Fungsi menyemak asal permintaan (domain sendiri dan pratonton `*.isetelsolutions.pages.dev`),
had 1000 aksara, 10 giliran sejarah, 20 permintaan setiap 10 minit bagi setiap IP (anggaran sahaja,
per isolate), dan 500 token jawapan. Arahan sistem (fakta syarikat, harga tap.) ada dalam
`functions/api/chat.js`: kemas kini bersama `public/index.html` bila harga atau servis berubah.
Letakkan had perbelanjaan pada akaun Groq sebagai benteng sebenar.

## Borang hubungi

Borang membuka WhatsApp (+60 13-997 2853) dengan mesej yang sudah diisi. Tiada pelayan atau
penyimpanan data borang.

## Halaman /pautan

`public/pautan/index.html`: satu pautan tetap untuk bio TikTok, Facebook dan lain-lain.
Bila kempen bertukar, ubah susunan kad dalam fail ini; pautan dalam profil tidak perlu ditukar.

## Laman baharu (cawangan `laman-baharu`)

Astro + React + Tailwind. English di `/`, BM di `/ms/`.

| Folder | Isi |
| --- | --- |
| `src/` | Kod sumber. Teks laman dalam `src/i18n/copy.ts`, warna dan tulisan dalam `src/styles/global.css`. |
| `static/` | Fail yang disalin terus: `pautan/`, `_headers`, `media/` (gambar, video hero). |
| `public/` | Hasil binaan. Inilah yang dihidang Cloudflare Pages. |
| `functions/` | Pages Functions (`/api/chat`). |

Bina: `npm install`, kemudian `npm run build` (menulis ke `public/`).

Buat masa ini `public/` di-commit kerana projek Pages belum ada arahan bina.
Bila arahan bina `npm run build` ditetapkan dalam Cloudflare (direktori output kekal `public`),
masukkan `public/` ke dalam `.gitignore` dan buang daripada git.

Komponen pihak ketiga (kod sumber disalin, bukan pakej):
- Aceternity UI: `text-generate-effect`, `3d-card`, `tracing-beam` (`src/components/ui/`).
- Tubelight Navbar (Serenity UI, MIT; disenaraikan di 21st.dev): asas pil nav dalam `src/components/SiteNav.tsx`.
- shadcn/ui: corak `Button` (`src/components/ui/button.tsx`).

Video hero: letak `static/media/hero-loop.mp4`. Tanpa fail itu, hero memaparkan gambar pegun sahaja.

## Laman Project Aether

Kod dalam `aether/`, konfigurasi `astro.aether.config.mjs`, hasil binaan dalam `aether-public/`
(dihidang oleh projek Cloudflare Pages berasingan untuk `aether.isetelsolutions.my`).
Bina: `npm run build:aether`. Video hero: `aether/static/media/hero-loop.mp4`.
