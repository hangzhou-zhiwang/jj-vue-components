<template>
    <div>
        <button class="mr-20" v-for="(item,index) in messageList" :key="index" @click="showMessage(item.value)">{{item.label}}</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      messageList: [
        {
          label: "info",
          value: 1
        },
        {
          label: "success",
          value: 2
        },
        {
          label: "warning",
          value: 3
        },
        {
          label: "error",
          value: 4
        }
      ]
    };
  },
  methods: {
    showMessage(i) {
      switch (i) {
        case 1:
          this.$message({
            showClose: true,
            message: "info"
          });
          break;
        case 2:
          this.$message({
            message: "success",
            type: "success"
          });
          break;
        case 3:
          this.$message({
            message: "warning",
            type: "warning"
          });
          break;
        case 4:
          this.$message({
            message: "error",
            type: "error"
          });
          break;
        default:
          this.$message({
            showClose: true,
            message: "info"
          });
          break;
      }
    }
  }
};
</script>
<style scoped>
.mr-20 {
  display: inline-block;
  margin-right: 20px;
}
</style>

