<template>
  <section id="education" class="max-w-6xl mx-auto px-4 py-16 min-h-screen flex items-center">
    <div class="w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-md p-8 md:p-12 border border-white/20 dark:border-gray-700/30">
      <div class="flex items-center justify-center mb-10">
        <div class="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white">Education</h2>
      </div>

      <div class="max-w-4xl mx-auto">
        <div v-for="(edu, index) in EDUCATION" :key="index" class="relative pl-8 md:pl-10 border-l-2 border-indigo-500/30 pb-10 last:pb-0">
          <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-800 z-10"></div>
          <h3 class="text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400 leading-tight">{{ edu.degree }}</h3>
          <p class="mt-2 text-sm md:text-base font-semibold text-gray-600 dark:text-gray-400">{{ edu.institution }}</p>
          <p class="text-xs font-medium text-gray-500 dark:text-gray-500 mt-2 uppercase tracking-wider">{{ edu.period }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { EDUCATION } from '../constants/data';
</script>
