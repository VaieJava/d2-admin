<template>
  <div>
    <el-table
      :data="currentTableData"
      v-loading="loading"
      size="mini"
      stripe
      style="width: 100%;"
      @selection-change="handleSelectionChange">

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column label="权限名称" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>

      <el-table-column label="权限描述" align="center">
        <template slot-scope="scope">
          {{scope.row.pdesc}}
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-row>
              <el-button @change="handleDialogOpen" type="primary"  size="small" icon="el-icon-edit" circle></el-button>
              <el-button type="danger"  size="small" icon="el-icon-delete" circle></el-button>
          </el-row>
        </template>
      </el-table-column>


    </el-table>
  </div>
</template>

<script>
import BooleanControl from '../BooleanControl'
import BooleanControlMini from '../BooleanControlMini'
export default {
  props: {
    tableData: {
      default: () => []
    },
    loading: {
      default: false
    }
  },
  data () {
      return {
          currentTableData: []
      }

  },
  watch: {
    tableData: {
      handler (val) {
        this.currentTableData = val
      },
      immediate: true
    }
  },
  methods: {
    handleSwitchChange (val, index) {
      const oldValue = this.currentTableData[index]
      this.$set(this.currentTableData, index, {
        ...oldValue,
        type: val
      })
      // 注意 这里并没有把修改后的数据传递出去 如果需要的话请自行修改
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },handleDialogOpen () {
          this.$message({
              message: '打开模态框，模式为：',
              type: 'success'
          })
      }
  }
}
</script>
