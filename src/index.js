// import Vue from '@hippy/vue'

import HiText from "./components/HiText";
import HiButton from "./components/HiButton";
import HiTag from "./components/HiTag";
import HiImage from "./components/image";
import HiNavigator from "./components/navigator";
import HiSplitLine from "./components/splitLine";
import HiListItem from "./components/listItem";
import HiTabs from "./components/tabs";
import HiActionSheet from "./components/actionSheet";
import HiRedDot from "./components/redDot";
import HiCheckbox from "./components/Checkbox";

const MAN_VERSION = "0.0.1";

/* global MAN_VERSION */
const version = /* @echo MAN_VERSION */ MAN_VERSION;

export const components = {
  HiText,
  HiButton,
  HiTag,
  HiImage,
  HiNavigator,
  HiSplitLine,
  HiListItem,
  HiTabs,
  HiActionSheet,
  HiRedDot,
  HiCheckbox,
};

// Define plugin installation method
const install = function(Vue) {
  // if (!Vue || install.installed) {
  //   return
  // }
  // // Register global components
  // const componentsNames = Object.keys(components)
  // componentsNames.forEach(name => {
  //   const component = components[name]
  //   if (component.name) {
  //     Vue.component(component.name, component) // kebab-case
  //     // Vue.component(transformCamelCase(`-${component.name}`), component) // PascalCase
  //   }
  // })
};

// install(Vue)

export {
  HiText,
  HiButton,
  HiTag,
  HiImage,
  HiNavigator,
  HiSplitLine,
  HiListItem,
  HiTabs,
  HiActionSheet,
  HiRedDot,
  HiCheckbox,
};

export default {
  install,
  version,
};
