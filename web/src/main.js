// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(VueAxios, axios);
Vue.use(Vuetify, {
  theme: {
    seconday: "#323234",
    primary: "#211c19",
    accent: "#0a3a59",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  },
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
});
