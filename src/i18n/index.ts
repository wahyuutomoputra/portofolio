import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      title: 'Wahyu Utomo Putra',
      subtitle: 'Fullstack Developer | React Native Specialist',
      viewWork: 'View My Work',
      downloadCV: 'Download CV'
    },
    about: {
      title: 'About Me',
      description: "Hi! I'm Wahyu Utomo Putra, a Fullstack Developer focusing on mobile app development using React Native and backend development with Node.js, Express.js, and MySQL. I have over 6 years of experience in the technology industry, including at PLN Icon+, where I developed various scalable and efficient backend systems and APIs.",
      education: "I hold a Bachelor's degree from Binus University with a GPA of 3.8. In every project, I always prioritize code quality, application performance, and user experience.",
      skills: 'Core Skills',
      current: "🚀 Currently, I'm developing a 1-on-1 chat feature in a marketplace and a database-based rolling refresh token login system in Express.js. I'm also interested in AI & Face Recognition for attendance applications based on facial recognition."
    },
    projects: {
      title: 'Portfolio',
      subtitle: 'Explore my recent projects showcasing my expertise in mobile development, backend systems, and innovative solutions.',
      viewProject: 'View Project',
      privateNotice: 'Sorry, this application is private and cannot be accessed publicly.',
      viewOnGithub: 'View on GitHub',
      privacyNotice: 'Cannot display all features due to client privacy'
    },
    contact: {
      title: "Let's Connect",
      subtitle: 'Interested in discussing or collaborating? Feel free to reach out! 😊'
    }
  },
  id: {
    nav: {
      about: 'Tentang',
      projects: 'Proyek',
      contact: 'Kontak'
    },
    hero: {
      title: 'Wahyu Utomo Putra',
      subtitle: 'Fullstack Developer | Spesialis React Native',
      viewWork: 'Lihat Karya Saya',
      downloadCV: 'Unduh CV'
    },
    about: {
      title: 'Tentang Saya',
      description: 'Halo! Saya Wahyu Utomo Putra, seorang Fullstack Developer yang berfokus pada pengembangan mobile apps menggunakan React Native serta backend development dengan Node.js, Express.js, dan MySQL. Saya memiliki pengalaman lebih dari 6 tahun bekerja di industri teknologi, termasuk di PLN Icon+, di mana saya mengembangkan berbagai sistem backend dan API yang scalable serta efisien.',
      education: 'Saya memiliki latar belakang pendidikan S1 dari Binus University dengan IPK 3.8. Dalam setiap proyek, saya selalu berusaha mengutamakan kualitas kode, performa aplikasi, dan pengalaman pengguna.',
      skills: 'Keahlian Utama',
      current: '🚀 Saat ini saya sedang mengembangkan fitur chat 1-on-1 dalam marketplace serta sistem login dengan rolling refresh token berbasis database di Express.js. Saya juga memiliki ketertarikan dalam AI & Face Recognition untuk aplikasi absensi berbasis pengenalan wajah.'
    },
    projects: {
      title: 'Portofolio',
      subtitle: 'Jelajahi proyek-proyek terbaru saya yang menampilkan keahlian dalam pengembangan mobile, sistem backend, dan solusi inovatif.',
      viewProject: 'Lihat Proyek',
      privateNotice: 'Maaf, aplikasi ini bersifat private dan tidak dapat diakses publik.',
      viewOnGithub: 'Lihat di GitHub',
      privacyNotice: 'Tidak dapat menampilkan semua fitur karena privasi client'
    },
    contact: {
      title: 'Mari Terhubung',
      subtitle: 'Jika tertarik untuk berdiskusi atau berkolaborasi, jangan ragu untuk menghubungi saya! 😊'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
}) 