<template>
  <div class="hi-reddot">
    <div class="hi-reddot_nothing" v-if="!text" :style="{paddingRight: 4}"/>
    <div class="hi-reddot_content" v-if="text" :style="{paddingRight: withAdd?3:4}">
      <span class="hi-reddot_content_text">{{text}}</span>
      <span class="hi-reddot_content_add" v-if="withAdd">+</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HiRedDot",
  props: ["text", "withAdd"]
};
</script>

<style lang="scss" scoped>
.hi-reddot {
  flex-direction: row;
  &_nothing {
    background-color: #ff4140;
    display: block;
    width: 9;
    height: 9;
    border-radius: 5;
    overflow: hidden;
  }
  &_content {
    flex-direction: row;
    border-radius: 8;
    overflow: hidden;
    height: 16;
    background-color: #ff4140;
    padding-left: 4;
    padding-right: 4;
    &_text {
      font-weight: bold;
      font-size: 11;
      color: #fff;
      height: 16;
      font-weight: bold;
      line-height: 16;
    }
    &_add {
      height: 16;
      font-weight: bold;
      font-size: 11;
      color: #fff;
      padding-top: 1;
    }
  }
}
</style>

