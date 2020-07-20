<template>
  <div class="listitem" :class="'listitem_l'+lineNum" :key="lineNum" @click="onPress">
    <!-- 一行列表 -->
    <div slot="leftele" v-if="lineNum===1" class="listitem-leftele">
      <slot name="imgele">
        <HiImage size="s" :src="img" :type="imgType" class="img-ele" v-show="showImg" />
      </slot>
      <slot name="title">
        <HiText :text="title" :numberOfLines="1" :style="{flex:1}" />
      </slot>
    </div>
    <!-- 二行列表 -->
    <div slot="leftele" v-if="lineNum===2" class="listitem-leftele">
      <div v-if="withRank && rankNum" class="rank_warpper">
        <img v-if="rankNum <3" :src="rankIcons[rankNum-1]" class="rank_icon" />
        <HiText
          v-else
          :text="rankNum"
          :numberOfLines="1"
          :size="13"
          color="gray"
          class="rank_text"
        />
      </div>
      <slot name="imgele" v-if="showImg">
        <HiImage size="m" :src="img" :type="imgType" class="img-ele" />
      </slot>
      <slot name="title">
        <div class="text_warpper">
          <HiText :text="title" :numberOfLines="1" :style="{flex:1}" :bold="true" />
          <HiText
            :text="subTitle"
            :size="13"
            :numberOfLines="1"
            :style="{flex:1}"
            color="gray"
            class="sub_title"
          />
        </div>
      </slot>
    </div>

    <!-- 三行列表 -->
    <div slot="leftele" v-if="lineNum===3" class="listitem-leftele">
      <div v-if="withRank && rankNum" class="rank_warpper">
        <img v-if="rankNum < 4" :src="rankIcons[rankNum-1]" class="rank_icon" />
        <HiText
          v-else
          :text="rankNum"
          :numberOfLines="1"
          :size="13"
          color="gray"
          class="rank_text"
        />
      </div>
      <slot name="imgele" v-if="showImg">
        <HiImage size="l" :src="img" :type="imgType" class="img-ele" />
      </slot>

      <div class="text_warpper">
        <slot name="title">
          <HiText :text="title" :numberOfLines="1" :style="{flex:1}" :bold="500" />
        </slot>

        <slot name="sub_title">
          <HiText
            :text="subTitle"
            :size="13"
            :numberOfLines="1"
            :style="{flex:1}"
            color="gray"
            class="sub_title"
          />
        </slot>
        <slot name="tip_text">
          <HiText
            :text="tip"
            :size="13"
            :numberOfLines="1"
            :style="{flex:1}"
            color="gray"
            class="tip_text"
          />
        </slot>
      </div>
    </div>

    <div slot="rightele" class="listitem-rightele" v-if="showRightEle">
      <slot name="rightele">
        <HiText :text="rightText" :numberOfLines="1" :size="15" color="gray" />
      </slot>
    </div>
  </div>
</template>


<script>
// import HiImage from "../HiImage";
// import HiText from "../HiText";
export default {
  name: "HiListItem",
  data() {
    return {
      rankIcons: [
        "https://qzonestyle.gtimg.cn/aoi/sola/20190304152620_MApWKP7eZn.png",
        "https://qzonestyle.gtimg.cn/aoi/sola/20190304152622_GkYPwkkGLi.png",
        "https://qzonestyle.gtimg.cn/aoi/sola/20190304152620_fWqQInQAwC.png"
      ]
    };
  },
  props: {
    lineNum: {
      type: Number,
      default: 1
    },
    showImg: {
      type: Boolean,
      default: true
    },
    showRightEle: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    tip: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    },
    imgType: {
      type: String,
      default: "avatar"
    },
    withRank: {
      type: Boolean,
      default: false
    },
    rankNum: {
      type: Number,
      default: 0
    }
  },
  components: {
    // HiImage,
    // HiText
  },
  methods: {
    onPress() {
      this.$emit("btnClick");
    }
  }
};
</script>

<style lang="scss">
@import "../../theme-chalk/listItem.scss";
</style>

