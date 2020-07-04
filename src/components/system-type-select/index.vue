<template>
  <el-select v-model="value" placeholder="请选择" @change="change">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
</template>

<script>
import {getSelectOptions} from '../../utils'
export default {
  name: "SystemTypeSlect",
  data() {
    return {
      value: "learn",
      options: getSelectOptions()
    };
  },
  beforeMount() {
    // 用于刷新时，获取当前路由状态
    const currentPath =  this.$route.path.slice(1)
    if (currentPath) {
      this.value = this.$route.path.slice(1)
    } else {
      // 初始化时，跳转到learn路由
      this.$router.push('/learn')
    }
  },
  methods: {
    change(value) {
      console.log(value, 'value')
      this.$router.push(`/${value}`);
    }
  },
};
</script>
