import "./../styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import $axios from './requests';

store.$axios = $axios;

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});