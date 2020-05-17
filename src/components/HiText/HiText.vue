<template>
  <span
    :style="{fontSize: size,fontWeight:weight}"
    :class="'color'+color"
    :numberOfLines="numberOfLines"
    v-bind="$attrs"
    v-on="$listeners"
  >{{text}}</span>
</template>

<script>
import Vue from "@hippy/vue";
export default {
  name: "HiText",
  props: {
    text: {
      type: [String, Number],
      default: ""
    },
    size: {
      type: Number,
      default: 17
    },
    bold: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "black" // black, gray, blue, red, white, dark
    },
    numberOfLines: [String, Number],
    emojiMode: Object
  },
  computed: {
    weight() {
      if (Vue.Native.Platform === "ios") {
        let list = [100, 200, 300, 400, 500, 600, 700, 800, 900];
        if (this.bold && +this.bold && list.indexOf(+this.bold) > -1) {
          return this.bold.toString();
        } else return this.bold ? "600" : "200";
      } else return this.bold ? "bold" : "";
    }
  }
};
</script>

<style lang="scss" >
@import "../../theme-chalk/HiText.scss";
</style>


