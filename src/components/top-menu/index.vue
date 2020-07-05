<template>
  <div class="top-menu">
    <el-dropdown :show-timeout="1">
      <span class="el-dropdown-link">
        一些官网链接
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in topMenuData" :key="item.linkName">
          <a :href="item.path" target="_blank" class="link-a">{{item.linkName}}</a>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  data() {
    return {
      topMenuData: [
        {
          linkName: "Element-UI 官网",
          path: "https://element.eleme.cn/#/zh-CN/component/installation"
        },
        {
          linkName: "Vue 官网",
          path: "https://cn.vuejs.org/"
        },
        {
          linkName: "Vue-cli 官网",
          path: "https://cli.vuejs.org/zh/"
        },
        {
          linkName: "Vue-Router 官网",
          path: "https://router.vuejs.org/zh/"
        },
        {
          linkName: "Vuex 官网",
          path: "https://vuex.vuejs.org/zh/"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="stylus">
.top-menu {
  padding: 0 20px;
  display: flex;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

.link-a {
  cursor: pointer;
  color: #5b8bff;
  text-decoration: none;
  margin: 20px;
  line-height: 37px;
}

.el-dropdown-link {
  color: white;
}
</style>
