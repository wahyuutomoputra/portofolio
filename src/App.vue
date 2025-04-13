<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useWindowScroll } from "@vueuse/core";
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import Footer from "./components/Footer.vue";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  screenshots?: string[]; // Optional array of screenshot paths
}

const { y } = useWindowScroll();
const isScrolled = ref(false);
const { t, locale } = useI18n();
const isLanguageDropdownOpen = ref(false);

// Watch scroll position for navbar styling
watch(y, (newY) => {
  isScrolled.value = newY > 50;
});

const projects = ref<Project[]>([
  {
    id: 1,
    title:
      locale.value === "en"
        ? "Retailer Marketplace Platform"
        : "Platform Marketplace untuk Pengecer",
    description:
      locale.value === "en"
        ? "A comprehensive marketplace platform connecting retailers with suppliers, featuring real-time inventory management, order tracking, and integrated payment systems. Built with React Native for mobile and Express.js backend."
        : "Platform marketplace yang menghubungkan pengecer dengan supplier, dilengkapi dengan manajemen inventaris real-time, pelacakan pesanan, dan sistem pembayaran terintegrasi. Dibangun dengan React Native untuk mobile dan Express.js backend.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
    technologies: [
      "React Native",
      "CodeIgniter 4",
      "MySQL",
      "Biometric Authentication",
    ],
    link: "private",
    screenshots: [
      "/kanvas/1.jpeg",
      "/kanvas/2.jpeg",
      "/kanvas/3.jpeg",
      "/kanvas/4.jpeg",
    ],
  },
  {
    id: 2,
    title:
      locale.value === "en"
        ? "1-on-1 Chat System in Marketplace"
        : "Sistem Chat 1-on-1 dalam Marketplace",
    description:
      locale.value === "en"
        ? "Real-time chat system between users and stores using WebSocket, with encrypted message storage and online/offline status."
        : "Sistem chat real-time antara user dan toko menggunakan WebSocket, dengan penyimpanan pesan terenkripsi dan status online/offline.",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800",
    technologies: ["React Native", "Node.js", "WebSocket", "MySQL"],
    link: "private",
  },
  {
    id: 3,
    title:
      locale.value === "en"
        ? "Asset Management System API"
        : "API Sistem Manajemen Aset",
    description:
      locale.value === "en"
        ? "RESTful API service built with Express.js featuring secure authentication with JWT rolling refresh tokens, HTTP-Only cookies for enhanced security, and database-driven session management. Includes comprehensive endpoints for asset tracking, user management, and reporting functionalities."
        : "Layanan API RESTful dibangun dengan Express.js dilengkapi autentikasi aman menggunakan JWT rolling refresh token, HTTP-Only cookie untuk keamanan tinggi, dan manajemen sesi berbasis database. Mencakup endpoint lengkap untuk pelacakan aset, manajemen pengguna, dan fungsionalitas pelaporan.",
    image:
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800",
    technologies: ["Node.js", "Express.js", "JWT", "MySQL", "TypeScript"],
    link: "https://github.com/wahyuutomoputra/node-pmi-be",
  },
  {
    id: 4,
    title:
      locale.value === "en"
        ? "Mobile Application for Asset Management"
        : "Aplikasi Mobile untuk Manajemen Asset",
    description:
      locale.value === "en"
        ? "Mobile application for tracking and managing company assets using React Native and Express.js. Equipped with barcode scanning, geolocation, and reporting dashboard features."
        : "Aplikasi mobile untuk tracking dan manajemen asset perusahaan menggunakan React Native dan Express.js. Dilengkapi dengan fitur barcode scanning, geolocation, dan reporting dashboard.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    technologies: [
      "React Native",
      "Express.js",
      "MySQL",
      "Barcode Scanner",
      "Download File",
    ],
    link: "private",
    screenshots: ["/meyz/1.jpeg", "/meyz/2.jpeg", "/meyz/3.jpeg"],
  },
  {
    id: 5,
    title: "Yomi Match",
    description:
      locale.value === "en"
        ? "A Japanese writing system learning app that helps you master different writing systems through interactive matching exercises."
        : "Aplikasi pembelajaran sistem penulisan Jepang yang membantu Anda menguasai berbagai sistem penulisan melalui latihan pencocokan interaktif.",
    image:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800",
    technologies: ["React.js", "Next.js", "Tailwind CSS"],
    link: "https://github.com/wahyuutomoputra/yomi-match",
    screenshots: [
      "/yomi/1.png",
      "/yomi/2.png",
      "/yomi/3.png",
      "/yomi/4.png",
      "/yomi/5.png",
      "/yomi/6.png",
      "/yomi/7.png",
    ],
  },
  {
    id: 6,
    title: "Absence Management System API",
    description:
      locale.value === "en"
        ? "RESTful API for managing employee attendance, leave requests, and work schedules."
        : "API RESTful untuk mengelola kehadiran karyawan, pengajuan cuti, dan jadwal kerja.",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800",
    technologies: ["Golang", "Gin", "Gorm", "MySQL", "JWT", "Swagger"],
    link: "https://github.com/wahyuutomoputra/absence",
  },
  {
    id: 7,
    title: "Absence Management System Mobile",
    description:
      locale.value === "en"
        ? "Mobile application for employee attendance management with features like check-in/out, leave requests, and work schedule viewing. Includes geolocation verification, real-time notifications, and offline support."
        : "Aplikasi mobile untuk manajemen kehadiran karyawan dengan fitur check-in/out, pengajuan cuti, dan melihat jadwal kerja. Dilengkapi verifikasi geolokasi, notifikasi real-time, dan dukungan offline.",
    image:
      "https://images.unsplash.com/photo-1526045431048-f857369baa09?q=80&w=800",
    technologies: ["React Native", "Zustand", "React Query", "Expo"],
    link: "https://github.com/wahyuutomoputra/absence",
    screenshots: [
      "/attendance/1.png",
      "/attendance/2.png",
      "/attendance/3.png",
      "/attendance/4.png",
      "/attendance/5.png",
    ],
  },
  {
    id: 8,
    title: "Landing Page for Kanvas Store",
    description:
      locale.value === "en"
        ? "Landing page for Kanvas Store, a platform for selling products online."
        : "Landing page untuk Kanvas Store, platform penjualan produk online.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://kanvas.co.id/",
    screenshots: [
      "/homepage-kanvas/1.png",
      "/homepage-kanvas/2.png",
      "/homepage-kanvas/3.png",
      "/homepage-kanvas/4.png",
    ],
  },
]);

