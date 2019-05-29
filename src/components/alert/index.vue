<template>
  <transition>
    <div
      :class="[`alert`, center ? 'is-center' : '', typeClass]"
      v-show="visible"
      role="alert"
    >
      <span :class="[`alert__title`]" v-if="title">{{ title }}</span>
        <slot>
          <p :class="[`alert__description`]" v-if="description">{{ description }}</p>
        </slot>
        <i 
         v-show="closable" 
         @click="close()"
         >×</i>
    </div>
  </transition>
</template>

<script type="text/babel">
const TYPE_CLASSES_MAP = {
  success: `alert--success`,
  warning: `alert--warning`,
  error: `alert--error`
};
export default {
  name: "Alert",
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    closable: {
      type: Boolean,
      default: true
    },
    center: Boolean
  },

  data() {
    return {
      visible: true
    };
  },

  methods: {
    close() {
      this.visible = false;
      this.$emit("close");
    }
  },

  computed: {
    typeClass() {
      return TYPE_CLASSES_MAP[this.type] || `alert--info `;
    }
  }
};
</script>
<style scoped>
.alert {
  width: 100%;
  padding: 8px 16px;
  margin: 0;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  opacity: 1;
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  transition: opacity 0.2s;
  justify-content: space-between;
}
.alert.is-center {
  justify-content: center;
}
.alert--success {
  background-color: #f0f9eb;
  color: #67c23a;
}
.alert--success .alert__description {
  color: #67c23a;
}
.alert--info {
  background-color: #f3f4f5;
  color: #878d99;
}
.alert--info .alert__description {
  color: #878d99;
}
.alert--warning {
  background-color: #fdf5e6;
  color: #eb9e05;
}
.alert--warning .alert__description {
  color: #eb9e05;
}
.alert--error {
  background-color: #fee;
  color: #fa5555;
}
.alert--error .alert__description {
  color: #fa5555;
}
.alert__title {
  font-size: 13px;
  line-height: 18px;
}
.alert .alert__description {
  font-size: 12px;
  margin: 5px 0 0;
}
</style>
