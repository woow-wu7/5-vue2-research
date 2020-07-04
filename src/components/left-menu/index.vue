<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <div v-for="(superValue) in menuData" :key="superValue.name">

      <div v-if="superValue.children">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{superValue.MenuName}}</span>
          </template>
          <div v-for="(subValue) in superValue.children" :key="subValue.name">

            <div v-if="subValue.children">
              <el-submenu index="1-2-1">
                <span slot="title">{{subValue.MenuName}}</span>
                
                <div v-if="subValue.children">
                  <el-menu-item
                    v-for="grandson in subValue.children"
                    :key="grandson.name"
                    :index="grandson.path"
                  >{{grandson.MenuName}}</el-menu-item>
                </div>
                <div v-else>
                  <el-menu-item :index="grandson.path">{{grandson.MenuName}}</el-menu-item>
                </div>
              </el-submenu>
            </div>
            <div v-else>
              <el-menu-item :index="subValue.path">{{subValue.MenuName}}</el-menu-item>
            </div>
          </div>
        </el-submenu>
      </div>
      <div v-else>
        <el-menu-item>{{superValue.MenuName}}</el-menu-item>
      </div>
    </div>
  </el-menu>
</template>

<script>
import learnRouter from "../../router/learn-routes";

export default {
  name: "LeftMenu",
  data() {
    return {
      menuData: learnRouter[0].children
    };
  },
  mounted() {
    console.log(this.menuData);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
