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
