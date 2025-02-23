<script setup lang="ts">
import { ref, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

const { y } = useWindowScroll()
const isScrolled = ref(false)

// Watch scroll position for navbar styling
watch(y, (newY) => {
  isScrolled.value = newY > 50
})

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Sistem Absensi Berbasis Face Recognition',
    description: 'Aplikasi absensi menggunakan React Native dan Express.js dengan fitur pengenalan wajah menggunakan OpenCV dan TensorFlow untuk validasi kehadiran karyawan.',
    image: 'https://images.unsplash.com/photo-1587778082149-bd5b1bf5d3fa?q=80&w=800',
    technologies: ['React Native', 'Express.js', 'OpenCV', 'TensorFlow', 'MySQL'],
    link: 'https://github.com/yourusername/face-recognition'
  },
  {
    id: 2,
    title: 'Sistem Chat 1-on-1 dalam Marketplace',
    description: 'Sistem chat real-time antara user dan toko menggunakan WebSocket, dengan penyimpanan pesan terenkripsi dan status online/offline.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800',
    technologies: ['React Native', 'Node.js', 'WebSocket', 'MySQL'],
    link: 'https://github.com/yourusername/marketplace-chat'
  },
  {
    id: 3,
    title: 'Sistem Autentikasi dengan Rolling Refresh Token',
    description: 'Implementasi sistem login dengan rolling refresh token, HTTP-Only Cookie, dan manajemen sesi berbasis database di Express.js.',
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800',
    technologies: ['Node.js', 'Express.js', 'JWT', 'MySQL'],
    link: 'https://github.com/yourusername/auth-system'
  },
  {
    id: 4,
    title: 'API Backend untuk Aplikasi Mobile',
    description: 'API backend dengan performa tinggi menggunakan CodeIgniter 4 dan Laravel, fokus pada keamanan data dan RESTful architecture.',
    image: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=800',
    technologies: ['CodeIgniter 4', 'Laravel', 'MySQL', 'REST API'],
    link: 'https://github.com/yourusername/mobile-api'
  }
])

// Add skills data
const skills = ref([
  'React Native',
  'TypeScript',
  'Node.js',
  'Express.js',
  'MySQL',
  'CodeIgniter 4',
  'Laravel',
  'PHP',
  'CI/CD',
  'SQL Server',
  'PostgreSQL',
])

// Add smooth scroll function
function scrollToProjects() {
  const projectsSection = document.getElementById('projects')
  projectsSection?.scrollIntoView({ behavior: 'smooth' })
}

// Add download CV function
function downloadCV() {
  // Create link to download
  const link = document.createElement('a')
  link.href = '/cv-wahyu-utomo.pdf'
  link.download = 'CV-Wahyu-Utomo.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Skip to main content for accessibility -->
    <a href="#main-content" 
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded-md">
      Skip to main content
    </a>

    <!-- Navbar -->
    <nav role="navigation" aria-label="Main navigation" :class="[
      'fixed w-full z-50 transition-all duration-300 backdrop-blur-sm',
      isScrolled ? 'bg-white/80 shadow-lg' : 'bg-transparent'
    ]">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 class="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
          Wahyu Utomo
        </h1>
        <div class="flex gap-8">
          <a href="#about" class="hover:text-green-600 transition-all hover:scale-105">About</a>
          <a href="#projects" class="hover:text-green-600 transition-all hover:scale-105">Projects</a>
          <a href="#contact" class="hover:text-green-600 transition-all hover:scale-105">Contact</a>
        </div>
      </div>
    </nav>

    <main id="main-content">
      <!-- Hero Section -->
      <section aria-label="Introduction" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div class="text-center px-4">
          <div class="mb-8 text-green-600">
            <svg class="w-16 h-16 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent">
            Wahyu Utomo Putra
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Fullstack Developer | React Native Specialist
          </p>
          <div class="flex gap-4 justify-center">
            <button 
              @click="scrollToProjects"
              class="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all hover:scale-105 hover:shadow-lg">
              View My Work
            </button>
            <button 
              @click="downloadCV"
              class="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-all hover:scale-105">
              <span class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </span>
            </button>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" aria-label="About Me" class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-12">About Me</h2>
          <div class="max-w-4xl mx-auto">
            <p class="text-lg text-gray-700 mb-6">
              Halo! Saya Wahyu Utomo Putra, seorang Fullstack Developer yang berfokus pada pengembangan mobile apps menggunakan React Native serta backend development dengan Node.js, Express.js, dan MySQL. Saya memiliki pengalaman lebih dari 6 tahun bekerja di industri teknologi, termasuk di PLN Icon+, di mana saya mengembangkan berbagai sistem backend dan API yang scalable serta efisien.
            </p>
            <p class="text-lg text-gray-700 mb-6">
              Saya memiliki latar belakang pendidikan S1 dari Binus University dengan IPK 3.8. Dalam setiap proyek, saya selalu berusaha mengutamakan kualitas kode, performa aplikasi, dan pengalaman pengguna.
            </p>
            
            <h3 class="text-2xl font-semibold mb-4">Keahlian Utama</h3>
            <div class="flex flex-wrap gap-3 mb-8">
              <span v-for="skill in skills" :key="skill"
                class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                {{ skill }}
              </span>
            </div>

            <p class="text-lg text-gray-700 mb-6">
              🚀 Saat ini saya sedang mengembangkan fitur chat 1-on-1 dalam marketplace serta sistem login dengan rolling refresh token berbasis database di Express.js. Saya juga memiliki ketertarikan dalam AI & Face Recognition untuk aplikasi absensi berbasis pengenalan wajah.
            </p>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" aria-label="Portfolio Projects" class="py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-4">Portfolio</h2>
          <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore my recent projects showcasing my expertise in mobile development, backend systems, and innovative solutions.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="project in projects" :key="project.id"
              class="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div class="relative overflow-hidden">
                <img :src="project.image" :alt="project.title" 
                  class="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" 
                  loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold mb-3 text-gray-800">{{ project.title }}</h3>
                <p class="text-gray-600 mb-4 line-clamp-3">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="tech in project.technologies" :key="tech"
                    class="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium hover:bg-green-100 transition-colors">
                    {{ tech }}
                  </span>
                </div>
                <a :href="project.link" target="_blank" rel="noopener"
                  class="inline-flex items-center text-green-600 hover:text-green-800 font-medium group">
                  View Project 
                  <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" aria-label="Contact Information" class="py-20 bg-gradient-to-b from-white to-green-50">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold mb-8">Mari Terhubung</h2>
          <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Jika tertarik untuk berdiskusi atau berkolaborasi, jangan ragu untuk menghubungi saya! 😊
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/6281347055461" target="_blank" rel="noopener"
              class="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105">
              <span class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp
              </span>
            </a>
            <a href="mailto:wahyuutomoputra@gmail.com"
              class="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105">
              <span class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </span>
            </a>
            <a href="https://www.linkedin.com/in/wahyu-utomo-putra-500526139/" target="_blank" rel="noopener"
              class="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105">
              <span class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </span>
            </a>
            <a href="https://github.com/wahyuutomoputra/" target="_blank" rel="noopener"
              class="group bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105">
              <span class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo" class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <p class="mb-4">© {{ new Date().getFullYear() }} Wahyu Utomo Putra. All rights reserved.</p>
        <div class="flex justify-center space-x-4 text-gray-400">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  </div>
</template>
