<template>
  <section id="contact" class="section-shell">
    <div class="section-frame">
      <div v-reveal="{ distance: 24 }" class="section-card p-5 md:p-8">
        <div class="mx-auto flex max-w-full flex-col gap-6">
          <div v-reveal="{ delay: 50, distance: 18 }" class="section-heading text-center">
            <p class="section-eyebrow">Contact</p>
            <h2 class="section-title">Let's Build Together</h2>
            <p class="section-copy">Email works best for roles, freelance work, and product ideas.</p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <a v-reveal="{ delay: 120, distance: 18 }" href="https://github.com/PyaePhyo-Win" target="_blank" rel="noopener noreferrer" class="panel flex min-h-[168px] flex-col justify-between p-5 transition-transform duration-300 hover:-translate-y-1">
              <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--accent)]">GitHub</p>
              <p class="mt-3 text-lg text-[var(--text)]">Code, experiments, and developer tooling.</p>
              <p class="mt-4 text-sm text-[var(--text-soft)]">github.com/PyaePhyo-Win</p>
            </a>
            <a v-reveal="{ delay: 180, distance: 18 }" href="https://www.linkedin.com/in/pyae-phyo-win-748826297" target="_blank" rel="noopener noreferrer" class="panel flex min-h-[168px] flex-col justify-between p-5 transition-transform duration-300 hover:-translate-y-1">
              <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--accent)]">LinkedIn</p>
              <p class="mt-3 text-lg text-[var(--text)]">Professional background, recent work, and network.</p>
              <p class="mt-4 text-sm text-[var(--text-soft)]">linkedin.com/in/pyae-phyo-win-748826297</p>
            </a>
            <a
              v-reveal="{ delay: 240, distance: 18 }"
              href="mailto:pyaephyowin706@gmail.com"
              class="panel relative overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-1 sm:col-span-2 xl:col-span-1"
              style="border-color: color-mix(in srgb, var(--accent) 54%, var(--surface-border)); background: linear-gradient(145deg, color-mix(in srgb, var(--accent) 20%, var(--surface-strong)) 0%, color-mix(in srgb, var(--surface-strong) 92%, transparent) 100%); box-shadow: var(--shadow-soft);"
            >
              <span class="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]"></span>
              <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--accent)]">Email</p>
              <p class="mt-3 text-xl font-semibold break-all text-[var(--text)] sm:text-[1.2rem]">pyaephyowin706@gmail.com</p>
              <p class="mt-2 max-w-md text-sm text-[var(--text-soft)]">Best for collaboration, consulting, and product-focused engineering conversations.</p>
              <p class="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-[var(--text-soft)]">Usually replies within 24-48 hours.</p>
              <span class="mt-5 inline-flex items-center rounded-full border border-[var(--accent)] px-4 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--accent)]">Email me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
