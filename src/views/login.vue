<template>
  <div class="login">
    <div class="wrap">
      <el-input placeholder="请输入用户名" v-model="name"></el-input>
      <div style="margin-top: 15px;"></div>
      <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      <div style="margin-top: 15px;"></div>
      <el-button type="primary" class="login-button" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {};
  },
  computed: {
    ...mapState("LoginModule", ["name", "password"]) // 等同于  ...mapState('LoginModule', {name: state => state.name, password: state => state.password})
  },
  methods: {
    ...mapActions("LoginModule", ["getPrice"]),
    login() {
      const params = {
        name: this.name,
        password: this.password
      };
      this.getPrice(params)
    }
  },
  mounted() {
    console.log(this.state);
  }
};
</script>

<style lang="stylus" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrap {
    width: 250px;
    height: 300px;

    .login-button {
      width: 100%;
    }
  }
}
</style>
