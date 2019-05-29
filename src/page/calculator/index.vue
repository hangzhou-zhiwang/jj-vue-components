<template>
  <div>
    <calculator
      :num="num"
      @add="add"
      @subtract="subtract"
    ></calculator>
  </div>
</template>

<script>
import calculator from "_c/calculator"
export default {
  components: {
    calculator
  },
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    add() {
      this.num++
    },
    subtract() {
      this.num--
    }
  },
}
</script>


