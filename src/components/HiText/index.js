import HiText, { Type } from './HiText.vue';

/* istanbul ignore next */
HiText.install = function (Vue) {
  Vue.component(HiText.name, HiText);
};

HiText.Type = Type;


export default HiText;
