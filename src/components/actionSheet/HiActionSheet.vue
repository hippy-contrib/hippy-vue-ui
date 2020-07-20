<template>
  <div class="hi-actionSheet">
    <div class="hi-actionSheet_header">
      <span class="hi-actionSheet_header_text">{{_title}}</span>
    </div>
    <HiSplitLine type="lineGrayBg" />
    <div class="hi-actionSheet_body">
      <slot>
        <!-- 分享样式 -->
        <div class="share-slider" v-if="type === 'share'">
          <div class="share-item-wrap" :style="{'width': scrollWidth}">
            <div
              class="share-item"
              v-for="(item, index) in shareList"
              :key="index"
              @click="item.event"
            >
              <img class="share-pic" :src="item.icon" />
              <p class="share-channel-title">{{item.name}}</p>
            </div>
          </div>
        </div>

        <!-- 列表样式 -->
        <div  class="hi-actionSheet_body_list" v-if="type==='list'">
          <span class="hi-actionSheet_body_list_item" v-for="(item,index) in list" :key="index">{{item.title}}</span>
        </div>
      </slot>
    </div>

    <HiSplitLine type="lineGrayBg" />
    <div class="hi-actionSheet_footer" @click="footerPress">
      <p class="hi-actionSheet_footer_text">{{footerText}}</p>
    </div>
  </div>
</template>

<script>
const SHARE_ICONS = {
  TIMELINE: "https://qzonestyle.gtimg.cn/aoi/sola/20190805161251_4HzUnHoYiI.png",
  WX: "https://qzonestyle.gtimg.cn/aoi/sola/20190805161251_P4LIEw8qrX.png",
  QQ: "https://qzonestyle.gtimg.cn/aoi/sola/20190805161251_OaQQ8uoS44.png",
  QZONE: "https://qzonestyle.gtimg.cn/aoi/sola/20190805161251_vt0y0l55Ro.png",
  COPYLINK: "https://qzonestyle.gtimg.cn/aoi/sola/20190805161251_oi9mQCKsre.png"
}

const SHARE_NAMES = {
  WX: "微信",
  TIMELINE: "朋友圈",
  QQ: "QQ",
  QZONE: "空间",
  COPYLINK: "复制链接"
};

export default {
  name: "HiActionSheet",

  props: {
    type: {
      type: String,
      default: "share" // list
    },
    shareList: {
      type: Array,
      default: [
        {
          type: "WX"
        },
        {
          type: "TIMELINE"
        },
        {
          type: "QQ"
        },
        {
          type: "QZONE"
        },
        {
          type: "COPYLINK"
        }
      ]
    },
    title: {
      type: String,
      default: ""
    },
    footerText: {
      type: String,
      default: "取消"
    },
    list: Array
  },
  computed: {
    _shareList() {
      let list = this.shareList;
      if (list && list.length > 0) {
        list.forEach(it => {
          it.icon = it.type && SHARE_ICONS[it.type] ? SHARE_ICONS[it.type] : "";
          it.name = it.type && SHARE_NAMES[it.type] ? SHARE_NAMES[it.type] : "";
        });
      }
      return list;
    },
    scrollWidth() {
      return 77 * this._shareList.length + 20;
    },
    _title() {
      if (this.title) {
        return this.title;
      }
      if (this.type === "share") {
        return "分享";
      }
    }
  },
  methods: {
    footerPress() {
      this.$emit("footerPress");
    }
  }
};
</script>



<style lang="scss">
@import "../../theme-chalk/actionSheet.scss";
</style>


