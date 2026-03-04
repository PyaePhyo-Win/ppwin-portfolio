<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
    <!-- Main Gradient Blobs -->
    <div class="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/30 dark:bg-indigo-600/20 rounded-full blur-[100px] animate-mesh-1"></div>
    <div class="absolute top-[10%] right-[-20%] w-[50%] h-[50%] bg-purple-500/30 dark:bg-purple-600/20 rounded-full blur-[100px] animate-mesh-2"></div>
    <div class="absolute bottom-[-20%] left-[10%] w-[70%] h-[70%] bg-blue-500/30 dark:bg-blue-600/20 rounded-full blur-[100px] animate-mesh-3"></div>
    <div class="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-pink-500/20 dark:bg-pink-600/10 rounded-full blur-[80px] animate-mesh-4"></div>
    <div class="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-[80px] animate-mesh-5"></div>

    <!-- Subtle texture overlay -->
    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>
  </div>
</template>

<style scoped>
@keyframes mesh-1 {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); }
  33% { transform: translate(10%, 15%) scale(1.1) rotate(120deg); }
  66% { transform: translate(-5%, 10%) scale(0.9) rotate(240deg); }
  100% { transform: translate(0, 0) scale(1) rotate(360deg); }
}

@keyframes mesh-2 {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-15%, -10%) scale(1.2); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes mesh-3 {
  0% { transform: translate(0, 0) scale(1); }
  40% { transform: translate(10%, -20%) scale(0.8); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes mesh-4 {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); }
  50% { transform: translate(-20%, 10%) scale(1.1) rotate(-180deg); }
  100% { transform: translate(0, 0) scale(1) rotate(-360deg); }
}

@keyframes mesh-5 {
  0% { transform: translate(0, 0); opacity: 0.2; }
  50% { transform: translate(15%, 15%); opacity: 0.5; }
  100% { transform: translate(0, 0); opacity: 0.2; }
}

.animate-mesh-1 { animation: mesh-1 20s infinite linear; }
.animate-mesh-2 { animation: mesh-2 25s infinite ease-in-out; }
.animate-mesh-3 { animation: mesh-3 22s infinite ease-in-out; }
.animate-mesh-4 { animation: mesh-4 18s infinite linear; }
.animate-mesh-5 { animation: mesh-5 15s infinite ease-in-out; }
</style>
