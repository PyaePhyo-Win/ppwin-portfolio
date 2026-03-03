<template>
  <section class="container max-w-6xl mx-auto px-6 py-16 min-h-screen flex flex-col items-center justify-center">
    <h2 class="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">My Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        v-for="project in PROJECTS"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :techStack="project.techStack"
        :githubLink="project.githubLink"
        :demoLink="project.demoLink"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import { PROJECTS } from '../constants/data';
</script>