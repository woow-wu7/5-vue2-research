<template>
  <div class="learn-source-code-axios">
    <div>learn-source-code-axios</div>
    <br>
    <el-button @click="getPrice">点击-请求获取价格</el-button>
    <div>{{price}}</div>
  </div>
</template>

<script>
import {getPrice} from '../../../../http/home'
export default {
  name: "LearnSourceCodeAxios",
  data() {
    return {
      price: ''
    };
  },
  methods: {
    async getPrice() {
      const res = await getPrice({
        skuIds: 'J_100008348542',
        type: 1
      })
      if (res.data) {
        this.price = res.data[0].p
      }
    }
  }
};
</script>
