import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs",
  props:["works","currentWork"],
  methods: {
    setCurrentWork(currentSlide) {
      console.log(e.target);
    }
  }
};

const buttons = {
  template: "#slider-buttons"
};

const tags = {
  template: "#slider-tags",
  props:["tags"]
};

const info = {
  template: "#slider-info",
  components: {tags},
  props:["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(', ');
    }
  }
};

const display = {
  template: "#slider-display",
  components: {thumbs,buttons},
  props: ["works","currentWork","currentIndex"],
  computed: {
    reversedWorks() {
      return [...this.works].reverse();
    } 
  }
};

new Vue({
  el:"#slider-component",
  template: "#slider-container",
  components: {display, info},
  data () {
    return {
      works:[],
      currentIndex: 0
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  methods: {
    makeArrWithRequiredImages (data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/slider/${item.photo}`);
        item.photo = requiredPic;
        return item;
      });
    },
    handleSlide(direction) {
      switch(direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },
    makeInfiniteLoopForIndex(value) {
      const worksAmountComputerCounted = this.works.length - 1;
      if (value > worksAmountComputerCounted) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmountComputerCounted;
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForIndex(value);
    }
  },
  created () {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
  }
});