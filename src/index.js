import Vue from '@hippy/vue'

import HiText from "./components/text";

const MAN_VERSION = '0.0.1'

/* global MAN_VERSION */
const version = /* @echo MAN_VERSION */ MAN_VERSION

export const components = {
  HiText
}

// Define plugin installation method
const install = function (Vue) {
  if (!Vue || install.installed) {
    return
  }

  // Register global components
  const componentsNames = Object.keys(components)
  componentsNames.forEach(name => {
    const component = components[name]
    if (component.name) {
      Vue.component(component.name, component) // kebab-case
      Vue.component(transformCamelCase(`-${component.name}`), component) // PascalCase
    }
  })

  // Mount to prototype
  // Vue.prototype.$toast = Toast
  // Vue.prototype.$dialog = Dialog
  // Vue.prototype.$actionsheet = ActionSheet
}

install(Vue)

export {
  HiText
};

export default {
  install,
  version,
}

