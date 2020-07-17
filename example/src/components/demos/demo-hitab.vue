<template>
  <div class="feature-HiTag">
    <HiTag text="合唱" />
    <HiTag text="合唱" color="white" />
    <HiTag text="主打" color="red" />
  </div>
</template>

<script>
import Vue from "vue";
import { HiTag } from "hippy-vue-ui";

export default {
  name: "HiTagDemo",
  components: {
    HiTag
  }
};
</script>

<style scope>
.feature-HiTag {
 padding: 20;
}
</style>
