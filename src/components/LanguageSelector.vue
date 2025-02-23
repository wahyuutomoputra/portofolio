<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isLanguageDropdownOpen = ref(false)

function closeDropdown() {
  isLanguageDropdownOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.language-selector')) {
      closeDropdown()
    }
  })
})
</script>

<template>
  <div class="relative language-selector">
    <button @click.stop="isLanguageDropdownOpen = !isLanguageDropdownOpen" 
      class="group px-4 py-2 rounded-full border border-green-600 text-green-600 hover:bg-green-50 transition-all duration-300 hover:shadow-md flex items-center gap-2">
      <span class="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
        <img 
          :src="locale === 'id' ? 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/id.svg' : 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/gb.svg'" 
          :alt="locale === 'id' ? 'Indonesian Flag' : 'English Flag'"
          class="w-full h-full object-cover"
        />
      </span>
      <span class="font-medium">{{ locale.toUpperCase() }}</span>
      <svg 
        :class="['w-4 h-4 transition-transform duration-300', isLanguageDropdownOpen ? 'rotate-180' : '']" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div v-if="isLanguageDropdownOpen" 
      class="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
      <div class="py-1">
        <button @click="locale = 'en'; closeDropdown()" 
          class="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-50 transition-all">
          <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/gb.svg" 
            alt="English Flag" 
            class="w-5 h-5 rounded-full mr-3" />
          <span :class="locale === 'en' ? 'text-green-600 font-medium' : ''">English</span>
          <svg v-if="locale === 'en'" class="ml-auto h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <button @click="locale = 'id'; closeDropdown()" 
          class="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-50 transition-all">
          <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/id.svg" 
            alt="Indonesian Flag" 
            class="w-5 h-5 rounded-full mr-3" />
          <span :class="locale === 'id' ? 'text-green-600 font-medium' : ''">Indonesia</span>
          <svg v-if="locale === 'id'" class="ml-auto h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template> 