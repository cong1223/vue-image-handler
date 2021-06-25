import VueImageHandler from './src/index.vue';

// 定义组件列表
const componentsList = [
  VueImageHandler
];

const install = function(Vue) {
  if(install.installed) return;
  // 注册所有组件
  componentsList.forEach((component) => {
    Vue.component(component.name, component);
  })
}

// /* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { VueImageHandler }

export default {
  install,
  VueImageHandler
}
