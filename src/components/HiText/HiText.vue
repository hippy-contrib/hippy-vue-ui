<template>
  <span
    :class="type"
    :numberOfLines="numberOfLines"
    v-bind="$attrs"
    v-on="$listeners"
    ref="hiTextRef"
  ><slot></slot></span>
</template>

<script>
import Type from "./Type";
export { Type };

export default {
  name: "HiText",
  props: {
    type: {
      type: String,
      default: Type.middleRegularPrimary
    },
    numberOfLines: [String, Number]
  }
};

</script>


<style lang="scss">
@import "../../theme-chalk/HiText.scss";
</style>


