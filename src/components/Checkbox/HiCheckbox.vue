<template>
  <div class="hi-checkbox" @click="change">
    <div>
      <img v-if="checked" :src="CHECKED_ICON" class="hi-checkbox_checked" />
      <div v-if="!checked" class="hi-checkbox_uncheck" />
    </div>
    <!-- <span class="hi-checkbox_label">{{text}}</span> -->
    <HiText
      class="hi-checkbox_label"
      :text="text"
      :size="size"
      :numberOfLines="1"
      :color="theme === 'light' ? 'white' : 'black'"
    />
  </div>
</template>
<script>
export default {
  name: "HiCheckbox",
  data() {
    return {
      CHECKED_ICON:
        "https://qzonestyle.gtimg.cn/aoi/sola/20190806193636_bPcfxG86ec.png"
    };
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    trueLabel: {
      type: String,
      default: ""
    },
    falseLabel: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: "dark" // light
    },
    size: {
      type: Number,
      default: 15
    }
  },
  computed: {
    text() {
      if (this.trueLabel && this.checked) {
        return this.trueLabel;
      }
      if (this.falseLabel && !this.checked) {
        return this.falseLabel;
      }
      return this.label;
    }
  },
  methods: {
    change() {
      this.$emit("change");
    }
  }
};
</script>

<style lang="scss" scoped>
.hi-checkbox {
  flex-direction: row;
  &_checked {
    width: 18;
    height: 18;
  }
  &_uncheck {
    width: 18;
    height: 18;
    border-width: 1;
    border-style: solid;
    border-color: #a0a0a5;
    border-radius: 9;
  }
  &_label {
    margin-left: 5;
  }
}
</style>

