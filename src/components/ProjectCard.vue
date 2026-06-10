<template>
  <div class="section-card flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7">
    <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--accent)]">Project</p>
    <h3 class="mt-4 text-3xl leading-tight text-[var(--text)]">{{ title }}</h3>
    <p class="mt-4 flex-grow text-base leading-7 text-[var(--text-muted)]">{{ description }}</p>

    <div class="mt-6 mb-6 flex flex-wrap gap-2.5">
      <span v-for="tech in techStack" :key="tech"
        class="pill px-3 py-2 text-xs">
        {{ tech }}
      </span>
    </div>

    <div class="flex flex-col sm:flex-row gap-3 mt-auto">
      <a :href="githubLink" target="_blank" rel="noopener noreferrer"
        class="btn-primary flex-1 text-center">
        GitHub
      </a>
      <a v-if="demoLink" :href="demoLink" target="_blank" rel="noopener noreferrer"
        class="btn-secondary flex-1 text-center">
        Demo
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../types';

const props = defineProps<Project>();
</script>