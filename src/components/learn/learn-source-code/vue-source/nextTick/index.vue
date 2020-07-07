<template>
  <div class="learn-source-code-vue-nextTick">
    learn-source-code-vue-nextTick 组件
    <div ref="messageDom">message: {{this.message}}</div>
    <button @click="updateMessage">更新message</button>
  </div>
</template>

<script>
export default {
  name: "LearnSourceCodeVueNextTick",
  data() {
    return {
      message: "未更新"
    };
  },
  methods: {
    updateMessage() {
      // this.message = "更新了";
      // console.log(this.$refs.messageDom.innerHTML, "DOM - 未用nextTick");

      // 写法一
      // this.$nextTick(() => {
      //   console.log(this.$refs.messageDom.innerHTML, "DOM - 用了nextTick");
      // });

      // 写法二
      // this.$nextTick().then(() => {
      //   console.log(this.$refs.messageDom.innerHTML, "DOM - 用了nextTick");
      // });
      this.updateMessage2();
    },
    async updateMessage2() {
      this.message = "更新了";
      console.log(this.$refs.messageDom.innerHTML, "DOM - 未用nextTick");
      await this.$nextTick();
      console.log(this.$refs.messageDom.innerHTML, "DOM - 用了nextTick");
    }
  }
};
</script>

<style lang="stylus">
.learn-source-code-vue-nextTick {
  margin-top: 30px;
  padding: 30px;
  background: #adf1ff;
}
</style>
