// Teks untuk bahagian servis, cara kerja, pengasas, soalan lazim dan chat.
// Angka sijil diambil daripada LinkedIn pada November 2026: kemas kini bila bertambah.
// "Sijil kursus" bukan pensijilan profesional, jadi jangan tulis "certified".

export const moreLinks = {
  linkedinCerts: 'https://www.linkedin.com/in/amer-aizam-ai/details/certifications/',
  repo: (name: string) => `https://github.com/ameraizam31-human/${name}`,
};

export const more = {
  en: {
    nav: { services: 'Services', faq: 'FAQ' },
    services: {
      title: 'AI and automation, built to order',
      lead: 'Tell us the routine work you want off your team. We design it, build it and stay on after launch.',
      cta: 'Ask for a free quote',
      waText: 'Hi I Setel, I would like a quote for an AI or automation project.',
      stackLabel: 'Built with',
      items: [
        {
          name: 'AI chatbot',
          body: 'Answers customer or staff questions from your own documents and FAQs, in English and Bahasa Malaysia.',
          stack: 'Retrieval (RAG) with Claude or open models',
        },
        {
          name: 'Document data extraction',
          body: 'Turns invoices, forms and PDFs into structured data your systems can use.',
          stack: 'Python, FastAPI, JSON schemas',
        },
        {
          name: 'Agentic workflows',
          body: 'AI agents that carry out multi-step tasks across your tools, with a person approving the steps that matter.',
          stack: 'Claude Agent SDK, Python',
        },
        {
          name: 'LLM integration',
          body: 'Connects a language model to the systems you already run, with access limited to what it needs.',
          stack: 'Model Context Protocol (MCP)',
        },
        {
          name: 'Workflow automation',
          body: 'Removes copy-and-paste work between spreadsheets, forms, email and chat.',
          stack: 'Python, APIs, scheduled jobs',
        },
        {
          name: 'Dashboards and reports',
          body: 'Reports that update themselves instead of being rebuilt by hand every week.',
          stack: 'Streamlit, SQL',
        },
      ],
    },
    process: {
      title: 'How a project runs',
      lead: 'Five steps, the same every time.',
      steps: [
        {
          name: 'Talk',
          body: 'You tell us what is slowing the team down. We ask about the tools and data you already have.',
        },
        {
          name: 'Quote',
          body: 'You get a free written quote with scope, timeline and price. Work starts once the deposit is paid.',
        },
        {
          name: 'Design',
          body: 'We map the workflow and build a small prototype, so you can see it working before the full build.',
        },
        {
          name: 'Build',
          body: 'We build in short rounds and show you progress as we go, so changes stay cheap.',
        },
        {
          name: 'Launch and support',
          body: 'We deploy it, show your team how to use it, and stay on for fixes and improvements.',
        },
      ],
    },
    founder: {
      title: 'Who builds it',
      name: 'Amer Aizam',
      role: 'Founder, I Setel Solutions',
      photoAlt: 'Amer Aizam',
      bio: 'Amer handles systems, AI and product: Python, automation and AI agents. He writes the code, talks to clients and keeps studying. The course certificates here are listed on LinkedIn.',
      certsTitle: 'Training and course certificates',
      certsNote: '28 listed on LinkedIn as of November 2026.',
      certsCta: 'See all on LinkedIn',
      groups: [
        {
          issuer: 'Amazon Web Services',
          count: 11,
          items: 'Generative AI for Executives, Responsible AI Practices, Machine Learning Basics, Well-Architected for Enterprises',
        },
        {
          issuer: 'Hugging Face',
          count: 8,
          items: 'Deep Reinforcement Learning Course, Agents Course, MCP Course, LLM post-training (smol course)',
        },
        {
          issuer: 'Anthropic',
          count: 5,
          items: 'Claude Code in Action, Introduction to Agent Skills, Introduction to Subagents, Claude 101, AI Fluency Framework',
        },
        {
          issuer: 'Nexperts Academy, IBM, Sololearn, LinkedIn Learning',
          count: 4,
          items: 'AI & Machine Learning Bootcamp, Recommender Systems with Gaussian Mixture Models, Project Planning with AI, What Is Generative AI?',
        },
      ],
      codeTitle: 'Code on GitHub',
      githubCta: 'All repositories',
      repos: [
        { name: 'Django_Movie_Recommender_Ai', body: 'A movie recommendation engine built with Django and machine learning.' },
        { name: 'Warehouse-Forklift-IoT-Dashboard', body: 'A warehouse forklift IoT dashboard, in Python.' },
        { name: 'Machine_Learning_NX_AC', body: 'Supervised and unsupervised machine learning models, including linear regression.' },
      ],
    },
    faq: {
      title: 'Prices and common questions',
      prices: [
        { k: 'Prototype', v: 'from RM550' },
        { k: 'Monthly retainer', v: 'from RM350' },
        { k: 'Consultation', v: 'RM135 an hour' },
      ],
      priceNote: 'Every project starts with a free written quote.',
      items: [
        {
          q: 'How long does a build take?',
          a: 'A prototype is typically ready in 2 to 4 weeks. Larger systems with several integrations usually take 6 to 12 weeks. You see progress along the way.',
        },
        {
          q: 'How is our data handled?',
          a: "We agree on it before any work starts: what is stored, where, and who can see it. Options include running open models on your own server so the data never leaves it, and using providers that do not retain your data. For personal data we design with Malaysia's PDPA in mind.",
        },
        {
          q: 'Which languages can the AI handle?',
          a: 'English and Bahasa Malaysia, including the mixed everyday language people actually type. Other languages are possible depending on the model, and we test with your real examples before committing.',
        },
        {
          q: 'What do you need from us to start?',
          a: 'A short description of the problem, a few examples of the documents or data involved, and one person who can answer questions.',
        },
      ],
    },
    chat: {
      open: 'Ask a question',
      title: 'Ask I Setel',
      greeting: 'Hi. Ask about tap., SusunJalan or our AI services.',
      placeholder: 'Type your question',
      send: 'Send',
      close: 'Close chat',
      note: 'Answers are written by AI and can be wrong. For a quote, WhatsApp us.',
      offline: 'The assistant is not available right now. WhatsApp us and a person will reply.',
      waCta: 'Open WhatsApp',
      thinking: 'Writing a reply…',
    },
  },
  ms: {
    nav: { services: 'Servis', faq: 'Soalan' },
    services: {
      title: 'AI dan automasi, dibina ikut keperluan',
      lead: 'Beritahu kami kerja rutin yang anda mahu kurangkan daripada pasukan anda. Kami reka, bina dan terus bantu selepas dilancarkan.',
      cta: 'Minta sebut harga percuma',
      waText: 'Hai I Setel, saya nak minta sebut harga untuk projek AI atau automasi.',
      stackLabel: 'Dibina dengan',
      items: [
        {
          name: 'Chatbot AI',
          body: 'Menjawab soalan pelanggan atau staf berdasarkan dokumen dan FAQ anda sendiri, dalam Bahasa Malaysia dan English.',
          stack: 'Carian dokumen (RAG) dengan Claude atau model terbuka',
        },
        {
          name: 'Pengekstrakan data dokumen',
          body: 'Menukar invois, borang dan PDF kepada data berstruktur yang boleh digunakan oleh sistem anda.',
          stack: 'Python, FastAPI, skema JSON',
        },
        {
          name: 'Aliran kerja agen AI',
          body: 'Agen AI yang menjalankan tugas berbilang langkah merentas alat kerja anda, dengan kelulusan manusia pada langkah yang penting.',
          stack: 'Claude Agent SDK, Python',
        },
        {
          name: 'Integrasi LLM',
          body: 'Menyambungkan model bahasa kepada sistem sedia ada anda, dengan akses terhad kepada apa yang diperlukan sahaja.',
          stack: 'Model Context Protocol (MCP)',
        },
        {
          name: 'Automasi aliran kerja',
          body: 'Menghapuskan kerja salin dan tampal antara spreadsheet, borang, emel dan chat.',
          stack: 'Python, API, kerja berjadual',
        },
        {
          name: 'Dashboard dan laporan',
          body: 'Laporan yang mengemas kini sendiri, tak perlu dibina semula setiap minggu.',
          stack: 'Streamlit, SQL',
        },
      ],
    },
    process: {
      title: 'Cara projek berjalan',
      lead: 'Lima langkah, sama setiap kali.',
      steps: [
        {
          name: 'Bincang',
          body: 'Anda ceritakan apa yang melambatkan pasukan. Kami tanya tentang alat dan data yang anda sudah ada.',
        },
        {
          name: 'Sebut harga',
          body: 'Anda terima sebut harga bertulis percuma: skop, tempoh dan harga. Kerja bermula selepas deposit dibayar.',
        },
        {
          name: 'Reka bentuk',
          body: 'Kami petakan aliran kerja dan bina prototaip kecil, supaya anda nampak ia berfungsi sebelum binaan penuh.',
        },
        {
          name: 'Bina',
          body: 'Kami bina dalam pusingan pendek dan tunjukkan kemajuan sepanjang jalan, supaya perubahan kekal murah.',
        },
        {
          name: 'Lancar dan sokongan',
          body: 'Kami pasang, tunjukkan cara guna kepada pasukan anda, dan terus bantu untuk pembaikan dan penambahbaikan.',
        },
      ],
    },
    founder: {
      title: 'Siapa yang membina',
      name: 'Amer Aizam',
      role: 'Pengasas, I Setel Solutions',
      photoAlt: 'Amer Aizam',
      bio: 'Amer mengendalikan sistem, AI dan produk: Python, automasi dan agen AI. Dia menulis kod, berurusan dengan pelanggan dan terus belajar. Sijil kursus di sini disenaraikan di LinkedIn.',
      certsTitle: 'Latihan dan sijil kursus',
      certsNote: '28 disenaraikan di LinkedIn setakat November 2026.',
      certsCta: 'Lihat semua di LinkedIn',
      groups: [
        {
          issuer: 'Amazon Web Services',
          count: 11,
          items: 'Generative AI for Executives, Responsible AI Practices, Machine Learning Basics, Well-Architected for Enterprises',
        },
        {
          issuer: 'Hugging Face',
          count: 8,
          items: 'Deep Reinforcement Learning Course, Agents Course, MCP Course, LLM post-training (smol course)',
        },
        {
          issuer: 'Anthropic',
          count: 5,
          items: 'Claude Code in Action, Introduction to Agent Skills, Introduction to Subagents, Claude 101, AI Fluency Framework',
        },
        {
          issuer: 'Nexperts Academy, IBM, Sololearn, LinkedIn Learning',
          count: 4,
          items: 'AI & Machine Learning Bootcamp, Recommender Systems with Gaussian Mixture Models, Project Planning with AI, What Is Generative AI?',
        },
      ],
      codeTitle: 'Kod di GitHub',
      githubCta: 'Semua repositori',
      repos: [
        { name: 'Django_Movie_Recommender_Ai', body: 'Enjin cadangan filem yang dibina dengan Django dan machine learning.' },
        { name: 'Warehouse-Forklift-IoT-Dashboard', body: 'Dashboard IoT forklift gudang, dalam Python.' },
        { name: 'Machine_Learning_NX_AC', body: 'Model machine learning supervised dan unsupervised, termasuk linear regression.' },
      ],
    },
    faq: {
      title: 'Harga dan soalan lazim',
      prices: [
        { k: 'Prototaip', v: 'dari RM550' },
        { k: 'Retainer bulanan', v: 'dari RM350' },
        { k: 'Konsultasi', v: 'RM135 sejam' },
      ],
      priceNote: 'Setiap projek bermula dengan sebut harga bertulis percuma.',
      items: [
        {
          q: 'Berapa lama masa binaan?',
          a: 'Prototaip biasanya siap dalam 2 hingga 4 minggu. Sistem lebih besar dengan beberapa integrasi biasanya mengambil 6 hingga 12 minggu. Anda nampak kemajuan sepanjang jalan.',
        },
        {
          q: 'Bagaimana data kami dikendalikan?',
          a: 'Kita persetujui dahulu sebelum kerja bermula: apa yang disimpan, di mana, dan siapa boleh lihat. Antara pilihannya: menjalankan model terbuka di server anda sendiri supaya data tidak keluar, atau menggunakan penyedia yang tidak menyimpan data anda. Untuk data peribadi, kami mereka bentuk dengan mengambil kira PDPA Malaysia.',
        },
        {
          q: 'Bahasa apa yang AI boleh kendalikan?',
          a: 'Bahasa Malaysia dan English, termasuk bahasa campur harian yang orang betul-betul taip. Bahasa lain boleh, bergantung pada model, dan kami uji dengan contoh sebenar anda sebelum memberi komitmen.',
        },
        {
          q: 'Apa yang anda perlukan daripada kami untuk mula?',
          a: 'Penerangan ringkas tentang masalahnya, beberapa contoh dokumen atau data yang terlibat, dan seorang yang boleh menjawab soalan.',
        },
      ],
    },
    chat: {
      open: 'Tanya soalan',
      title: 'Tanya I Setel',
      greeting: 'Hai. Tanya tentang tap., SusunJalan atau servis AI kami.',
      placeholder: 'Taip soalan anda',
      send: 'Hantar',
      close: 'Tutup chat',
      note: 'Jawapan ditulis oleh AI dan boleh silap. Untuk sebut harga, WhatsApp kami.',
      offline: 'Pembantu tidak tersedia buat masa ini. WhatsApp kami dan orang sebenar akan balas.',
      waCta: 'Buka WhatsApp',
      thinking: 'Sedang menulis jawapan…',
    },
  },
} as const;
