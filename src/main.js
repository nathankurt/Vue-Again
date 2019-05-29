import Vue from "vue";
import './plugins/vuetify'
import "./plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import VueResource from "vue-resource";
Vue.use(VueResource);

// import vue-github-api
import GitHubAPI from "vue-github-api";
Vue.use(GitHubAPI, { token: "4349722d64498f7a0a34dcabed4214317e516e98" });
Vue.config.productionTip = false;

//vuetify
Vue.use(Vuetify, {
  theme: {
    primary: "#2b7356",
    secondary: "#732b48",
    accent: "#2b637c"
  }
});

// Styles
require("./styles/scss/main.scss");
Vue.config.devtools = true;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
