<template>
  <div class="feature-HiActionSheet">
      <HiActionSheet />
      <HiActionSheet title="反馈问题" type="list" @footerPress="footerPress" :list="list" />
  </div>
</template>

<script>
import Vue from "vue";
import { HiActionSheet } from "hippy-vue-ui";

export default {
  name: "HiActionSheetDemo",
  components: {
    HiActionSheet
  },
  data(){
      return {
          list :  {
          title: "删除该作品",
          event: () => {
            console.log("删除该作品");
          }
        }
      }
  }
};
</script>

<style scope>
.feature-HiActionSheet {
 padding: 20;
}
</style>
