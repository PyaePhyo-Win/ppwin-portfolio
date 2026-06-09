<template>
  <section id="about" class="max-w-6xl mx-auto px-4 py-16 min-h-screen flex items-center">
    <div class="w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-md p-8 md:p-12 border border-white/20 dark:border-gray-700/30">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center justify-center mb-6">
          <div class="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white">{{ ABOUT_ME.title }}</h2>
        </div>

        <div class="text-gray-700 dark:text-gray-300 space-y-5 leading-relaxed text-base md:text-lg text-center">
          <p v-for="(paragraph, index) in ABOUT_ME.description" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <div class="mt-10 flex justify-center">
          <a
            href="/ppwin_cv.pdf"
            download
            class="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-indigo-500/25"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Full CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ABOUT_ME } from '../constants/data';
</script>
