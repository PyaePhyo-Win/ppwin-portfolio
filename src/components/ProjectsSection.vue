<template>
  <section id="projects" class="container max-w-6xl mx-auto px-6 py-16 min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <h2 class="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 mt-6">My Projects</h2>
    
    <!-- Projects Grid with Transition -->
    <div class="relative w-full min-h-[500px]">
      <TransitionGroup 
        name="project-fade" 
        tag="div" 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        <ProjectCard
          v-for="project in paginatedProjects"
          :key="project.title"
          v-bind="project"
        />
      </TransitionGroup>
    </div>

    <!-- Pagination Controls -->
    <div v-if="totalPages > 1" class="mt-6 md:mt-0 flex items-center justify-center space-x-4">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1"
        class="p-2 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-300 shadow-sm"
        aria-label="Previous page"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div class="flex space-x-2">
        <button 
          v-for="page in totalPages" 
          :key="page"
          @click="currentPage = page"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-300',
            currentPage === page 
              ? 'bg-indigo-600 w-8' 
              : 'bg-gray-300 dark:bg-gray-600 hover:bg-indigo-400'
          ]"
          :aria-label="`Go to page ${page}`"
        ></button>
      </div>

      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages"
        class="p-2 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-300 shadow-sm"
        aria-label="Next page"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    
    <p class="mt-6 text-sm text-gray-500 dark:text-gray-400">
      Showing {{ startIndex + 1 }}-{{ Math.min(endIndex, PROJECTS.length) }} of {{ PROJECTS.length }} projects
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import ProjectCard from './ProjectCard.vue';
import { PROJECTS } from '../constants/data';

const itemsPerPage = 3;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(PROJECTS.length / itemsPerPage));

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
const endIndex = computed(() => startIndex.value + itemsPerPage);

const paginatedProjects = computed(() => {
  return PROJECTS.slice(startIndex.value, endIndex.value);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Scroll to top of section when page changes for better UX
watch(currentPage, () => {
  const section = document.getElementById('projects');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
});
</script>

<style scoped>
.project-fade-enter-active,
.project-fade-leave-active {
  transition: all 0.5s ease;
}

.project-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.project-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
  position: absolute;
}

.project-fade-move {
  transition: transform 0.5s ease;
}
</style>
