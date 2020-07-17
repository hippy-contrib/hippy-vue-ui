import HiTag from './HiTag.vue';

/* istanbul ignore next */
HiTag.install = function(Vue) {
  Vue.component(HiTag.name, HiText);
};

export default HiTag;
