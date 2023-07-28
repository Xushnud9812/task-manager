import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "./style.css";

const pinia = createPinia();
const app = createApp(App);

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.mount("#app");
