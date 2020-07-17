// import Vue from '@hippy/vue'

import HiText from "./components/HiText";
import HiButton from "./components/HiButton";
import HiTag from "./components/HiTag";

const MAN_VERSION = '0.0.1'

/* global MAN_VERSION */
const version = /* @echo MAN_VERSION */ MAN_VERSION

export const components = {
  HiText,
  HiButton,
  HiTag
}

// Define plugin installation method
const install = function (Vue) {
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
}

// install(Vue)

export {
  HiText,
  HiButton,
  HiTag
};

export default {
  install,
  version,
}

