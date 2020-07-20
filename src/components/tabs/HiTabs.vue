<template>
  <div>
    <div class="hi_tabs_warp hi_tabs_line_warp" v-if="type === 'line'">
      <div :style="{flex:1}" class="hi_tabs_line" :showsScrollIndicator="false">
        <div class="hi-tabs" :style="{width: isFlex ? screenWidth : scrollWidth}">
          <div
            class="hi-tab"
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{active : index=== active}"
            @click="onPress(index)"
            :data-index="index"
            @layout="onItemLayout"
            :style="isFlex ? {flex: 1} :{}"
          >
            <!-- <span
              class="hi-tab_text"
              :class="{active: index === active}"
              :style="{ fontSize,paddingLeft:(!isFlex&&index===0) ? 0 : 15 }"
            >{{tab}}</span>-->
            <HiText
              class="hi-tab_text"
              :style="{ paddingLeft :(!isFlex&&index===0) ? 0 : 15 }"
              :text="tab"
              :size="fontSize"
              :bold="index === active"
              :color="index === active ? 'black' : 'gray'"
            />

            <div :style="{width: itemWidthList[index]}" class="active">
              <div v-show="index === active" class="active-dot"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-line" :style="{width: screenWidth}">
        <HiSplitLine />
      </div>
    </div>

    <div v-if="type === 'card'" class="hi_tabs_warp hi_tabs_card">
      <div class="hi-tabs_bg">
        <div class="hi-tabs">
          <div
            class="hi-tab"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="onPress(index)"
            :data-index="index"
            @layout="onItemLayout"
            :class="{active:index=== active}"
          >
            <span class="hi-tab_text" :class="{active: index === active}">{{tab}}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="type === 'headline'" class="hi_tabs_warp hi_tabs_headline">
      <div class="hi-tabs">
        <div
          class="hi-tab"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="onPress(index)"
          :data-index="index"
          @layout="onItemLayout"
          :class="{active:index=== active}"
        >
          <span
            class="hi-tab_text"
            :class="{active: index === active}"
            :style="{ fontWeight }"
          >{{tab}}</span>
          <!-- <HiText v-if="index === active" :text="tab" :bold="true" :size="30" color="black" />

          <HiText v-else :text="tab" :bold="true" :size="19" color="gray" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "@hippy/vue";
export default {
  name: "HiTabs",
  data() {
    return {
      itemWidthList: [],
      scrollWidth: 0,
      screenWidth: 0,
      isFlex: false
    };
  },
  props: {
    tabs: Array,
    active: Number,
    type: {
      type: String,
      default: "line" //line card headline
    }
  },
  computed: {
    fontSize() {
      return this.isFlex ? 17 : 15;
    },
    fontWeight() {
      return Vue.Native.Platform === "ios" ? "600" : "bold";
    }
  },
  methods: {
    onItemLayout(evt) {
      // 计算可滚动宽度
      if (!this.scrollWidth) {
        this.scrollWidth = 0;
      }
      let itemWidthList = this.itemWidthList ? this.itemWidthList : [];
      let index =
        (evt &&
          evt.target &&
          evt.target.attributes &&
          evt.target.attributes["data-index"]) ||
        0;
      let width = (evt && evt.width) || 0;
      if (!itemWidthList[index]) {
        itemWidthList[index] = width;
        this.scrollWidth += parseInt(width);
        this.checkLayout();
      }
      this.itemWidthList = itemWidthList;
    },
    checkLayout() {
      // 当滚动宽度小于屏幕时，自动撑开
      let screenWidth = Vue.Native.Dimensions.window.width - 40;
      this.screenWidth = screenWidth;
      if (this.scrollWidth - 30 < screenWidth) {
        this.isFlex = true;
      } else {
        this.isFlex = false;
      }
    },
    onPress(index) {
      // this.onTabChange && this.onTabChange(index);
      this.$emit("change", index);
    }
  }
};
</script>

<style lang="scss">
@import "../../theme-chalk/tab.scss";
</style>


