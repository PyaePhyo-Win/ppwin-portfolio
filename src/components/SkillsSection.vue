<template>
  <section class="container max-w-6xl mx-auto px-6 py-16 min-h-screen flex flex-col items-center justify-center">
    <h2 class="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">My Skills</h2>
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 md:p-12 transition-colors duration-300">
      <div v-for="(skillsGroup, category) in SKILLS" :key="category" class="mb-8 last:mb-0">
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{{ category }}</h3>
        <div class="flex flex-wrap gap-3">
          <span v-for="skill in skillsGroup" :key="skill"
            class="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-100 text-lg font-medium shadow-sm">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SKILLS } from '../constants/data';
</script>