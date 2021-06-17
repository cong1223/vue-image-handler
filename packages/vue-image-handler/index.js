import VueImageHandler from './src/index.vue';

VueImageHandler.install = function(Vue) {
  Vue.component(VueImageHandler.name, VueImageHandler);
}

export default VueImageHandler;

// /* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

// export { VueImageHandler }

// export default {
//   version: '0.5.6',
//   install,
//   VueImageHandler,
//   vueCropper: VueCropper
// }
