<template>
  <footer class="px-4 pb-10 pt-6 transition-colors duration-300 md:px-6">
    <div class="mx-auto max-w-6xl rounded-[1.75rem] border px-6 py-8 text-center"
      style="border-color: var(--surface-border); background: color-mix(in srgb, var(--bg-elevated) 76%, transparent); box-shadow: var(--shadow-soft);">
      <p class="text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--accent)]">Let’s build with intent</p>
      <div class="mt-5 flex flex-wrap justify-center gap-6 text-sm font-semibold text-[var(--text-muted)]">
        <a href="https://github.com/PyaePhyo-Win" target="_blank" rel="noopener noreferrer"
          class="transition-colors duration-300 hover:text-[var(--accent)]">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/pyae-phyo-win-748826297" target="_blank" rel="noopener noreferrer"
          class="transition-colors duration-300 hover:text-[var(--accent)]">
          LinkedIn
        </a>
        <a href="mailto:pyaephyowin706@gmail.com"
          class="transition-colors duration-300 hover:text-[var(--accent)]">
          pyaephyowin706@gmail.com
        </a>
      </div>
      <p class="mt-5 text-sm text-[var(--text-soft)]">&copy; {{ currentYear }} Pyae Phyo Win. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>