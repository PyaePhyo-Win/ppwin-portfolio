<template>
  <div class="fixed inset-0 -z-10 overflow-hidden transition-colors duration-500">
    <div class="orb orb-one"></div>
    <div class="orb orb-two"></div>
    <div class="orb orb-three"></div>
    <div class="grid-wash"></div>
    <div class="vignette"></div>
  </div>
</template>

<style scoped>
.orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(90px);
  opacity: 0.55;
}

.orb-one {
  top: -10%;
  left: -8%;
  width: 34rem;
  height: 34rem;
  background: color-mix(in srgb, var(--highlight) 18%, transparent);
  animation: drift-one 18s ease-in-out infinite;
}

.orb-two {
  top: 8%;
  right: -10%;
  width: 28rem;
  height: 28rem;
  background: color-mix(in srgb, var(--accent) 24%, transparent);
  animation: drift-two 20s ease-in-out infinite;
}

.orb-three {
  bottom: -18%;
  left: 20%;
  width: 36rem;
  height: 36rem;
  background: color-mix(in srgb, var(--accent) 14%, transparent);
  animation: drift-three 22s ease-in-out infinite;
}

.grid-wash {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, color-mix(in srgb, var(--surface-border) 58%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in srgb, var(--surface-border) 58%, transparent) 1px, transparent 1px);
  background-size: 84px 84px;
  mask-image: radial-gradient(circle at center, black 35%, transparent 82%);
  opacity: 0.28;
}

.vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 46%, rgba(0, 0, 0, 0.06) 100%);
}

@keyframes drift-one {
  0%,
  100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(10%, 8%, 0) scale(1.08); }
}

@keyframes drift-two {
  0%,
  100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-12%, 10%, 0) scale(1.06); }
}

@keyframes drift-three {
  0%,
  100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(8%, -10%, 0) scale(1.04); }
}

@media (max-width: 767px) {
  .grid-wash {
    background-size: 56px 56px;
  }

  .orb-one,
  .orb-two,
  .orb-three {
    width: 22rem;
    height: 22rem;
  }
}
</style>
