<template>
  <div class="keepalive">
    <div>learn keepalive</div>

    <button @click="currentComponent = 'A'">渲染A组件</button>
    <button @click="currentComponent = 'B'">渲染 B组件</button>

    <!-- 测试 component 动态组件 -->
    <div class="test-component">
      <div>测试 component 动态组件</div>
      <component :is="currentComponent"></component>
    </div>

    <!-- 测试 keep-alive -->
    <div class="test-keepalive">
      <div>测试 keep-alive 动态组件</div>
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("A", {
  template: `
    <section style="background: yellow;">
      <div>A component</div>
      <button @click="count++">点击改变count，测试动态组件切换后能不能保存之前的状态</button>
      <div>当前的count值：{{count}}</div>
    </section>
  `,
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    console.log("A组件 - mounted");
  },
  activated() {
    console.log("A组件 - activated");
  },
  deactivated() {
    console.log("A组件 - deactivated");
  },
});

Vue.component("B", {
  template: "<div>B component</div>",
  mounted() {
    console.log("B组件 - mounted");
  },
  activated() {
    console.log("B组件 - activated");
  },
  deactivated() {
    console.log("B组件 - deactivated");
  },
});

export default {
  name: "Learn",
  data() {
    return {
      currentComponent: "A",
    };
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
