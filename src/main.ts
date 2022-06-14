import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";

import "normalize.css";
import { mockXHR } from "../mock/index";

createApp(App).use(router).mount("#app");
mockXHR();
