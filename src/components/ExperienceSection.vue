<template>
  <section id="experience" class="max-w-6xl mx-auto px-4 py-16 min-h-screen flex items-center">
    <div class="w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-md p-8 md:p-12 border border-white/20 dark:border-gray-700/30">
      <div class="flex items-center justify-center mb-10">
        <div class="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
      </div>

      <div class="max-w-4xl mx-auto">
        <div v-for="(work, index) in WORK_EXPERIENCE" :key="index" class="relative pl-8 md:pl-10 border-l-2 border-indigo-500/30 pb-10 last:pb-0">
          <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-800 z-10"></div>
          <h3 class="text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400 leading-tight">{{ work.role }}</h3>
          <div class="mt-2 flex flex-col gap-1 md:flex-row md:justify-between md:items-baseline mb-4">
            <p class="text-sm md:text-base font-semibold text-gray-600 dark:text-gray-400">{{ work.company }}</p>
            <p v-if="work.period" class="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">{{ work.period }}</p>
          </div>
          <ul class="text-sm md:text-base text-gray-700 dark:text-gray-300 space-y-3">
            <li v-for="(desc, dIndex) in work.description" :key="dIndex" class="flex items-start">
              <span class="mr-2 text-indigo-500">•</span>
              <span>{{ desc }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { WORK_EXPERIENCE } from '../constants/data';
</script>
