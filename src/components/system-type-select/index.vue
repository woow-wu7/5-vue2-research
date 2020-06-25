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
      value: "",
      options: getSelectOptions()
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
