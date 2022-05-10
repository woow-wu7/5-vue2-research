<template>
  <div class="path-var">
    <h1>带参数的路由 - 复用 - 生命周期</h1>

    <Button @click="goPath2">go path2</Button>
    <Button @click="goPath1">go path1</Button>
  </div>
</template>

<script>
export default {
  name: "PathVar",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    goPath2() {
      this.$router.push({ path: "/learn/path-var/2" });
    },
    goPath1() {
      this.$router.push({ path: "/learn/path-var/1" });
    },
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated"); // 从 "/learn/path-var/1" 到 "/learn/path-var/2" 生命周期 updated 并没有执行
  },
  watch: {
    $route: function (to, from) {
      console.log("to :>> ", to);
      console.log("from :>> ", from);
    },
  },
  // 注意：当 beforeRouteUpdate 和 watch $route 同时存在时，beforeRouteUpdate生效
  async beforeRouteUpdate(to, from) {
    // 对路由变化做出响应...
    console.log("beforeRouteUpdate - to :>> ", to);
    console.log("beforeRouteUpdate - from :>> ", from);
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
