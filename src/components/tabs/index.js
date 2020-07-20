import HiTab from './HiTabs.vue';

/* istanbul ignore next */
HiTab.install = function(Vue) {
  Vue.component(HiTab.name, HiText);
};

export default HiTab;
