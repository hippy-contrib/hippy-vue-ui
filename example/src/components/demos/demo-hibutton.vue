<template>
  <div class="feature-list">
      <HiButton type="primary" size="s">Button 组件</HiButton>
      <HiButton type="regular" size="s">Button 组件</HiButton>
      <HiButton type="info" size="s">Button 组件</HiButton>
      <HiButton size="s">Button 组件</HiButton>


      <HiButton type="primary">Button 组件</HiButton>
      <HiButton type="regular">Button 组件</HiButton>
      <HiButton type="info">Button 组件</HiButton>
      <HiButton>Button 组件</HiButton>

      <HiButton :disable="true" type="primary">Button 组件</HiButton>
      <HiButton type="regular" :disable="true">Button 组件</HiButton>
      <HiButton type="info" :disable="true">Button 组件</HiButton>
      <HiButton :disable="true">Button 组件</HiButton>
</div>
</template>

<script>
import Vue from "vue";
import { HiButton } from "hippy-vue-ui";

export default {
  name: "HiButtonDemo",
  components: {
    HiButton
  }
};
</script>

<style scope>
</style>
