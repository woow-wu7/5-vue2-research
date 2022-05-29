<template>
  <div class="loading">
    <h1>element-ui Loading</h1>

    <button v-loading.fullscreen.lock.body="show" @click="change">
      loading-指令方式；支持修饰符有fullscreen，lock，body
    </button>

    <button @click="changePrototype">
      loading-原型调用的方式 this.$loading; 可以在组件中通过 this.$loading
      来调用，因为已经挂在到vue原型上
    </button>

    <button @click="changeService" id="loading-target">
      loading-服务方式; Loading.service(options)
    </button>
  </div>
</template>

<script>
// 资料
// - 官网说明： https://element.eleme.cn/#/zh-CN/component/loading
// - 源码分析：https://github.com/woow-wu7/8-element-source-code-analysis/blob/main/packages/loading/index.js

import { Loading } from "element-ui";

export default {
  name: "Loading",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    // 1. 指令方式
    change() {
      this.show = true;
      const timer = setTimeout(() => {
        this.show = false;
        clearTimeout(timer);
      }, 1000);
    },
    // 2. 原型链方式
    changePrototype() {
      const loading = this.$loading({
        fullscreen: true,
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        // background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 1000);
    },
    // 服务方式
    changeService() {
      const loadingInstance = Loading.service({
        target: document.getElementById("loading-target"),
        // target
        // - Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点
        // - 不传 target，将使用 document.body
        fullscreen: false,
        lock: false,
      });
      setTimeout(() => {
        // 以服务的方式调用的 Loading 需要异步关闭
        loadingInstance.close();
      }, 1000);
    },
  },
};
</script>

<style scoped>
.loading {
  border: 2px solid blue;
}
.test-component,
.test-keepalive {
  border: 2px solid black;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
