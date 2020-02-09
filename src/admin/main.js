import "./../styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import Vue from 'vue';
import App from './App.vue'

new Vue({
  el: "#app-root",
  render: h => h(App)
});