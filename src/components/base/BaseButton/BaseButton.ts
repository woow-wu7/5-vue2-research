import Vue from 'vue'


// 全局注册组件 
// 1. 这里是 ts 文件
// 2. 如果是 .vue 文件可以使用 webpack 的 require.context
// Vue.component('BaseButton', {
//   data() {
//     return {
//       message: '这是一个基础组件-button'
//     }
//   },
//   template: `
//   <div>
//     <div>BaseButton</div>
//     <div>{{message}}</div>
//   </div>
// `,
// })