<template>
  <el-container ref="container" class="layout">
    <el-header id="header">
      <el-aside width="250px" class="header-left">
        <SystemTypeSelect />
      </el-aside>
      <el-main class="header-right">
        <TopMenu />
      </el-main>
    </el-header>

    <el-container>
      <el-aside class="content-aside">
        <LeftMenu />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SystemTypeSelect from "../components/system-type-select";
import LeftMenu from "../components/left-menu";
import TopMenu from "../components/top-menu";

export default {
  name: "systemType",
  components: {
    SystemTypeSelect,
    LeftMenu,
    TopMenu,
  },
  mounted() {
    console.log(
      `this.$refs.container.$slots.default`,
      this.$refs.container.$slots.default
    );
  },
};
</script>


<style lang="stylus">
$aside-width = 250px;

#header {
  padding: 0;
  background: red;
  display: flex;

  .header-left {
    background-color: #4876E7;
    flex: 0 $aside-width;
    width: $aside-width;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-right {
    flex: 1;
    background: #5B8BFF;
  }
}
</style>
<style   scoped>
.content-aside {
  width: 250px !important;
}

.layout{
  color: red
}


:deep(.child) {
  color: blue;
}
</style>

