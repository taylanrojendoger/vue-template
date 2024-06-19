// Vue
import { createApp } from 'vue';
import App from './App.vue';

// Pinia
import { createPinia } from 'pinia';

// Router
import router from './router';

// Styles
import './assets/main.css';

const app = createApp(App);

app.use(router);

const store = createPinia();
app.use(store);

app.mount('#app');
