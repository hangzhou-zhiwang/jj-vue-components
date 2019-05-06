<template>
  <div :class="[`zhiwang-badge`]">
    <slot></slot>
    <transition>
      <sup
        v-show="!hidden && ( content || isDot )"
        v-text="content"
        :class="[`zhiwang-badge__content`, { 'is-dot': isDot }]" 
        :style="{backgroundColor:color}"
        >
      </sup>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Badge",

  props: {
    value: {},
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    color:String
  },

  computed: {
    content() {
      if (this.isDot) return;

      const value = this.value;
      const max = this.max;

      if (typeof value === "number" && typeof max === "number") {
        return max < value ? `${max}+` : value;
      }

      return value;
    }
  }
};
</script>

<style scoped>
.zhiwang-badge {
  position: relative;
  vertical-align: middle;
  display: inline-block;
}
.zhiwang-badge__content {
  background-color: #fa5555;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #fff;
}
.zhiwang-badge__content.is-fixed {
  position: absolute;
  top: 0;
  right: 10px;
  -webkit-transform: translateY(-50%) translateX(100%);
  transform: translateY(-50%) translateX(100%);
}
.zhiwang-badge__content.is-fixed.is-dot {
  right: 5px;
}
.zhiwang-badge__content.is-dot {
  height: 8px;
  width: 8px;
  padding: 0;
  right: 0;
  border-radius: 50%;
}
</style>
