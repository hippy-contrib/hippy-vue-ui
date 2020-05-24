<template>
  <div class="feature-list">
      <HiText :type="HiText.Type.SmallRegularBrand">测试</HiText>
      <HiText :type="HiText.Type.SmallRegularSecondary">测试</HiText>
      <HiText :type="HiText.Type.SmallRegularBrand">测试</HiText>
      <HiText :type="HiText.Type.SmallBoldPrimary">测试</HiText>
      <HiText :type="HiText.Type.SmallBoldSecondary">测试</HiText>
      <HiText :type="HiText.Type.SmallBoldBrand">测试</HiText>

      <HiText :type="HiText.Type.MiddleRegularBrand">测试</HiText>
      <HiText :type="HiText.Type.MiddleRegularSecondary">测试</HiText>
      <HiText :type="HiText.Type.MiddleRegularBrand">测试</HiText>
      <HiText :type="HiText.Type.MiddleBoldPrimary">测试</HiText>
      <HiText :type="HiText.Type.MiddleBoldSecondary">测试</HiText>
      <HiText :type="HiText.Type.MiddleBoldBrand">测试</HiText>

      <HiText :type="HiText.Type.LargeRegularBrand">测试</HiText>
      <HiText :type="HiText.Type.LargeRegularSecondary">测试</HiText>
      <HiText :type="HiText.Type.LargeRegularBrand">测试</HiText>
      <HiText :type="HiText.Type.LargeBoldPrimary">测试</HiText>
      <HiText :type="HiText.Type.LargeBoldSecondary">测试</HiText>
      <HiText :type="HiText.Type.LargeBoldBrand">测试</HiText>
  </div>
</template>

<script>
import Vue from "vue";
import { HiText } from "hippy-vue-ui";

export default {
  name: "HiTextDemo",
  components: {
    HiText
  },
  created() {
    this.HiText = HiText;
  }
};
</script>

<style scope>
</style>
