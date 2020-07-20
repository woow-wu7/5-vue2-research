<template>
  <div class="child-slot">
    <slot name="default" :newName="slotData">
      {{slotData.name}}
    </slot>
  </div>
</template>

<script>
export default {
  name: "ChildSlot",
  data() {
    return {};
  },
  props: {
    slotData: {
      type: Object,
      default() {
        return {
          name: ''
        }
      }
    }
  }
};
</script>
