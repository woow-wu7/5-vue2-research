<template>
  <div class="system-type">
    <el-select v-model="value" placeholder="请选择" @change="change">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "systemType",
  data() {
    return {
      value: "",
      options: [
        {
          value: "vue-router",
          label: "vue路由"
        },{
          value: "split-chunk",
          label: "(路由|组件)按需加载"
        }
      ]
    };
  },
  methods: {
    change(value) {
      this.$router.push({
        path: value
      });
    }
  }
};
</script>
