import Vue from '@hippy/vue'
export const getPlatform = () => {
  return Vue.Native.Platform;
}
