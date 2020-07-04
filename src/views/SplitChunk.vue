<template>
  <div class="split-chunk">
    <div>split-chunk</div>
    <BaseButton />
  </div>
</template>

<script>
export default {
  name: "SplitChunk",
  mounted() {
    this.$BaseToast({
      message: '22'
    })
  }
};
</script>
