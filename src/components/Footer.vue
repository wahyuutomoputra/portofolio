<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer role="contentinfo" class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4 text-center">
      <p class="mb-4">
        © {{ currentYear }} Wahyu Utomo Putra. All rights reserved.
      </p>
      <div class="flex justify-center space-x-4 text-gray-400">
        <a href="#" class="hover:text-white transition-colors">
          Privacy Policy
        </a>
        <span>•</span>
        <a href="#" class="hover:text-white transition-colors">
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
</template> 