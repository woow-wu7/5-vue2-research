import Vue from 'vue'
// require.context
// https://cn.vuejs.org/v2/guide/components-registration.html
const requireContext = require.context('.', false, /\.vue$/)
requireContext.keys().forEach(fileName => {
  // console.log(fileName, 'fileName')
  const componentModule = requireContext(fileName)
  // console.log(componentModule, 'componentModule')
  const component = componentModule.default
  if (component.name === 'BaseToast') {
    return
  }
  Vue.component(component.name, component)
})