<template>
  <div class="hi_split-line">
    <img class="line" :src="imgs[type]">
  </div>
</template>

<script>
export default {
  name: "HiSplitLine",
  data() {
    return {
      imgs: {
        lineWhiteBg:
          "https://qzonestyle.gtimg.cn/aoi/sola/20190718110120_8ALWLcN0Nx.png",
        lineGrayBg:
          "https://qzonestyle.gtimg.cn/aoi/sola/20190718110729_nzNVFwSsqO.png",
        lineBlackBg:
          "https://qzonestyle.gtimg.cn/aoi/sola/20190718110143_okd4f7f3jR.png"
      }
    };
  },
  props: {
    type: {
      type: String,
      default: "lineWhiteBg" //line__white-bg, line_gray-bg, line-black-bg
    }
  }
};
</script>

<style lang="scss">
@import "../../theme-chalk/splitLine.scss";
</style>


