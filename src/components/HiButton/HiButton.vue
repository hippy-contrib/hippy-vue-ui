<template>
  <div @touchStart="isTouching = true" @touchMove="isTouching = false" @touchEnd="onPress">
    <span :class="hi_button"> <slot>  </slot></span>
  </div>
</template>

<script>
export default {
  name: "HiButton",
  data() {
    return {
      isTouching: false,
      lock: false,
      timing: null,
      types: ["regular", "primary", "info", "default"],
      sizes: ["s", "m", "l", "xl"]
    };
  },
  props: {
    disable: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "m" // s,m,l,xl
    },
    type: {
      type: String,
      default: "default" // regular, primary, info, default
    }
  },
  computed: {
    hi_button() {
      if (this.sizes.indexOf(this.size) < 0) {
        this.size = "m";
      }
      if (this.types.indexOf(this.type) < 0) {
        this.type = "default";
      }
      let touchCls = this.isTouching ? `${this.type}_touch` : "";
      let disableCls = this.disable ? `${this.type}_disable` : "";
      return `hi_btn ${this.type} hi_btn_${this.size} ${touchCls} ${disableCls}`;
    }
  },
  methods: {
    onPress() {
      this.fadeOut();
      if (this.disable) {
        console.warn("不可点击");
        return;
      }
      if (this.lock) {
        console.warn("不要连续点击");
        return;
      }
      console.warn("确认点击");
      this.lock = true;
      this.$emit("onTouchablePress");
    },
    fadeOut() {
      if (this.disable) {
        this.isTouching = false;
        console.warn("不可 fade out");
        return;
      }
      this.timing && clearTimeout(this.timing);
      this.timing = setTimeout(() => {
        this.lock = false;
        this.isTouching = false;
      }, this.timeout);
    }
  }
};
</script>

<style lang="scss">
@import "../../theme-chalk/button.scss";
</style>


