<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineEmits<{
  scrollToProjects: []
  downloadCV: []
}>()
</script>

<template>
  <section aria-label="Introduction" 
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="animate-blob1 absolute -top-40 -right-40 w-96 h-96 rounded-full bg-green-100/50 blur-3xl"></div>
      <div class="animate-blob2 absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl"></div>
    </div>

    <div class="text-center px-4 relative max-w-5xl mx-auto">
      <div class="space-y-8">
        <h1 class="animate-title text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent">
          {{ t("hero.title") }}
        </h1>

        <p class="animate-subtitle text-xl text-gray-600">
          {{ t("hero.subtitle") }}
        </p>

        <div class="animate-buttons flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="$emit('scrollToProjects')"
            class="group bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <span class="relative z-10 flex items-center justify-center">
              {{ t("hero.viewWork") }}
            </span>
          </button>

          <a href="/cv-wahyu-utomo.pdf" download="CV-Wahyu-Utomo.pdf"
             class="group border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-md">
            <span class="flex items-center justify-center">
              <svg class="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {{ t("hero.downloadCV") }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -20px) scale(1.1); }
  50% { transform: translate(-20px, 20px) scale(0.9); }
  75% { transform: translate(20px, 20px) scale(1.1); }
}

@keyframes title-reveal {
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

.animate-title {
  animation: title-reveal 1s ease-out forwards;
}

.animate-subtitle {
  opacity: 0;
  animation: title-reveal 1s ease-out 0.3s forwards;
}

.animate-buttons {
  opacity: 0;
  animation: title-reveal 1s ease-out 0.6s forwards;
}

.animate-blob1 {
  animation: blob 20s infinite ease-in-out;
}

.animate-blob2 {
  animation: blob 25s infinite ease-in-out reverse;
}
</style> 