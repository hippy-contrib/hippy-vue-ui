<template>
  <div class="hi-tag-warp" :class="'hi-tag-warp_' + color">
    <span class="hi-tag-warp_text" :class="'hi-tag-warp_' + color + '_text'">{{text}}</span>
  </div>
</template>
<script>
export default {
  name: "HiTag",
  props: {
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "blue" // blue white red
    }
  }
};
</script>

<style lang="scss" scoped>
.hi-tag-warp {
  padding: 2;
  border-radius: 2;
  width: 27;
  height: 16;
  justify-content: center;
  align-items: center;
  &_text {
    font-size: 10;
    font-weight: bold;
  }
}
.hi-tag-warp_blue {
  border-width: 1;
  border-style: solid;
  border-color: #6e768c;
  &_text {
    color: #5d6884;
  }
}

.hi-tag-warp_white {
  border-width: 1;
  border-style: solid;
  border-color: #fff;
  &_text {
    color: #fff;
  }
}

.hi-tag-warp_red {
  background-color: #ff4140;
  &_text {
    color: #fff;
  }
}
</style>
