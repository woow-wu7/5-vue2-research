<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <RecursionLeftMenu :menuData="menuData" v-if="menuData" />
    <div v-else>menu</div>
  </el-menu>
</template>

<script>
import { routes } from "../../router/index";
import learnRouter from "../../router/learn-routes";
import RecursionLeftMenu from "./left-menu";

export default {
  name: "LeftMenu",
  components: {
    RecursionLeftMenu
  },
  data() {
    return {
      menuData: learnRouter[0].children
    };
  },
  watch: {
    $route() {
      this.mathMenuPath()
    }
  },
  mounted() {
    this.mathMenuPath()
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    mathMenuPath() {
      const currentPath = this.$route.path;
      routes[0].children.forEach(item => {
        if (currentPath.match(item.path)) {
          console.log(item.children, "222");
          this.menuData = item.children;
        }
      });
    }
  }
};
</script>
