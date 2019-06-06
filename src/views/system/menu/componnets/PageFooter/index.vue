<template>
  <el-pagination
    :current-page="current"
    :page-size="size"
    :total="total"
    :page-sizes="[10, 20, 30, 40]"
    layout="total, sizes, prev, pager, next, jumper"
    style="margin: -10px;"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange">
  </el-pagination>
</template>

<script>
export default {
  props: {
    current: {
      default: 0
    },
    size: {
      default: 0
    },
    total: {
      default: 0
    },
      sort:{default: "menuId"}
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('change', {
        current: this.current,
        size: val,
        total: this.total,
          sort: this.sort
      })
    },
    handleCurrentChange (val) {
      this.$emit('change', {
        current: val,
        size: this.size,
        total: this.total,
          sort: this.sort
      })
    }
  }
}
</script>
