<template>
  <section class="container max-w-6xl mx-auto px-6 py-16 min-h-screen flex flex-col items-center justify-center">
    <h2 class="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">About Me</h2>
    <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl shadow-md p-8 md:p-12 transition-colors duration-300 border border-white/20 dark:border-gray-700/30">
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        As a dedicated computer science student with a passion for full stack development, I specialize in crafting robust and efficient solutions. My expertise spans business logic implementation, ensuring seamless operation and data integrity within complex systems.
      </p>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        I possess a strong foundation in database design, optimizing data structures for performance and scalability, and excel in developing secure and high-performing APIs that drive modern applications.
      </p>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        My approach to development is rooted in analytical problem-solving, consistently striving to deliver elegant and maintainable code that meets both technical requirements and business objectives.
      </p>
      <div class="flex justify-center">
        <a 
          href="/ppw_cv.pdf" 
          download 
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download CV
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>