<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col h-full">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">{{ title }}</h3>
    <p class="text-gray-700 dark:text-gray-300 text-base mb-4 flex-grow">{{ description }}</p>

    <div class="mb-4 flex flex-wrap gap-2">
      <span v-for="tech in techStack" :key="tech"
        class="bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-100 text-xs font-medium px-2.5 py-0.5 rounded-full">
        {{ tech }}
      </span>
    </div>

    <div class="flex flex-col sm:flex-row gap-3 mt-auto">
      <a :href="githubLink" target="_blank" rel="noopener noreferrer"
        class="flex-1 text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">
        GitHub
      </a>
      <a v-if="demoLink" :href="demoLink" target="_blank" rel="noopener noreferrer"
        class="flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">
        Demo
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../types';

const props = defineProps<Project>();
</script>