<template>
  <div class="flex items-center gap-3">
    <img
      v-if="showImage"
      :src="logo"
      :alt="altText"
      class="h-7 w-7 rounded-md border border-[var(--surface-border)] bg-white object-contain p-0.5"
      @error="handleImageError"
    />
    <span
      v-else
      class="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--surface-border)] text-[10px] font-extrabold uppercase"
      style="background: color-mix(in srgb, var(--accent-soft) 62%, var(--surface-strong)); color: var(--accent);"
    >
      {{ initials }}
    </span>
    <p :class="textClass">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    label: string;
    logo?: string;
    alt?: string;
    textClass?: string;
  }>(),
  {
    logo: undefined,
    alt: undefined,
    textClass: 'text-base leading-7 text-[var(--text-muted)]'
  }
);

const imageFailed = ref(false);

watch(
  () => props.logo,
  () => {
    imageFailed.value = false;
  }
);

const altText = computed(() => props.alt ?? props.label);

const initials = computed(() =>
  props.label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('')
);

const showImage = computed(() => Boolean(props.logo) && !imageFailed.value);

const handleImageError = () => {
  imageFailed.value = true;
};
</script>