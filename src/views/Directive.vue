<template>
  <div class="directive">
    <h1>vue指令</h1>
    <input type="text" v-focus />

    <main>
      <button @click.stop="showModal = true">弹窗</button>
      <div
        style="
          position: fixed;
          top: 0%;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.6);
        "
        v-show="showModal"
      >
        <!-- 自定义指令 -->
        <div
          style="
            position: absolute;
            top: 40%;
            left: 40%;
            height: 200px;
            width: 400px;
            background: white;
            box-shadow: -1px -1px 10px -1px rgba(0, 0, 0, 0.1);
          "
          v-click-out="clickOut"
        >
          通过 v-click-out 指令实现 -> 点击modal外部关闭modal
        </div>
      </div>
    </main>
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

// 5
// 实现 v-click-out
// - 功能：点击标签外部触发事件
// - 运用：比如弹窗，点击modal外部关闭弹窗
// 5.1
// Node.contains(target)
// 概念：返回 boolean，表示 ( 传入的target节点 ) 是否是 ( 该节点 ) 的 ( 后代节点 )
// 注意：两种说话都是OK的，1.node节点是否包含target节点 2. target是否是node的后代节点

export default {
  name: "Directive",
  data() {
    return {
      showModal: false,
    };
  },
  directives: {
    focus: {
      inserted(el, binding, vnode, oldVnode) {
        el.focus();
      },
    },
    clickOut: {
      bind(el, binding) {
        function handler(e) {
          if (el.contains(e.target)) return;
          if (typeof binding.value === "function") {
            binding.value();
          }
        }
        document.addEventListener("click", handler);
      },
    },
  },
  methods: {
    clickOut() {
      this.showModal = false;
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
