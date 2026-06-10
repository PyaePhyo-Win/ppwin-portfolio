<template>
  <section id="about" class="section-shell">
    <div class="section-frame">
      <div class="section-card grid gap-7 px-5 py-6 md:px-10 md:py-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <div class="flex flex-col justify-between gap-6">
          <div class="section-heading text-left">
            <p class="section-eyebrow">Profile</p>
            <h2 class="section-title">{{ ABOUT_ME.title }}</h2>
            <p class="section-copy mx-0">
              I care about software that reads clearly, ships cleanly, and keeps its shape as the product becomes more complex.
            </p>
          </div>

          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div class="panel p-5">
              <p class="text-xs font-extrabold uppercase tracking-[0.26em] text-[var(--accent)]">Base</p>
              <p class="mt-3 text-lg leading-7 text-[var(--text)]">Based in Yangon and interested in working with teams that value thoughtful engineering and global collaboration.</p>
            </div>
            <div class="panel p-5">
              <p class="text-xs font-extrabold uppercase tracking-[0.26em] text-[var(--accent)]">Approach</p>
              <p class="mt-3 text-lg leading-7 text-[var(--text)]">I treat backend logic, frontend polish, and product judgment as one connected system, not separate tasks.</p>
            </div>
          </div>
        </div>

        <div class="space-y-5">
          <div v-for="(paragraph, index) in ABOUT_ME.description" :key="index" class="panel p-6 md:p-7">
            <p class="text-base leading-8 text-[var(--text-muted)] md:text-lg">
              {{ paragraph }}
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <a href="/ppwin_cv.pdf" download class="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Full CV
            </a>
            <a href="#contact" class="btn-secondary">Discuss a Project</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ABOUT_ME } from '../constants/data';
</script>
