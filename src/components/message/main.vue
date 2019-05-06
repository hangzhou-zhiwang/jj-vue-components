<template>
  <transition name="fade">
    <div
      :class="[
        `message`,
        type && !iconClass ? `message--${ type }` : '',
        center ? 'is-center' : '']"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      role="alert"
    >
      <i :class="iconClass" v-if="iconClass"></i>
      <i :class="typeClass" v-else></i>
      <slot>
        <p v-html="message" :class="[`message__content`]"></p>
      </slot>
      <i v-if="showClose" :class="[`message__closeBtn`]" @click="close">×</i>
    </div>
  </transition>
</template>

<script type="text/babel">
const typeMap = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error"
};

export default {
  data() {
    return {
      visible: false,
      message: "",
      duration: 1500,
      type: "info",
      iconClass: "",
      onClose: null,
      showClose: false,
      closed: false,
      timer: null,
      center: false,
    };
  },

  computed: {
    iconWrapClass() {
      const classes = [`message__icon`];
      if (this.type && !this.iconClass) {
        classes.push(`message__icon--${this.type}`);
      }
      return classes;
    },

    typeClass() {
      return this.type && !this.iconClass
        ? `message__icon icon-${
            typeMap[this.type]
          }`
        : "";
    }
  },

  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener("transitionend", this.destroyElement);
      }
    }
  },

  methods: {
    destroyElement() {
      this.$el.removeEventListener("transitionend", this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },

    close() {
      this.closed = true;
      this.onClose(this);
    },

    clearTimer() {
      clearTimeout(this.timer);
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    keydown(e) {
      if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      }
    }
  },
  mounted() {
    this.startTimer();
    document.addEventListener("keydown", this.keydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.keydown);
  }
};
</script>
<style scoped>
.message__closeBtn:focus,
.message__content:focus {
  outline-width: 0;
}
.message {
  min-width: 380px;
  box-sizing: border-box;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #e6ebf5;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #edf2fc;
  transition: opacity 0.3s, transform 0.4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
}
.message.is-center {
  justify-content: center;
}
.message p {
  margin: 0;
}
.message--info .message__content {
  color: #878d99;
}
.message--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.message--success .message__content {
  color: #67c23a;
}
.message--warning {
  background-color: #fdf5e6;
  border-color: #fbeccd;
}
.message--warning .message__content {
  color: #eb9e05;
}
.message--error {
  background-color: #fee;
  border-color: #fedddd;
}
.message--error .message__content {
  color: #fa5555;
}
.message__icon {
  margin-right: 10px;
}
.message__content {
  padding: 0;
  font-size: 14px;
  line-height: 1;
}
.message__closeBtn {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #b4bccc;
  font-size: 16px;
}
.message__closeBtn:hover {
  color: #878d99;
}
.message .icon-success {
  color: #67c23a;
}
.message .icon-error {
  color: #fa5555;
}
.message .icon-info {
  color: #878d99;
}
.message .icon-warning {
  color: #eb9e05;
}
.fade-enter-active,
.fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}

</style>
