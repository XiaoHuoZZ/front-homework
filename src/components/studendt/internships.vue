//学生管理中实习列表
<template>
  <el-main>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column :prop="item.prop" :label="item.label" width="150" v-for="item in columns" :key="item">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small">申请</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
  export default {
    name: "interships",
    data() {
      return {
        tableData: [{
          job: '前端程序员',
          base: '华为基地',
          time: '2016-05-02'
        }, {
          job: '后端程序员',
          base: '阿里基地',
          time: '2016-05-02'
        }],
        columns: [
          {
            prop:'job',
            label:'岗位'
          },
          {
            prop:'base',
            label:'基地'
          },
          {
            prop:'time',
            label:'时间'
          },
        ]
      }
    },
    methods: {
      handleClick(row) {
        //处理点击事件

      }
    }
  }
</script>

<style lang="less" scoped>

</style>