<template>
  <div class="hi_image" :style="hi_image_style" @click="click">
    <img :src="image.error" :style="hi_image_style" class="img" v-if="platform==='ios'" />
    <img
      :src="image.src"
      :style="hi_image_style"
      class="img"
      :resizeMode="resizeMode"
      @error="error"
    />
    <div :class="'mask_'+mask" :style="hi_image_style" v-if="image.src"></div>
    <img v-if="iconAddress" :src="iconAddress" class="hi_image_icon" :style="iconSize" />
  </div>
</template>

<script>
import { DEFAULT_AVATAR, DEFAULT_UGC } from "./DefaultURL.js";
import { getPlatform } from "./../../util/equipment";

const sizeRules = {
    xs: 20,
    s: 35,
    m: 50,
    l: 65,
    xl: 80,
    xxl: 100
};

const default_img = {
  avatar: DEFAULT_AVATAR,
  ugc: DEFAULT_UGC
};

const icon_type_list = {
  purple: "https://qzonestyle.gtimg.cn/aoi/sola/20190708154040_jq8Abz1O6F.png",
  yellow: "https://qzonestyle.gtimg.cn/aoi/sola/20190708154040_lg2A3d5HEG.png",
  red: "https://qzonestyle.gtimg.cn/aoi/sola/20190708154040_vU6efKeSNY.png",
  blue: "https://qzonestyle.gtimg.cn/aoi/sola/20190708154040_qC3yisfpHA.png"
};

export default {
  name: "HiImage",
  data() {
    return {
      iconAddress: this.icon || icon_type_list[this.iconType],
      image: {
        error: default_img[this.type],
        src: this.src
      },
      platform: "ios"
    };
  },
  mounted() {
    this.platform = getPlatform();
    if (!this.src) {
      this.error();
    }
  },
  watch: {
    src(newValue) {
      this.image = {
        error: this.image.error,
        src: newValue
      };
    }
  },
  props: {
    type: {
      // 默认图片为头像默认图片，也可指定“ugc”
      type: String,
      default: "ugc"
    },
    src: {
      // 原始图片
      type: String,
      default: ""
    },
    size: {
      // 图片尺寸
      type: String,
      default: "m"
    },
    resizeMode: String,
    shape: {
      type: String,
      default: ""
    },
    mask: {
      type: String,
      default: "normal" // none normal deep
    },
    icon: {
      type: String,
      default: ""
    },
    iconType: {
      type: String,
      default: "" //purple yellow red blue
    }
  },
  computed: {
    hi_image() {
      let cls = `hi_image_common hi_image_${this.type} hi_image_${this.type}_${this.size}`;
      return cls;
    },
    hi_image_style() {
      let size = sizeRules[this.size];
      let borderRadius = this.calcBorderRadius(size);
      return {
        width: size,
        height: size,
        borderRadius
      };
    },
    iconSize() {
      let size = this.calcIconSize(sizeRules[this.size]);
      return {
        width: size,
        height: size
      };
    }
  },
  methods: {
    calcBorderRadius(size) {
      if (this.type === "avatar") {
        return size / 2;
      } else if (size < 36) {
        return 4;
      } else if (size < 66) {
        return 6;
      } else {
        return 10;
      }
    },
    calcIconSize(size) {
      if (size < 36) {
        return 12;
      } else if (size < 51) {
        return 15;
      } else {
        return 24;
      }
    },
    error(evt) {
      // ios端@error失效
      if (this.platform === "android") {
        this.image = {
          src: this.image.error
        };
      }
      this.$emit("error", evt);
      return;
    },
    click(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<style lang="scss">
@import "../../theme-chalk/image.scss";
</style>


