<template>
  <section class="min-h-screen flex items-center justify-center bg-transparent transition-colors duration-300 pt-20 md:pt-0">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="mb-8 flex justify-center">
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src="/profile.jpg" 
            alt="Pyae Phyo Win" 
            class="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
        Pyae Phyo Win
      </h1>
      <p class="text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6">
        Full Stack Developer
      </p>
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Full-stack developer specializing in Laravel, PHP, MySQL, C#, EF Core, SQL Server, and Vue. Skilled in scalable architecture, database design, API development, and HCI-driven user experiences, with a strong focus on performance optimization.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <!-- View Projects with Leading Icon -->
        <a href="#projects"
          class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-indigo-500/25">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          View Projects
        </a>
        
        <!-- GitHub Profile with Leading Icon -->
        <a href="https://github.com/PyaePhyo-Win" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-8 py-3 border border-gray-200 dark:border-gray-700 text-base font-semibold rounded-xl shadow-md text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub Profile
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
