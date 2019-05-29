<template>
  <div :class="[`card`]">
    <div :class="[`card__header`]" v-show="this.$slots.header">
      <slot name="header"></slot>
    </div>
    <div :class="[`card__body`]" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    header: {
      type: String,
      default: ""
    },
    bodyStyle: String
  },
  mounted() {
  }
};
</script>

<style scoped>
.card {
  border-radius: 4px;
  border: 1px solid #e6ebf5;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  color: #2d2f33;
}
.card__header {
  padding: 8px 10px;
  border-bottom: 1px solid #e6ebf5;
  box-sizing: border-box;
}
.card__body {
  padding: 20px;
}
</style>
