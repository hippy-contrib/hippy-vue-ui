<template>
  <div class="feature-HiCheckbox">
<HiCheckbox @change="change1" :checked="checked1" label="私密上传" />
<HiCheckbox @change="change2" :checked="checked2" label="私密上传" theme="light" />
  </div>
</template>

<script>
import Vue from "vue";
import { HiCheckbox } from "hippy-vue-ui";

export default {
  name: "HiCheckboxDemo",
  components: {
    HiCheckbox
  }
};
</script>

<style scope>
.feature-HiCheckbox {
 padding: 20;
}
</style>
