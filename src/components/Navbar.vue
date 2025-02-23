<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import LanguageSelector from './LanguageSelector.vue'

const { y } = useWindowScroll()
const { width } = useWindowSize()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')
const { t } = useI18n()

const navItems = [
  { id: 'about', label: t('nav.about') },
  { id: 'projects', label: t('nav.projects') },
  { id: 'contact', label: t('nav.contact') }
]

// Watch scroll position for navbar styling and active section
watch(y, (newY) => {
  isScrolled.value = newY > 50
  
  // Update active section based on scroll position
  const sections = document.querySelectorAll('section[id]')
  const pageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
  const isAtTop = window.scrollY < 100

  if (isAtTop) {
    // If we're at the top of the page, activate home section
    activeSection.value = 'home'
    return
  }

  if (pageBottom) {
    // If we're at the bottom of the page, activate the last section
    activeSection.value = 'contact'
    return
  }

  sections.forEach((section) => {
    const sectionTop = (section as HTMLElement).offsetTop - 100
    const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight
    if (newY >= sectionTop && newY < sectionBottom) {
      activeSection.value = section.id
    }
  })
})

// Close mobile menu on window resize
watch(width, (newWidth) => {
  if (newWidth >= 768) {
    isMobileMenuOpen.value = false
  }
})

// Add scroll padding for smooth scroll
onMounted(() => {
  document.documentElement.style.scrollPaddingTop = '80px'
})

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav role="navigation" aria-label="Main navigation" 
    :class="[
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-lg' : 'bg-transparent',
      isMobileMenuOpen ? 'bg-white' : ''
    ]">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <h1 class="text-2xl font-bold bg-gradient-to-r from-green-500 via-green-600 to-emerald-500 bg-clip-text text-transparent
          hover:scale-105 transition-transform duration-300 cursor-pointer"
          @click="scrollToSection('home')">
          Wahyu Utomo
        </h1>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <template v-for="item in navItems" :key="item.id">
            <a href="#"
              @click.prevent="scrollToSection(item.id)"
              :class="[
                'relative py-2 transition-all duration-300 hover:text-green-600',
                activeSection === item.id ? 'text-green-600' : 'text-gray-700'
              ]">
              {{ item.label }}
              <span :class="[
                'absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform transition-transform duration-300',
                activeSection === item.id ? 'scale-x-100' : 'scale-x-0'
              ]"></span>
            </a>
          </template>
          <LanguageSelector />
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" 
        :class="[
          'md:hidden transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        ]">
        <div class="py-4 space-y-4">
          <template v-for="item in navItems" :key="item.id">
            <a href="#"
              @click.prevent="scrollToSection(item.id)"
              :class="[
                'block py-2 px-4 rounded-lg transition-all duration-300',
                activeSection === item.id 
                  ? 'bg-green-50 text-green-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              ]">
              {{ item.label }}
            </a>
          </template>
          <div class="px-4">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply text-green-600;
}

@keyframes slideDown {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.nav-animation {
  animation: slideDown 0.3s ease-out;
}
</style>