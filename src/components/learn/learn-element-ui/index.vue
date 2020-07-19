<template>
  <div class="e-table">
    <div>element-ui</div>
    <div style="margin-top: 20px; border-bottom: 1px solid #999;"></div>
    <div>
      <el-table :data="tableData" style="width: 100%" stripe border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "LearnElementUi",
  data() {
    return {
      search: ''
    };
  },
  mounted() {
    this.getTableDate();
  },
  computed: {
    ...mapState("ElUi", {
      tableData: state => state.tableData
    })
  },
  methods: {
    ...mapActions("ElUi", ["getTableDate"]),
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
