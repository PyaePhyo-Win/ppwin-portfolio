<template>
  <nav class="sticky top-0 z-50 px-4 py-4 md:px-6">
    <div class="mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-xl md:px-6"
      style="background: color-mix(in srgb, var(--bg-elevated) 88%, transparent); border-color: var(--surface-border);">
      <router-link to="/" class="flex items-center gap-3 text-[var(--text)] transition-opacity duration-300 hover:opacity-80">
        <span class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-extrabold"
          style="background: color-mix(in srgb, var(--accent-soft) 62%, var(--surface-strong)); color: var(--accent);">PP</span>
        <span class="hidden sm:block">
          <span class="block text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--accent)]">Portfolio</span>
          <span class="block text-lg font-extrabold">Pyae Phyo Win</span>
        </span>
      </router-link>

      <div class="hidden items-center gap-2 md:flex">
        <a v-for="link in NAV_LINKS" :key="link.name" :href="link.href"
          :class="[
            'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300',
            isActiveLink(link.href) ? 'shadow-[var(--shadow-soft)]' : 'hover:-translate-y-0.5'
          ]"
          :style="linkStyle(link.href)"
          @click="setActiveSection(link.href)">
          {{ link.name }}
        </a>
        <button @click="toggleDarkMode"
          class="flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 focus:outline-none"
          style="border-color: var(--surface-border); background: color-mix(in srgb, var(--surface-strong) 82%, transparent); color: var(--text);">
          <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>
      </div>

      <div class="flex items-center md:hidden">
        <button @click="toggleDarkMode"
          class="mr-2 flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 focus:outline-none"
          style="border-color: var(--surface-border); background: color-mix(in srgb, var(--surface-strong) 82%, transparent); color: var(--text);">
          <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>
        <button @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="flex h-11 w-11 items-center justify-center rounded-full border focus:outline-none"
          style="border-color: var(--surface-border); color: var(--text); background: color-mix(in srgb, var(--surface-strong) 82%, transparent);">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMobileMenuOpen"
      class="mx-4 mt-3 rounded-[1.75rem] border p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden"
      style="background: color-mix(in srgb, var(--bg-elevated) 92%, transparent); border-color: var(--surface-border);">
      <a v-for="link in NAV_LINKS" :key="link.name" :href="link.href"
        class="block rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300"
        :style="mobileLinkStyle(link.href)"
        @click="handleMobileNavClick(link.href)">
        {{ link.name }}
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { NAV_LINKS } from '../constants/data';

const isMobileMenuOpen = ref(false);
const isDarkMode = ref(false);
const activeSection = ref('#about');

const isActiveLink = (href: string) => activeSection.value === href;

const setActiveSection = (href: string) => {
  activeSection.value = href;
};

const handleMobileNavClick = (href: string) => {
  setActiveSection(href);
  isMobileMenuOpen.value = false;
};

const linkStyle = (href: string) => {
  if (isActiveLink(href)) {
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

const mobileLinkStyle = (href: string) => {
  if (isActiveLink(href)) {
    return {
      color: 'var(--accent)',
      background: 'color-mix(in srgb, var(--accent-soft) 72%, var(--surface-strong))',
      border: '1px solid color-mix(in srgb, var(--accent) 28%, var(--surface-border))',
    };
  }

  return {
    color: 'var(--text-muted)',
    background: 'transparent',
    border: '1px solid transparent',
  };
};

const syncActiveSectionFromHash = () => {
  const hash = window.location.hash;
  if (hash && NAV_LINKS.some((link) => link.href === hash)) {
    activeSection.value = hash;
  }
};

const syncActiveSectionFromScroll = () => {
  const navOffset = 140;
  const sections = NAV_LINKS
    .map((link) => {
      const element = document.querySelector<HTMLElement>(link.href);
      if (!element) {
        return null;
      }

      return {
        href: link.href,
        top: element.offsetTop,
        bottom: element.offsetTop + element.offsetHeight,
      };
    })
    .filter((section): section is { href: string; top: number; bottom: number } => section !== null);

  const scrollPosition = window.scrollY + navOffset;
  const currentSection = sections.find((section, index) => {
    const nextSectionTop = sections[index + 1]?.top ?? Number.POSITIVE_INFINITY;
    return scrollPosition >= section.top && scrollPosition < nextSectionTop;
  });

  if (currentSection) {
    activeSection.value = currentSection.href;
    return;
  }

  if (window.scrollY < (sections[0]?.top ?? 0)) {
    activeSection.value = sections[0]?.href ?? '#about';
  }
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

onMounted(() => {
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  } else {
    isDarkMode.value = false;
    document.documentElement.classList.remove('dark');
  }

  syncActiveSectionFromHash();
  syncActiveSectionFromScroll();
  window.addEventListener('hashchange', syncActiveSectionFromHash);
  window.addEventListener('scroll', syncActiveSectionFromScroll, { passive: true });
  window.addEventListener('resize', syncActiveSectionFromScroll);
});

onUnmounted(() => {
  window.removeEventListener('hashchange', syncActiveSectionFromHash);
  window.removeEventListener('scroll', syncActiveSectionFromScroll);
  window.removeEventListener('resize', syncActiveSectionFromScroll);
});
</script>