import { createApp } from "vue";
import { VueQueryPlugin } from "vue-query";
import App from "./App.vue";
import router from "./router";

const app = createApp(App).use(VueQueryPlugin);

app.use(router);

app.mount("#app");
