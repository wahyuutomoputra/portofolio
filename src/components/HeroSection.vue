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
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
    <div class="text-center px-4">
      <div class="mb-8 text-green-600">
        <svg class="w-16 h-16 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
      <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent">
        {{ t("hero.title") }}
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        {{ t("hero.subtitle") }}
      </p>
      <div class="flex gap-4 justify-center">
        <button @click="$emit('scrollToProjects')"
          class="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all hover:scale-105 hover:shadow-lg">
          {{ t("hero.viewWork") }}
        </button>
        <a href="/cv-wahyu-utomo.pdf" download="CV-Wahyu-Utomo.pdf"
           class="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-all hover:scale-105">
          <span class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {{ t("hero.downloadCV") }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template> 