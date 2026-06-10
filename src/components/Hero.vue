<template>
  <section class="section-shell flex min-h-screen items-center md:pt-0">
    <div class="section-frame grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
      <div class="order-2 text-center lg:order-1 lg:text-left">
        <div class="mb-5 flex flex-wrap justify-center gap-3 lg:justify-start">
          <span class="pill">Yangon-based software engineer</span>
          <span class="pill">Product-minded full stack builder</span>
        </div>

        <p class="mb-4 text-xs font-extrabold uppercase tracking-[0.35em] text-[var(--accent)]">Engineering with clarity
          and range</p>
        <h1 class="max-w-4xl text-[3.3rem] leading-[0.9] text-[var(--text)] sm:text-[4.75rem] lg:text-[6.35rem]">
          Pyae Phyo Win
        </h1>
        <p class="mt-4 text-lg font-extrabold uppercase tracking-[0.22em] text-[var(--text-soft)] sm:text-2xl">
          Full Stack Developer building dependable digital systems
        </p>
        <p class="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--text-muted)] lg:mx-0 lg:text-lg">
          I turn backend logic, interface detail, and applied AI into products that feel clear, stable, and ready for
          real use, not just presentation.
        </p>

        <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <a href="#projects" class="btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            View Selected Work
          </a>
          <a href="/ppwin_cv.pdf" download class="btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div v-for="stat in heroStats" :key="stat.label" class="panel px-5 py-5 text-left">
            <p class="text-xs font-extrabold uppercase tracking-[0.26em] text-[var(--text-soft)]">{{ stat.label }}</p>
            <p class="mt-3 text-3xl font-extrabold text-[var(--text)]">{{ stat.value }}</p>
            <p class="mt-2 text-sm leading-6 text-[var(--text-muted)]">{{ stat.summary }}</p>
          </div>
        </div>
      </div>

      <div class="order-1 lg:order-2">
        <div class="section-card overflow-hidden p-4 sm:p-6 lg:p-7">
          <div class="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end mb-5">
            <div class="relative">
              <div class="absolute inset-0 rounded-[2rem] blur-3xl"
                style="background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 18%, transparent), transparent 75%);">
              </div>
              <img src="/profile-1.jpeg" alt="Pyae Phyo Win"
                class="relative h-[20rem] w-full rounded-[1.8rem] object-cover sm:h-[28rem] lg:h-[27rem]" />
            </div>

            <div class="flex flex-col gap-4">
              <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div class="panel p-5">
                  <p class="text-xs font-extrabold uppercase tracking-[0.26em] text-[var(--text-soft)]">Core Stack</p>
                  <p class="mt-3 text-base leading-7 text-[var(--text-muted)]">Vue, TypeScript, .NET, Laravel, SQL, and
                    pragmatic AI integration across product workflows.</p>
                </div>
                <div class="panel p-5">
                  <p class="text-xs font-extrabold uppercase tracking-[0.26em] text-[var(--text-soft)]">Working Style
                  </p>
                  <p class="mt-3 text-base leading-7 text-[var(--text-muted)]">Calm execution, strong structure, and
                    shipping choices that hold up after the first release.</p>
                </div>
              </div>
            </div>
          </div>
          <a href="https://github.com/PyaePhyo-Win" target="_blank" rel="noopener noreferrer"
              class="btn-secondary flex w-full self-stretch">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Browse GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { STATS } from '../constants/data';

const heroStats = [
  {
    label: 'Current Focus',
    value: 'Now',
    summary: 'Building backend APIs, clean frontend systems, and practical LLM-powered features.'
  },
  ...STATS.filter((stat) => stat.iconKey !== 'experience').map((stat) => ({
    ...stat,
    summary: 'Production, academic, and personal work delivered across tools, apps, and interfaces.'
  }))
];
</script>
