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
        Full Stack Developer | Computer Science Student
      </p>
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Full-stack developer specializing in Laravel, PHP, MySQL, C#, EF Core, SQL Server, and Vue. Skilled in scalable architecture, database design, API development, and HCI-driven user experiences, with a strong focus on performance optimization.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#projects"
          class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
          View Projects
        </a>
        <a href="https://github.com/PyaePhyo-Win" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md shadow-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
          GitHub Profile
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>