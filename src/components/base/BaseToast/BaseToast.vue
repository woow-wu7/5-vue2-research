<template>
  <div class="base-toast" :class="[backgroundType, animateFn]" v-if="isShow">{{message}}</div>
</template>

<script>
export default {
  name: "BaseToast",
  data() {
    return {
      message: "",
      type: "",
      typeArr: ["error", "success"],
      isShow: true,
      isAnimate: true
    };
  },
  computed: {
    backgroundType() {
      return "base-toast-" + this.typeArr.find(type => type === this.type);
    },
    animateFn() {
      return this.isAnimate ? "fade-in" : "fade-out";
    }
  }
};
</script>

<style lang="stylus">
.base-toast {
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}

.base-toast-error {
  background: red;
}

.base-toast-success {
  background: green;
}

.fade-in {
  animation: fade-in 0.5s;
}

.fade-out {
  animation: fade-out 0.5s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
