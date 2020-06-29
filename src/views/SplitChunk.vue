<template>
  <div class="split-chunk">
    <div>split-chunk</div>
    <BaseButton />
  </div>
</template>

<script>
export default {
  name: "SplitChunk",
  data() {
    return {
    };
  },
  mounted() {
    this.$BaseToast({
      message: 'toast',
      type: 'error',
      duration: 3000
    })
  }
};
</script>
