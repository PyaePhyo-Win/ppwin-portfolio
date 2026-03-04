<template>
  <footer class="bg-transparent py-8 mt-16 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
      <div class="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/PyaePhyo-Win" target="_blank" rel="noopener noreferrer"
          class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/pyae-phyo-win-748826297" target="_blank" rel="noopener noreferrer"
          class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
          LinkedIn
        </a>
        <a href="mailto:pyaephyowin706@gmail.com"
          class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
          pyaephyowin706@gmail.com
        </a>
      </div>
      <p>&copy; {{ currentYear }} Pyae Phyo Win. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>