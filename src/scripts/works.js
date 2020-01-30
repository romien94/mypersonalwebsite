import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs",
  props:["works","currentWork"]
};

const buttons = {
  template: "#slider-buttons"
};

const tags = {
  template: "#slider-tags",
  props:["currentWork"]
};

const info = {
  template: "#slider-info",
  components: {tags},
  props:["currentWork"]
};

const display = {
  template: "#slider-display",
  components: {thumbs,buttons},
  props: ["works"],
  // methods:{
  //   handleSlide(direction) {
  //     this.emit("slide","direction")
  //   }
  // }
};

new Vue({
  el:"#slider-component",
  template: "#slider-container",
  components: {display, info},
  data (){
    return {
      works:[],
      currentWork:{}
    }
  },
  methods: {
    makeArrWithRequiredImages (data) {
      return data.map(item=>{
        const requiredPic = require(`../images/content/slider/${item.photo}`);
        item.photo = requiredPic;
        return item;
      })
    }
  },
  created () {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
    this.currentWork = this.works[0];
  },
  handleSlide(direction) {
    console.log(direction)
    // this.emit("slide","direction")
  }
});