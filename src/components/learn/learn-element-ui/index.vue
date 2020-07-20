<template>
  <div class="e-table">
    <div>element-ui</div>
    <div style="margin-top: 20px"></div>
    <div style="background: yellow">
      <div>slot - 测试</div>
      <ChildSlot :slotData="slotData">
        <!-- <template v-slot:default="slotProps">
          <div>{{slotProps.slotData.name}}</div>
        </template>-->
        <template v-slot:default="slotProps">
          <div>{{slotProps.newName.age}}</div>
        </template>
      </ChildSlot>
    </div>
    <div style="margin-top: 40px;"></div>

    <!-- <div>
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
    </div>-->

    <div>
      <div style="margin-top: 10px">未用slot的table优化</div>
      <el-table :data="tableData" style="width: 100%" stripe border>
        <el-table-column
          v-for="colItem in tableColConfig"
          :key="colItem.prop"
          :prop="colItem.prop"
          :label="colItem.label"
        ></el-table-column>
      </el-table>
    </div>

    <div>
      <div style="margin-top: 50px">使用slot的table优化</div>
      <MyTable :tableData="tableData">
        <template v-slot:ope>
          <el-table-column label="操作">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </el-table-column>
        </template>
      </MyTable>
    </div>

    <br />
    <a
      href="https://juejin.im/post/5a100d09f265da4324800807"
      target="_blank"
    >教程：https://juejin.im/post/5a100d09f265da4324800807</a>
    <br />
    <br />
    <a
      href="https://www.cnblogs.com/puerile/p/11899105.html"
      target="_blank"
    >表头顺序错乱 => el-table-column需要加唯一的key</a>
  </div>
</template>

<script>
import ChildSlot from "./child-slot";
import MyTable from "./my-table";

import { mapState, mapActions } from "vuex";
export default {
  name: "LearnElementUi",
  data() {
    return {
      search: "",
      slotData: {
        name: "woow_wu7",
        age: 20
      }
    };
  },
  components: {
    ChildSlot,
    MyTable
  },
  mounted() {
    this.getTableDate();
    console.log(this.tableColConfig);
  },
  computed: {
    ...mapState("ElUi", {
      tableData: state => state.tableData,
      tableColConfig: state => state.tableColConfig
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
