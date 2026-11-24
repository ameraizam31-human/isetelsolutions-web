// Semua teks laman. English ialah lalai; BM di /ms/.
// Peraturan: tiada angka yang tidak diukur, dan tiada dakwaan yang belum terbukti.

export type Lang = 'en' | 'ms';

export const links = {
  whatsapp: 'https://wa.me/60139972853',
  email: 'mailto:support@isetelsolutions.my',
  tap: 'https://tap.isetelsolutions.my',
  susunjalan: 'https://susunjalan.isetelsolutions.my',
  aether: 'https://aether.isetelsolutions.my',
  linkedin: 'https://www.linkedin.com/in/amer-aizam-ai/',
  github: 'https://github.com/ameraizam31-human',
  telegram: 'https://t.me/isetelsolutions',
  tiktok: 'https://www.tiktok.com/@isetelsolutionss',
};

const wa = (text: string) => `${links.whatsapp}?text=${encodeURIComponent(text)}`;

export const copy = {
  en: {
    meta: {
      title: 'I Setel Solutions | AI and automation studio in Klang, Malaysia',
      description:
        'I Setel Solutions builds its own products (tap., SusunJalan) and custom AI and automation systems for businesses in Malaysia.',
    },
    nav: {
      products: 'Products',
      about: 'About',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      skip: 'Skip to content',
      langLabel: 'Language',
    },
    hero: {
      title: 'Repetitive work, settled.',
      lead: 'I Setel Solutions is an AI and automation studio in Klang, Malaysia. We build our own products, and custom systems for businesses that want less manual work.',
      primary: 'See what we build',
      secondary: 'WhatsApp us',
      waText: 'Hi I Setel, I would like to ask about your services.',
      imageAlt: 'A white robot arm arranging small white blocks in a row on a wooden desk, in soft morning light.',
      statusLabel: 'What is running now',
      status: [
        { name: 'tap.', state: 'live', label: 'live' },
        { name: 'SusunJalan', state: 'live', label: 'live' },
        { name: 'Aether', state: 'rnd', label: 'in R&D' },
      ],
    },
    about: {
      title: 'Technology should solve practical problems.',
      body: [
        'That is the idea I Setel was registered on in 2025, and it still decides what we build.',
        'Some of it we build for ourselves: tap. for shop counters, SusunJalan for delivery riders. Some of it we build for clients: chatbots, document data extraction, workflow automation and other AI systems that take routine work off a team.',
        'We are small and founder-led, so the person you talk to is the person who builds it.',
      ],
      facts: [
        { k: 'Based in', v: 'Klang, Selangor' },
        { k: 'Registered', v: 'SSM 202503352257' },
        { k: 'Founder', v: 'Amer Aizam' },
        { k: 'We work in', v: 'English and Bahasa Malaysia' },
      ],
    },
    products: {
      title: 'What we build',
      lead: 'Two products are live. One is early research.',
      live: 'Live',
      rnd: 'In R&D',
      tap: {
        tagline: 'Tap sikit. Terus settle.',
        body: 'A card or stand for your counter. Customers tap or scan, and it opens the action you choose: a Google review, a WhatsApp chat, your menu or a payment link. Nothing to install.',
        facts: ['NFC + QR', 'Card or stand'],
        price: 'From RM29.90',
        cta: 'Visit tap.',
        imageAlt: 'A white tap. card with a tap-here symbol and a QR code.',
      },
      susunjalan: {
        tagline: 'For riders who stack deliveries.',
        body: 'Add your orders from a screenshot and SusunJalan works out which stop comes first, then hands each stop to your navigation app.',
        facts: ['Runs in the browser', 'Free to start'],
        cta: 'Open SusunJalan',
        tester: 'We are recruiting 20 rider testers. Testers get Pro free for 30 days.',
        testerCta: 'Become a tester',
        testerWa: 'Hi, I ride deliveries and I would like to be a SusunJalan tester.',
        imageAlt: 'SusunJalan showing three stops in order: Bandar Saujana Utama, Jeram, Meru.',
      },
      aether: {
        tagline: 'An algae-based bioreactor project.',
        body: 'Early-stage research. A founding team of four covers bioprocess engineering, enzyme biotechnology, lab operations and safety. Lab work begins once funding is in place, and the plan is to move Aether into its own Sdn. Bhd. Nothing is proven yet.',
        cta: 'Visit the Aether site',
        mailSubject: 'Project Aether',
      },
    },
    contact: {
      title: 'Tell us what is slowing you down.',
      lead: 'WhatsApp is fastest. Email works too.',
      whatsapp: 'WhatsApp us',
      email: 'support@isetelsolutions.my',
      elsewhere: 'Elsewhere',
      allLinks: 'All links',
      rights: 'All rights reserved.',
    },
  },
  ms: {
    meta: {
      title: 'I Setel Solutions | Studio AI dan automasi di Klang',
      description:
        'I Setel Solutions membina produk sendiri (tap., SusunJalan) serta sistem AI dan automasi khas untuk perniagaan di Malaysia.',
    },
    nav: {
      products: 'Produk',
      about: 'Tentang',
      contact: 'Hubungi',
      whatsapp: 'WhatsApp',
      skip: 'Terus ke kandungan',
      langLabel: 'Bahasa',
    },
    hero: {
      title: 'Kerja berulang, kami setelkan.',
      lead: 'I Setel Solutions ialah studio AI dan automasi di Klang. Kami bina produk sendiri, dan sistem khas untuk perniagaan yang mahu kurangkan kerja manual.',
      primary: 'Tengok apa kami bina',
      secondary: 'WhatsApp kami',
      waText: 'Hai I Setel, saya nak tanya tentang servis anda.',
      imageAlt: 'Lengan robot putih menyusun blok putih kecil sebaris di atas meja kayu, dalam cahaya pagi yang lembut.',
      statusLabel: 'Apa yang sedang berjalan',
      status: [
        { name: 'tap.', state: 'live', label: 'live' },
        { name: 'SusunJalan', state: 'live', label: 'live' },
        { name: 'Aether', state: 'rnd', label: 'dalam R&D' },
      ],
    },
    about: {
      title: 'Teknologi patut selesaikan masalah sebenar.',
      body: [
        'Itu idea asal I Setel semasa didaftarkan pada 2025, dan itu juga yang menentukan apa kami bina sampai sekarang.',
        'Sebahagiannya kami bina untuk diri sendiri: tap. untuk kaunter kedai, SusunJalan untuk rider penghantaran. Sebahagian lagi untuk pelanggan: chatbot, pengekstrakan data dokumen, automasi aliran kerja dan sistem AI lain yang mengambil alih kerja rutin daripada pasukan anda.',
        'Kami kecil dan diterajui pengasas sendiri, jadi orang yang anda hubungi ialah orang yang membina sistemnya.',
      ],
      facts: [
        { k: 'Lokasi', v: 'Klang, Selangor' },
        { k: 'Pendaftaran', v: 'SSM 202503352257' },
        { k: 'Pengasas', v: 'Amer Aizam' },
        { k: 'Bahasa kerja', v: 'Bahasa Malaysia dan English' },
      ],
    },
    products: {
      title: 'Apa yang kami bina',
      lead: 'Dua produk sudah live. Satu lagi penyelidikan peringkat awal.',
      live: 'Live',
      rnd: 'Dalam R&D',
      tap: {
        tagline: 'Tap sikit. Terus settle.',
        body: 'Kad atau stand untuk kaunter anda. Pelanggan tap atau imbas, terus buka tindakan yang anda pilih: review Google, chat WhatsApp, menu atau pautan bayaran. Tak perlu pasang apa-apa.',
        facts: ['NFC + QR', 'Kad atau stand'],
        price: 'Dari RM29.90',
        cta: 'Lawat tap.',
        imageAlt: 'Kad tap. berwarna putih dengan simbol tap dan kod QR.',
      },
      susunjalan: {
        tagline: 'Untuk rider yang kapit order.',
        body: 'Masukkan order daripada screenshot dan SusunJalan susun stop mana dulu, kemudian buka setiap stop dalam app navigasi anda.',
        facts: ['Guna terus dalam browser', 'Percuma untuk mula'],
        cta: 'Buka SusunJalan',
        tester: 'Kami sedang cari 20 rider tester. Tester dapat Pro percuma 30 hari.',
        testerCta: 'Jadi tester',
        testerWa: 'Hai, saya rider dan saya nak jadi tester SusunJalan.',
        imageAlt: 'SusunJalan menunjukkan tiga stop mengikut turutan: Bandar Saujana Utama, Jeram, Meru.',
      },
      aether: {
        tagline: 'Projek bioreaktor berasaskan alga.',
        body: 'Penyelidikan peringkat awal. Pasukan pengasas empat orang meliputi kejuruteraan bioproses, bioteknologi enzim, operasi makmal dan keselamatan. Kerja makmal bermula selepas pembiayaan diperoleh, dan rancangannya Aether akan dipindahkan ke Sdn. Bhd. sendiri. Belum ada apa-apa yang terbukti.',
        cta: 'Lawat laman Aether',
        mailSubject: 'Project Aether',
      },
    },
    contact: {
      title: 'Beritahu kami apa yang melambatkan kerja anda.',
      lead: 'WhatsApp paling cepat. Emel pun boleh.',
      whatsapp: 'WhatsApp kami',
      email: 'support@isetelsolutions.my',
      elsewhere: 'Di tempat lain',
      allLinks: 'Semua pautan',
      rights: 'Hak cipta terpelihara.',
    },
  },
} as const;

export const waLink = wa;
export const path = (lang: Lang, hash = '') => (lang === 'ms' ? '/ms/' : '/') + hash;
