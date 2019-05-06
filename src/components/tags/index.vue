<template>
  <transition>
    <span
      class="tag-content"
      :style="{backgroundColor: color}">
      <slot></slot>
      <i v-if="closable"
        @click.stop="handleClose">×</i>
    </span>
  </transition>
</template>
<script>
export default {
  name: "Tag",
  props: {
    closable: Boolean,
    color: String
  },
  methods: {
    handleClose(event) {
      this.$emit("close", event);
    }
  }
};
</script>
<style scoped>
.tag-content {
  border-radius: 4px;
  margin-right: 8px;
  padding: 8px 10px;
}
.tag-content i {
  cursor: pointer;
}
</style>

