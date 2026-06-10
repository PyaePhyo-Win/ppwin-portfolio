<template>
  <section id="education" class="section-shell">
    <div class="section-frame">
      <div class="section-heading">
        <p class="section-eyebrow">Study</p>
        <h2 class="section-title">Education</h2>
        <p class="section-copy">Formal study and practical training that shaped the engineering foundation behind the portfolio work.</p>
      </div>

      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article v-for="(edu, index) in EDUCATION" :key="index" class="section-card flex h-full flex-col justify-between p-6">
          <div>
            <p class="text-xs font-extrabold uppercase tracking-[0.26em] text-[var(--accent)]">0{{ index + 1 }}</p>
            <h3 class="mt-4 text-3xl leading-tight text-[var(--text)]">{{ edu.degree }}</h3>
            <p class="mt-4 text-base leading-7 text-[var(--text-muted)]">{{ edu.institution }}</p>
          </div>
          <p class="mt-8 text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--text-soft)]">{{ edu.period }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { EDUCATION } from '../constants/data';
</script>
