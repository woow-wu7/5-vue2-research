<template>
  <div class="loading">
    <header class="header">
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
    </header>

    <br />
    <br />
    <br />
    <br />
    <section>
      <p>测试 vue.nextTick</p>
      <p ref="countRef">{{ count }}</p>
      <button @click="add">增加count</button>
    </section>
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
      count: 1,
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
    add() {
      this.count = this.count + 1;


      console.log(
        " data更新，拿不到最新的DOM :>> ",
        this.$refs.countRef.innerHTML
      );

      // 0
      // this.$nextTick
      // Vue.nextTick
      // 作用：当 ( 数据 ) 修改后，获取更新后的 ( 最新DOM )

      // 1
      // this.$next 参数回调
      this.$nextTick(function () {
        console.log(
          " this.$nextTick参数回调 - data更新，可以拿到最新的DOM :>> ",
          this.$refs.countRef.innerHTML
        );
      });

      // 2
      // this.$nextTick 返回 promise
      this.$nextTick().then(() => {
        console.log(
          " this.$nextTick返回promise - data更新，可以拿到最新的DOM :>> ",
          this.$refs.countRef.innerHTML
        );
      });
    },
  },
};
</script>

<style scoped>
.loading {
  border: 2px solid blue;
  padding: 20px;
}
.test-component,
.test-keepalive {
  border: 2px solid black;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
