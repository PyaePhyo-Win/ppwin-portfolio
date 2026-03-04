<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
    <!-- Professional High-Energy Tech Blobs -->
    <div class="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/30 dark:bg-indigo-500/20 rounded-full blur-[100px] animate-mesh-1"></div>
    <div class="absolute top-[10%] right-[-20%] w-[50%] h-[50%] bg-blue-600/30 dark:bg-blue-500/20 rounded-full blur-[100px] animate-mesh-2"></div>
    <div class="absolute bottom-[-20%] left-[10%] w-[70%] h-[70%] bg-cyan-600/20 dark:bg-cyan-500/15 rounded-full blur-[100px] animate-mesh-3"></div>
    <div class="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-slate-400/30 dark:bg-indigo-900/20 rounded-full blur-[80px] animate-mesh-4"></div>
    <div class="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-sky-400/30 dark:bg-sky-600/10 rounded-full blur-[80px] animate-mesh-5"></div>

    <!-- Subtle texture overlay -->
    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>
  </div>
</template>

<style scoped>
@keyframes mesh-1 {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); }
  33% { transform: translate(30%, 40%) scale(1.4) rotate(120deg); }
  66% { transform: translate(-25%, 30%) scale(0.6) rotate(240deg); }
  100% { transform: translate(0, 0) scale(1) rotate(360deg); }
}

@keyframes mesh-2 {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-40%, -30%) scale(1.5); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes mesh-3 {
  0% { transform: translate(0, 0) scale(1); }
  40% { transform: translate(30%, -40%) scale(0.5); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes mesh-4 {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); }
  50% { transform: translate(-40%, 30%) scale(1.3) rotate(-180deg); }
  100% { transform: translate(0, 0) scale(1) rotate(-360deg); }
}

@keyframes mesh-5 {
  0% { transform: translate(0, 0); opacity: 0.4; }
  50% { transform: translate(30%, 35%); opacity: 0.8; }
  100% { transform: translate(0, 0); opacity: 0.4; }
}

.animate-mesh-1 { animation: mesh-1 4s infinite linear; }
.animate-mesh-2 { animation: mesh-2 5s infinite ease-in-out; }
.animate-mesh-3 { animation: mesh-3 4.5s infinite ease-in-out; }
.animate-mesh-4 { animation: mesh-4 3.5s infinite linear; }
.animate-mesh-5 { animation: mesh-5 3s infinite ease-in-out; }
</style>
