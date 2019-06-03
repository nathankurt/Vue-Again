import Vue from "vue";
import "./plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import VueResource from "vue-resource";
Vue.use(VueResource);

Vue.config.productionTip = false;

//vuetify
Vue.use(Vuetify, {});

// Styles
require("./styles/scss/main.scss");

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
