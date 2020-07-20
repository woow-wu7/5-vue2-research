<template>
  <div class="child-slot">
    <el-table :data="tableData" style="width: 100%" stripe border>
      <div v-for="colItem in tableColConfig" :key="colItem.prop">
        <slot :name="colItem.slot" v-if="colItem.slot"></slot>
        <el-table-column 
          :prop="colItem.prop" 
          :label="colItem.label" 
          :key="colItem.id" 
          :type="colItem.type"
          v-else 
          />
      </div>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyTable",
  data() {
    return {};
  },
  props: ["tableData"],
  computed: {
    ...mapState("ElUi", {
      tableColConfig: state => state.tableColConfig
    })
  },
  mounted() {
    console.log(this.tableColConfig, "this.tableColConfig11111");
  }
};
</script>
