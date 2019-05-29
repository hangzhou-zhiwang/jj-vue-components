<template>
  <div class="calculator">
    <button
      style="border-radius: 5px 0 0 5px;font-size:16px;"
      @click="subtract"
      :disabled="showDisabled"
    >—</button>
    <input
      type="number"
      v-model="num"
      disabled
    >
    <button
      style="border-radius: 0 5px 5px 0;"
      @click="add"
    >+</button>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      showDisabled: true
    }
  },
  mounted() {
    if (this.num < 1) {
      this.showDisabled = true
    } else {
      this.showDisabled = false
    }
  },
  methods: {
    add() {
      this.$emit('add')
    },
    subtract() {
      this.$emit('subtract')
    }
  },
  watch: {
    num() {
      if (this.num < 1) {
        this.showDisabled = true
        this.$emit('del')
      } else {
        this.showDisabled = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.calculator {
  button {
    float: left;
    width: 30px;
    line-height: 25px;
    background-color: #fff;
    border: 1px solid #bdbdbd;
    outline: none;
    color: #666;
    font-size: 20px;
  }
  button:disabled {
    color: #bdbdbd;
  }
  input {
    float: left;
    width: 30px;
    text-align: center;
    line-height: 25px;
    background-color: rgb(251, 252, 252);
    border: 1px solid #bdbdbd;
    outline: none;
    border-left: none;
    border-right: none;
  }
}
</style>


