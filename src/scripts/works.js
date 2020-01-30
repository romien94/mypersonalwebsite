import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs"
}

const buttons = {
  template: "#slider-buttons"
}

const tags = {
  template: "#slider-tags"
}

const info = {
  template: "#slider-info",
  components: {tags}
}

const display = {
  template: "#slider-display",
  components: {thumbs,buttons}
}

new Vue({
  el:"#slider-component",
  template: "#slider-container",
  components: {display, info}
});