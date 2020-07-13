<template>
  <div class="learn-source-code-axios">
    <div>learn-source-code-axios</div>
    <br />
    <el-button @click="getPrice">点击-请求获取价格</el-button>
    <div>{{price}}</div>

    <br />
    <div @click="cancelRequest">取消请求</div>
  </div>
</template>

<script>
import { getPrice, getPrice2 } from "../../../../http/home";
import axios from "axios";

export default {
  name: "LearnSourceCodeAxios",
  data() {
    return {
      price: "",
      cancel: null
    };
  },
  methods: {
    async getPrice() {
      const res = await getPrice({
        skuIds: "J_100008348542",
        type: 1
      });
      if (res.data) {
        this.price = res.data[0].p;
      }
    },
    cancelRequest() {
      this.cancel();
    }
  },
  mounted() {
    this.getPrice();
    getPrice2().then((res) => {
      console.log(res, 'ressss')
    })

    axios.get("http://localhost:3000/", {
      cancelToken: new axios.CancelToken(c => (this.cancel = c))
    });
  }
};
</script>
