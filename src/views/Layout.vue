<template>
  <el-container>
    <el-header id="header">
      <div class="header-left">
        <SystemTypeSelect />
      </div>
      <div class="header-right" />
    </el-header>

    <el-container>
      <el-aside class="content-aside">Aside</el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import SystemTypeSelect from '../components/system-type-select'
export default {
  name: "systemType",
  components: {
    SystemTypeSelect
  }
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
<style lang="stylus">
.content-aside {
  width: 250px!important;
  // line-height: calc(100vh - 60px);
}
</style>

