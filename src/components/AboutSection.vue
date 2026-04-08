<template>
  <section id="about" class="container max-w-7xl mx-auto px-6 py-16 min-h-screen flex flex-col items-center justify-center">
    <h2 class="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">About Me</h2>
    
    <!-- Using items-stretch to ensure all columns have the same height -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch">
      <!-- About Me Description -->
      <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl shadow-md p-8 border border-white/20 dark:border-gray-700/30 flex flex-col h-full">
        <div class="flex items-center mb-6">
          <div class="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Who I Am</h3>
        </div>
        <div class="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed text-sm md:text-base flex-grow">
          <p>
            As a dedicated computer science student with a passion for full stack development, I specialize in crafting robust and efficient solutions. My expertise spans business logic implementation, ensuring seamless operation and data integrity within complex systems.
          </p>
          <p>
            I possess a strong foundation in database design, optimizing data structures for performance and scalability, and excel in developing secure and high-performing APIs that drive modern applications.
          </p>
          <p>
            My approach to development is rooted in analytical problem-solving, consistently striving to deliver elegant and maintainable code that meets both technical requirements and business objectives.
          </p>
        </div>
      </div>

      <!-- Work Experience -->
      <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl shadow-md p-8 border border-white/20 dark:border-gray-700/30 flex flex-col h-full">
        <div class="flex items-center mb-6">
          <div class="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
        </div>
        <div class="mt-2 flex-grow">
          <div v-for="(work, index) in WORK_EXPERIENCE" :key="index" class="relative pl-6 border-l-2 border-indigo-500/30 pb-8 last:pb-2">
            <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-800 z-10"></div>
            <h4 class="text-lg font-bold text-indigo-600 dark:text-indigo-400 leading-tight">{{ work.role }}</h4>
            <p class="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3">{{ work.company }}</p>
            <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-2">
              <li v-for="(desc, dIndex) in work.description" :key="dIndex" class="flex items-start">
                <span class="mr-2 text-indigo-500">•</span>
                <span>{{ desc }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl shadow-md p-8 border border-white/20 dark:border-gray-700/30 flex flex-col h-full">
        <div class="flex items-center mb-6">
          <div class="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
        </div>
        <div class="mt-2 flex-grow">
          <div v-for="(edu, index) in EDUCATION" :key="index" class="relative pl-6 border-l-2 border-indigo-500/30 pb-8 last:pb-2">
            <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-800 z-10"></div>
            <h4 class="text-lg font-bold text-indigo-600 dark:text-indigo-400 leading-tight">{{ edu.degree }}</h4>
            <p class="text-sm font-semibold text-gray-600 dark:text-gray-400">{{ edu.institution }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-500 mt-1 uppercase tracking-wider">{{ edu.period }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Download CV Button -->
    <div class="mt-12 flex justify-center">
      <a 
        href="/public/ppwin_cv.pdf" 
        download 
        class="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-indigo-500/25"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download Full CV
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { WORK_EXPERIENCE, EDUCATION } from '../constants/data';
</script>
