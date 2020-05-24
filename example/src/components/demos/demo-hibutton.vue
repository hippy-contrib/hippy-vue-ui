<template>
  <div class="feature-hiButton">
    <HiButton type="primary">Button 组件</HiButton>
    <HiButton type="regular">Button 组件</HiButton>
    <HiButton type="info">Button 组件</HiButton>
    <HiButton>Button 组件</HiButton>

    <HiButton :disable="true" type="primary">Button 组件</HiButton>
    <HiButton type="regular" :disable="true">Button 组件</HiButton>
    <HiButton type="info" :disable="true">Button 组件</HiButton>
    <HiButton :disable="true">Button 组件</HiButton>

    <HiButton size="s" type="primary">Button 组件</HiButton>
    <HiButton size="m" type="primary">Button 组件</HiButton>
    <HiButton size="l" type="primary">Button 组件</HiButton>
    <HiButton size="xl" type="primary">Button 组件</HiButton>
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
.feature-hiButton {
 padding: 20;
}
</style>
