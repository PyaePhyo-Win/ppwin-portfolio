<template>
  <section id="skills" class="section-shell">
    <div class="section-frame">
      <div v-reveal="{ distance: 22 }" class="section-heading">
        <p class="section-eyebrow">Working Range</p>
        <h2 class="section-title">Skills</h2>
        <p class="section-copy">These are the tools I reach for when building software that needs to be usable, maintainable, and ready for production pressure.</p>
      </div>

      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="(skillsGroup, category, index) in SKILLS" :key="category" v-reveal="{ delay: index * 70, distance: 24 }" class="section-card p-6 md:p-7">
          <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--accent)]">{{ category === 'AI' ? 'AI Integration' : category }}</p>
          <p class="mt-4 text-sm leading-7 text-[var(--text-muted)]">{{ categoryDescriptions[category] }}</p>
          <div class="mt-6 flex flex-wrap gap-3">
          <span v-for="skill in skillsGroup" :key="skill"
            class="pill text-sm">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SKILLS } from '../constants/data';

const categoryDescriptions: Record<string, string> = {
  Frontend: 'Interfaces built for clarity, responsiveness, and day-to-day usability.',
  Backend: 'Application logic, APIs, and services designed to stay stable as requirements grow.',
  Database: 'Relational data models and query-driven systems that support real product workflows.',
  Tools: 'Infrastructure and delivery tooling that make development faster and more reliable.',
  AI: 'Practical LLM and ML capabilities focused on integration quality, structure, and user value.'
};
</script>