<template>
  <section id="education" class="section-shell">
    <div class="section-frame">
      <div v-reveal="{ distance: 22 }" class="section-heading">
        <p class="section-eyebrow">Study</p>
        <h2 class="section-title">Education</h2>
        <p class="section-copy">Formal study and practical training that shaped the engineering foundation behind the portfolio work.</p>
      </div>

      <!-- Tabs Switcher -->
      <div v-reveal="{ delay: 50, distance: 15 }" class="mb-10 flex justify-center">
        <div class="inline-flex gap-2 rounded-full border p-1.5 shadow-[var(--shadow-soft)] backdrop-blur-xl"
             style="background: color-mix(in srgb, var(--bg-elevated) 88%, transparent); border-color: var(--surface-border);">
          <button 
            @click="activeTab = 'academic'"
            :class="[
              'rounded-full px-5 py-2.5 text-xs md:text-sm font-bold tracking-wide transition-all duration-300 hover:cursor-pointer focus:outline-none',
              activeTab === 'academic' ? 'shadow-[var(--shadow-soft)] hover:-translate-y-0.5' : 'hover:-translate-y-0.2 hover:opacity-80'
            ]"
            :style="tabStyle(activeTab === 'academic')"
          >
            Academic Education
          </button>
          <button 
            @click="activeTab = 'certificate'"
            :class="[
              'rounded-full px-5 py-2.5 text-xs md:text-sm font-bold tracking-wide transition-all duration-300 hover:cursor-pointer focus:outline-none',
              activeTab === 'certificate' ? 'shadow-[var(--shadow-soft)] hover:-translate-y-0.5' : 'hover:-translate-y-0.2 hover:opacity-80'
            ]"
            :style="tabStyle(activeTab === 'certificate')"
          >
            Certifications
          </button>
        </div>
      </div>

      <!-- Academic Education Grid -->
      <div v-if="activeTab === 'academic'" key="academic" class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(edu, index) in ACADEMIC_EDUCATION" 
          :key="index" 
          v-reveal="{ delay: index * 70, distance: 24 }"
          :class="[
            'section-card flex h-full flex-col justify-between p-6 transition-transform duration-300',
            edu.credentialUrl
              ? 'cursor-pointer hover:-translate-y-1 focus-within:-translate-y-1'
              : 'opacity-90'
          ]"
        >
          <button
            type="button"
            class="flex h-full flex-col justify-between text-left focus:outline-none"
            :class="edu.credentialUrl ? 'cursor-pointer' : 'cursor-default'"
            :disabled="!edu.credentialUrl"
            :aria-label="edu.credentialUrl ? `Open ${edu.degree}` : `${edu.degree} document not available yet`"
            @click="openCredential(edu)"
          >
            <div>
              <p class="text-xs font-extrabold uppercase tracking-[0.26em] text-[var(--accent)]">0{{ index + 1 }}</p>
              <h3 class="mt-4 text-3xl leading-tight text-[var(--text)]">{{ edu.degree }}</h3>
              <div class="mt-4">
                <LogoLabel :label="edu.institution" :logo="edu.logo" />
              </div>
            </div>
            <div class="mt-8 flex items-center justify-between gap-4">
              <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--text-soft)]">{{ edu.period }}</p>
              <span
                v-if="edu.credentialUrl"
                class="text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[var(--accent)]"
              >
                View
              </span>
            </div>
          </button>
        </article>
      </div>

      <!-- Certifications Grid -->
      <div v-else-if="activeTab === 'certificate'" key="certificate" class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(cert, index) in CERTIFICATIONS" 
          :key="index" 
          v-reveal="{ delay: index * 70, distance: 24 }"
          :class="[
            'section-card flex h-full flex-col justify-between p-6 transition-transform duration-300',
            cert.credentialUrl
              ? 'cursor-pointer hover:-translate-y-1 focus-within:-translate-y-1'
              : 'opacity-90'
          ]"
        >
          <button
            type="button"
            class="flex h-full flex-col justify-between text-left focus:outline-none"
            :class="cert.credentialUrl ? 'cursor-pointer' : 'cursor-default'"
            :disabled="!cert.credentialUrl"
            :aria-label="cert.credentialUrl ? `Open ${cert.degree}` : `${cert.degree} document not available yet`"
            @click="openCredential(cert)"
          >
            <div>
              <p class="text-xs font-extrabold uppercase tracking-[0.26em] text-[var(--accent)]">0{{ index + 1 }}</p>
              <h3 class="mt-4 text-3xl leading-tight text-[var(--text)]">{{ cert.degree }}</h3>
              <div class="mt-4">
                <LogoLabel :label="cert.institution" :logo="cert.logo" />
              </div>
            </div>
            <div class="mt-8 flex items-center justify-between gap-4">
              <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--text-soft)]">{{ cert.period }}</p>
              <span
                v-if="cert.credentialUrl"
                class="text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[var(--accent)]"
              >
                View
              </span>
            </div>
          </button>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ACADEMIC_EDUCATION, CERTIFICATIONS } from '../constants/data';
import type { Education } from '../types';
import LogoLabel from './LogoLabel.vue';

const activeTab = ref<'academic' | 'certificate'>('academic');

const openCredential = (item: Education) => {
  if (!item.credentialUrl) {
    return;
  }

  window.open(item.credentialUrl, '_blank', 'noopener,noreferrer');
};

const tabStyle = (isActive: boolean) => {
  if (isActive) {
    return {
      color: 'var(--accent)',
      borderColor: 'color-mix(in srgb, var(--accent) 28%, var(--surface-border))',
      background: 'color-mix(in srgb, var(--accent-soft) 72%, var(--surface-strong))',
    };
  }

  return {
    color: 'var(--text-muted)',
    borderColor: 'transparent',
    background: 'transparent',
  };
};
</script>
