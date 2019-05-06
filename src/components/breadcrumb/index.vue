<template>
  <span class="bread-wrap">
    <span ref="link" role="link">
      <slot></slot>
    </span>
    <span role="presentation">{{separator}}</span>
  </span>
</template>
<script>
export default {
  name: "BreadcrumbItem",
  props: {
    to: {},
    replace: Boolean,
    separator: {
      type: String,
      default: "/"
    }
  },
  data() {
    return {};
  },

  mounted() {
    let self = this;
    if (this.to) {
      let link = this.$refs.link;
      link.setAttribute("role", "link");
      link.addEventListener("click", _ => {
        let to = this.to;
        self.replace ? self.$router.replace(to) : self.$router.push(to);
      });
    }
  }
};
</script>
<style scoped>
.bread-wrap{
  cursor: pointer;
}
</style>
