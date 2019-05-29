<template>
    <div class="select" @click="toggle($event)" ref="sel">
        <div class="input">
            <input type="text" :placeholder="placeholder" readonly :value="val" @blur="handle">
        </div>
        <transition name="fold">
            <ul
                class="select-content"
                :class="{'bottom' : position == 'bottom', 'top' : position == 'top'}"
                v-show="show && values.length"
                ref="content"
            >
                <li @click="val=''">{{placeholder}}</li>
                <li v-for="(item,index) in values" @click="val=item" :key="index">{{item}}</li>
            </ul>
        </transition>
    </div>
</template>

<script>
// 三宝
import domEvent from "@/utils/event";
export default {
    name: "comSelect",
    data() {
        return {
            val: "",
            show: false,
            position: "bottom"
        };
    },
    props: {
        values: {
            type: Array,
            default() {
                return ["123", "1234"];
            }
        },
        value: {},
        placeholder: {
            type: String,
            default: "请选择"
        }
    },
    mounted() {
        this.computePos();
    },
    methods: {
        getElementTop(element) {
            var actualTop = element.offsetTop;
            var current = element.offsetParent;
            while (current !== null) {
                actualTop += current.offsetTop;
                current = current.offsetParent;
            }
            return actualTop;
        },

        // 计算选择框是往上弹出还是往下弹出
        computePos() {
            let elHeight = this.$refs.sel.offsetHeight;
            let absPos = this.getElementTop(this.$refs.sel);
            let contentHeight = this.values.length * 40;

            let docScrollHei =
                document.body.scrollTop ||
                document.documentElement.scrollTop ||
                0;

            let docHeight =
                document.documentElement.clientHeight ||
                document.body.clientHeight ||
                0;

            if (elHeight + absPos + contentHeight - docScrollHei > docHeight) {
                this.position = "top";
            } else {
                this.position = "bottom";
            }
        },
        setVal(item) {
            this.$emit("input", item);
        },
        handle() {
            this.$emit("blur");
        },
        showSel() {
            this.show = true;
            this.$nextTick(() => {
                domEvent.addListener(document, "click", this.hideSel, true);
            });
        },
        hideSel(e) {
            this.show = false;
            if (this.$refs.sel && this.$refs.sel.contains(e.target)) {
                // 如果是子元素则阻止事件捕获
                domEvent.stopEvent(e);
                this.setVal(e.target.innerHtml);
            }
            domEvent.removeEvent(document, "click", this.hideSel, true);
        },
        toggle(e) {
            if (this.show) {
                this.hideSel(e);
            } else {
                this.showSel();
            }
        }
    }
};
</script>

<style scoped  lang="scss">
@import "@/assets/style/global.scss";
.select {
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
}
.input {
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
}
.input > input {
    width: 100%;
    height: 100%;
    cursor: pointer;
}
.input > img {
    right: 0;
    top: 50%;
    width: 12px;
    height: 12px;
    position: absolute;
    transform: translateY(-50%);
}

.select-content {
    width: 100%;
    max-height: px(300);
    overflow-y: scroll;
    border-radius: 8px;
    position: absolute;
    left: 0;
    background-color: white;
    box-shadow: 0 0 20px 2px #ccc;
    z-index: 2;
    box-sizing: border-box;
}
.select-content::-webkit-scrollbar {
    display: none;
}

.bottom {
    top: 100%;
}
.top {
    bottom: 125%;
}
.select-content > li {
    height: 40px;
    line-height: 40px;
    width: 100%;
}

.select-content > li:hover {
    color: #409eff;
    background-color: rgba(33, 33, 33, 0.2);
}

.fold-enter-active {
    animation-name: fold-in;
    animation-duration: 0.2s;
}
.fold-leave-active {
    animation-name: fold-out;
    animation-duration: 0.2s;
}
@keyframes fold-in {
    0% {
        height: 0;
        transform: translate3d(0, -30px, 0);
        opacity: 0;
    }
    100% {
        transform: translate3d(0, 4px, 0);
        opacity: 1;
        height: auto;
    }
}
@keyframes fold-out {
    0% {
        transform: translate3d(0, 4px, 0);
        opacity: 1;
    }
    100% {
        transform: translate3d(0, -30px, 0);
        opacity: 0;
    }
}
</style>