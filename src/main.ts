import { createApp } from 'vue';
import App from './App.vue';
import { revealDirective } from './directives/reveal';
import router from './router';
import './style.css';

createApp(App).directive('reveal', revealDirective).use(router).mount('#app');
