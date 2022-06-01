import { createApp } from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './lib/font-awesome.js';
// import VueSplide from '@splidejs/vue-splide';
import App from "./App.vue";

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount("#app")
