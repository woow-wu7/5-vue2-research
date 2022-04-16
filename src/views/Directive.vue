<template>
  <div class="directive">
    <h1>vue指令</h1>
    <input type="text" v-focus />
  </div>
</template>

<script>
// 指令

// 1
// vue内置指令
// - v-if v-show
// - v-text v-html
// - v-for v-bind v-on
// - v-model v-slot v-once
// - v-pre v-cloak
// -------------------

// 2
// 自定义指令
// 注册
//  - 全局注册：Vue.directive('directive-name', options)
//  - 局部注册：组件选项对象 directives: { directive-name: options }
// 钩子函数
//  - bind unbind
//  - update componentUpdate
//  - inserted
//  - 官网说明 https://cn.vuejs.org/v2/guide/custom-directive.html
// 钩子函数的参数
//  - el binding vnode oldVnode
//  - binding
//    - 参数binding对象中具有：name + value + expression指令的值 + arg指令参数 + modifiers修饰符
//    - binding.arg：指令参数，可以是动态的值
//    - binding.value：可以是字符串，也可以是对象

// 3
// 资料：https://vue3js.cn/interview/vue/directive.html#%E4%B8%89%E3%80%81%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF

// 4
// 应用
// - 获取焦点 v-focus
// - 防抖
// - 图片懒加载
// - 一键copy
// - 点击外部触发事件 v-click-out

export default {
  name: "Directive",
  data() {
    return {};
  },
  directives: {
    focus: {
      inserted(el, binding, vnode, oldVnode) {
        el.focus();
      },
    },
  },
};
</script>

<style scoped>
.test-component,
.test-keepalive {
  border: 2px solid black;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
