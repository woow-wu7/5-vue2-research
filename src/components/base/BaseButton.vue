<template>
  <button class="base-button" @click="clickFn">
    {{name}}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  data() {
    return {
      name: 'baseButton'
    };
  },
  methods: {
    clickFn() {
      this.name = this.name + '1'
    }
  }
};
</script>
