<template>
  <section id="projects" class="section-shell overflow-hidden">
    <div class="section-frame">
      <div class="section-heading">
        <p class="section-eyebrow">Selected Work</p>
        <h2 class="section-title">Projects</h2>
        <p class="section-copy">A focused selection of tools, systems, and product builds that show how I think through implementation, usability, and technical tradeoffs.</p>
      </div>

      <div v-if="featuredProject" class="section-card mb-7 grid gap-7 p-5 md:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div>
          <p class="text-xs font-extrabold uppercase tracking-[0.26em] text-[var(--accent)]">Featured Project</p>
          <h3 class="mt-4 text-[2.75rem] leading-[0.95] text-[var(--text)] md:text-[3.5rem]">{{ featuredProject.title }}</h3>
          <p class="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg">{{ featuredProject.description }}</p>
          <div class="mt-6 flex flex-wrap gap-2.5">
            <span v-for="tech in featuredProject.techStack" :key="tech" class="pill text-xs">{{ tech }}</span>
          </div>
          <div class="mt-8 flex flex-col gap-4 sm:flex-row">
            <a :href="featuredProject.githubLink" target="_blank" rel="noopener noreferrer" class="btn-primary">View Code</a>
            <a v-if="featuredProject.demoLink" :href="featuredProject.demoLink" target="_blank" rel="noopener noreferrer" class="btn-secondary">Live Demo</a>
          </div>
        </div>

        <div class="grid gap-4 self-start">
          <div class="panel p-5">
            <p class="text-xs font-extrabold uppercase tracking-[0.26em] text-[var(--text-soft)]">Why it stands out</p>
            <p class="mt-3 text-base leading-7 text-[var(--text-muted)]">The work I highlight most is the work where implementation depth, user value, and engineering restraint all show up together.</p>
          </div>
          <div class="panel p-5">
            <p class="text-xs font-extrabold uppercase tracking-[0.26em] text-[var(--text-soft)]">What this says about me</p>
            <p class="mt-3 text-base leading-7 text-[var(--text-muted)]">I prefer shipping useful systems with clear tradeoffs, durable structure, and enough polish to feel complete in real-world use.</p>
          </div>
        </div>
      </div>

      <TransitionGroup name="project-fade" tag="div" class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ProjectCard
          v-for="project in supportingProjects"
          :key="project.title"
          v-bind="project"
        />
      </TransitionGroup>

      <div v-if="totalPages > 1" class="mt-8 flex items-center justify-center gap-4">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-30"
          style="border-color: var(--surface-border); background: color-mix(in srgb, var(--surface-strong) 84%, transparent); color: var(--text);"
          aria-label="Previous page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div class="flex gap-2">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            :class="[
              'h-3 rounded-full transition-all duration-300',
              currentPage === page ? 'w-10 bg-[var(--accent)]' : 'w-3 bg-[color:var(--surface-border)] hover:bg-[var(--highlight)]'
            ]"
            :aria-label="`Go to page ${page}`"
          ></button>
        </div>

        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-30"
          style="border-color: var(--surface-border); background: color-mix(in srgb, var(--surface-strong) 84%, transparent); color: var(--text);"
          aria-label="Next page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <p class="mt-5 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
        Showing {{ startIndex + 1 }}-{{ Math.min(endIndex, PROJECTS.length) }} of {{ PROJECTS.length }} projects
      </p>
    </div>
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

const displayedProjects = computed(() => [...PROJECTS].reverse());

const paginatedProjects = computed(() => {
  return displayedProjects.value.slice(startIndex.value, endIndex.value);
});

const featuredProject = computed(() => paginatedProjects.value[0]);
const supportingProjects = computed(() => paginatedProjects.value.slice(1));

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
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.project-fade-enter-from {
  opacity: 0;
  transform: translateY(18px);
}

.project-fade-leave-to {
  opacity: 0;
  transform: translateY(-18px);
  position: absolute;
}

.project-fade-move {
  transition: transform 0.35s ease;
}
</style>
