<template>
  <section id="experience" class="section-shell">
    <div class="section-frame">
      <div v-reveal="{ distance: 22 }" class="section-heading">
        <p class="section-eyebrow">Professional Practice</p>
        <h2 class="section-title">Experience</h2>
        <p class="section-copy">I do my best work where system reliability, interface quality, and delivery speed all matter at the same time.</p>
      </div>

      <div class="grid gap-5 lg:grid-cols-2">
        <article v-for="(work, index) in WORK_EXPERIENCE" :key="index" v-reveal="{ delay: index * 90, distance: 24 }" class="section-card p-5 md:p-8">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-xs font-extrabold uppercase tracking-[0.26em] text-[var(--accent)]">Chapter {{ index + 1 }}</p>
              <h3 class="mt-3 text-3xl leading-tight text-[var(--text)]">{{ work.role }}</h3>
            </div>
            <span class="pill text-xs">{{ work.period }}</span>
          </div>

          <div class="mt-4">
            <LogoLabel
              :label="work.company"
              :logo="work.logo"
              text-class="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--text-soft)]"
            />
          </div>
          <p class="mt-3 max-w-xl text-sm leading-7 text-[var(--text-muted)] md:text-base">{{ roleSummaries[index] }}</p>

          <ul class="mt-6 space-y-3">
            <li v-for="(desc, dIndex) in work.description" :key="dIndex" class="panel flex items-start gap-3 p-4">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--highlight)]"></span>
              <span class="text-sm leading-7 text-[var(--text-muted)] md:text-base">{{ desc }}</span>
            </li>
          </ul>
        </article>
      </div>
     </div>
  </section>
</template>

<script setup lang="ts">
import { WORK_EXPERIENCE } from '../constants/data';
import LogoLabel from './LogoLabel.vue';

const roleSummaries = [
  'Applied machine learning work centered on model development, training pipelines, and evaluation across real datasets.',
  'Production-focused engineering across backend APIs, internal tooling, frontend delivery, and AI-assisted product features.'
];
</script>
