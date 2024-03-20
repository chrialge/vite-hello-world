import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AppSecond from "./App-2.vue";

createApp(App).mount("#app");
createApp(AppSecond).mount("#container");
