<template>
  <div class="hi_navigator" >
    <div class="hi_navigator_homePage" v-if="type ==='homePage'">
      <HiText :text="title" :size="30" :color="theme==='light'?'white':'black'" :bold="true"/>

      <div class="hi_navigator_homePage_input" v-if="showSearch" @click="search">
        <HiIcon type="search" :width="searchIconWidth" />
        <HiText class="hi_navigator_homePage_input_text" :text="searchText" color="gray" />
      </div>
      <slot name="rightele"></slot>
    </div>

    <div class="hi_navigator_secondaryPage" v-if="type ==='secondaryPage'">
      <div>
        <img :src="BACK_DARK_ICON" class="back_icon" />
      </div>

      <div class="left-warp">
        <slot name="leftele">
          <div class="nav-back-warp" @click="onPress">
            <HiText class="nav-back-warp_text" v-if="backText" :text="backText" />
            <img class="nav-back-warp_icon" :src="src" v-else />
          </div>
        </slot>
      </div>

      <span class="hi_navigator_secondaryPage_title" :class="theme_text" numberOfLines="1">{{title}}</span>
      <div class="right-warp">
        <slot name="rightele">
          <span></span>
        </slot>
      </div>
    </div>

    <!-- 滚动中则显示底线 -->
    <HiSplitLine v-if="scrolling" />
  </div>
</template>


<script>
// 备注左右点击区域的大小/右边文字用btnText的样式
import { BACK_DARK_ICON, BACK_LIGHT_ICON } from "./DefaultURL";
import { getPlatform } from "./../../util/equipment";

export default {
  name: "HiNavigator",
  data() {
    return {
      BACK_DARK_ICON,
      BACK_LIGHT_ICON,
      searchIconWidth: 21
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "homePage" //  homePage， secondaryPage
    },
    backText: {
      type: String,
      default: ""
    },
    showSearch: {
      type: Boolean,
      default: false
    },
    searchText: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: "dark" // dark-底色：无  文字：黑   light-底色：无  文字：白
    },
    scrolling: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    theme_text() {
      return `hi_navigator_${this.theme}_text`;
    },
    src() {
      return this[`BACK_${this.theme.toUpperCase()}_ICON`];
    }
  },
  methods: {
    onPress() {
      this.$emit("leftClick");
    },
    search(evt) {
      this.$emit("search", evt);
    }
  }
};
</script>

<style lang="scss">
@import "../../theme-chalk/navigator.scss";
</style>