// Watch for language changes to update projects
watch(locale, () => {
  // Force reactivity update
  projects.value = [...projects.value];
});

// Add skills data
const skills = ref({
  mobile: ["React Native", "Expo", "Push Notification", "Geolocation"],
  frontend: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
  backend: [
    "Node.js",
    "Express.js",
    "CodeIgniter 4",
    "Laravel",
    "PHP",
    "Java",
    "Spring Boot",
    "Python",
    "FastAPI",
    "Golang",
    "Rest API",
  ],
  database: ["MySQL", "PostgreSQL", "SQL Server"],
  devops: ["CI/CD"],
});

// Add smooth scroll function
function scrollToProjects() {
  const projectsSection = document.getElementById("projects");
  projectsSection?.scrollIntoView({ behavior: "smooth" });
}

// Add download CV function
function downloadCV() {
  // Create link to download
  const link = document.createElement("a");
  link.href = "/cv-wahyu-utomo.pdf";
  link.download = "CV-Wahyu-Utomo.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Add state for modal
const isModalOpen = ref(false);
const selectedProject = ref<Project | null>(null);

// Function to handle project click
function openProjectDetail(project: Project) {
  selectedProject.value = project;
  isModalOpen.value = true;
}

// Function to handle GitHub link click
function handleGitHubClick(link: string) {
  if (link === "private") {
    Swal.fire({
      title: "Private Project",
      text: "Maaf, aplikasi ini bersifat private dan tidak dapat diakses publik.",
      icon: "info",
      confirmButtonText: "OK",
      confirmButtonColor: "#16a34a",
      showCloseButton: true,
      customClass: {
        popup: "rounded-xl",
        title: "text-xl font-bold text-gray-800",
        htmlContainer: "text-gray-600",
      },
    });
    return;
  }
  window.open(link, "_blank");
}

// Function to close modal
function closeModal() {
  isModalOpen.value = false;
  selectedProject.value = null;
}

// Function to toggle language
function toggleLanguage() {
  locale.value = locale.value === "en" ? "id" : "en";
}

function closeDropdown() {
  isLanguageDropdownOpen.value = false;
}

// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".language-selector")) {
      closeDropdown();
    }
  });
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Skip to main content for accessibility -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded-md"
    >
      Skip to main content
    </a>

    <!-- Navbar -->
    <Navbar />

    <main id="main-content">
      <!-- Hero Section -->
      <HeroSection
        @scroll-to-projects="scrollToProjects"
        @download-cv="downloadCV"
      />

      <!-- About Section -->
      <section id="about" aria-label="About Me" class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-12">
            {{ t("about.title") }}
          </h2>
          <div class="max-w-4xl mx-auto">
            <p class="text-lg text-gray-700 mb-6">
              {{ t("about.description") }}
            </p>
            <p class="text-lg text-gray-700 mb-6">
              {{ t("about.education") }}
            </p>

            <h3 class="text-2xl font-semibold mb-4">{{ t("about.skills") }}</h3>
            <div class="space-y-6">
              <div
                v-for="(skillList, category) in skills"
                :key="category"
                class="mb-6"
              >
                <h4 class="text-xl font-semibold mb-3 capitalize text-gray-700">
                  {{ category }}
                </h4>
                <div class="flex flex-wrap gap-3">
                  <span
                    v-for="skill in skillList"
                    :key="skill"
                    class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>

            <p class="text-lg text-gray-700 mb-6 mt-12">
              {{ t("about.current") }}
            </p>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" aria-label="Portfolio Projects" class="py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-4">
            {{ t("projects.title") }}
          </h2>
          <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {{ t("projects.subtitle") }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              v-for="project in projects"
              :key="project.id"
              class="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div class="relative overflow-hidden">
                <img
                  :src="project.image"
                  :alt="project.title"
                  :title="project.title"
                  class="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold mb-3 text-gray-800">
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 mb-4 line-clamp-3">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"
                  >
                    {{ tech }}
                  </span>
                </div>
                <a
                  @click.prevent="openProjectDetail(project)"
                  href="#"
                  class="inline-flex items-center text-green-600 hover:text-green-800 font-medium group cursor-pointer"
                >
                  {{ t("projects.viewProject") }}
                  <svg
                    class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section
        id="contact"
        aria-label="Contact Information"
        class="py-20 bg-gradient-to-b from-white to-green-50"
      >
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold mb-8">{{ t("contact.title") }}</h2>
          <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {{ t("contact.subtitle") }}
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <a
              href="https://wa.me/6281290709431"
              target="_blank"
              rel="noopener"
              class="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              <span class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  title="WhatsApp Icon"
                >
                  <path
                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                  />
                </svg>
                WhatsApp
              </span>
            </a>
            <a
              href="mailto:wahyuutomoputra@gmail.com"
              class="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              <span class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Me
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/wahyu-utomo-putra-500526139/"
              target="_blank"
              rel="noopener"
              class="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              <span class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/wahyuutomoputra/"
              target="_blank"
              rel="noopener"
              class="group bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              <span class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                GitHub
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Project Detail Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      @click="closeModal"
    >
      <div
        class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
        @click.stop
      >
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold text-gray-800">
            {{ selectedProject?.title }}
          </h3>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="space-y-6">
          <!-- Project Screenshots -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              v-for="(screenshot, index) in selectedProject?.screenshots"
              :key="index"
              :src="screenshot"
              :alt="`${selectedProject?.title} Screenshot ${index + 1}`"
              class="rounded-lg shadow-md w-full h-48 md:h-64 object-contain bg-gray-100"
              loading="lazy"
            />
          </div>

          <!-- Project Description -->
          <div class="text-gray-600">
            <p class="mb-4">{{ selectedProject?.description }}</p>

            <!-- Add privacy notice for private projects -->
            <div
              v-if="selectedProject?.link === 'private'"
              class="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
            >
              <p class="text-yellow-800 flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {{ t("projects.privateNotice") }}
              </p>
            </div>

            <h4 class="font-semibold text-gray-800 mb-2">
              {{ t("projects.technologies") }}
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in selectedProject?.technologies"
                :key="tech"
                class="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- GitHub Link -->
          <div class="pt-4 border-t">
            <a
              @click.prevent="handleGitHubClick(selectedProject?.link || '')"
              href="#"
              class="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
            >
              {{ selectedProject?.link?.includes('github') 
                  ? t("projects.viewOnGithub") 
                  : t("projects.visitWebsite") }}
              <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  v-if="selectedProject?.link?.includes('github')"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
                <path
                  v-else
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
