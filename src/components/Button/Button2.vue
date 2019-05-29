<template>
    <button ref="button">
        {{value}}
    </button>
</template>
<script>
// 三宝
function RippleEffect(element) {
    this.element = element;
    this.element.addEventListener("click", this.run.bind(this), false);
}
RippleEffect.prototype = {
    run: function(event) {
        let ripplerContainer = this.element.querySelector(".ripple-container");
        let offsetInfo = this.element.getBoundingClientRect();
        if (ripplerContainer) {
            ripplerContainer.remove();
        }
        let rippleContainer = document.createElement("div");
        rippleContainer.style.position = "fixed";
        rippleContainer.style.zIndex = 99;
        rippleContainer.style.width = offsetInfo.width + "px";
        rippleContainer.style.left = offsetInfo.left + "px";
        rippleContainer.style.top = offsetInfo.top + "px";
        rippleContainer.style.height = offsetInfo.height + "px";
        rippleContainer.className = "jj-ripple-container";
        rippleContainer.style.overflow = "hidden";
        this.element.appendChild(rippleContainer);
        let circleD = offsetInfo.width * 2;
        let ripple = document.createElement("div");
        ripple.style.position = "absolute";
        ripple.style.width = circleD + "px";
        ripple.style.height = circleD + "px";
        ripple.style.borderRadius = "500px";
        ripple.style.left = event.pageX - offsetInfo.left - circleD / 2 + "px";
        ripple.style.top = event.pageY - offsetInfo.top - circleD / 2 + "px";
        ripple.className = "jj-ripple";
        rippleContainer.appendChild(ripple);
        ripple.addEventListener(
            "animationend",
            function() {
                rippleContainer.remove();
            }.bind(this),
            false
        );
    }
};
export default {
    props:{
        value:{
            default:''
        }
    },
    mounted() {
        new RippleEffect(this.$refs.button);
    }
};
</script>
<style lang="scss">
.jj-ripple-container {
}
.jj-ripple-container .jj-ripple {
    background-color: rgba(255, 255, 255, 0.4);
    animation: jjripple 2s forwards cubic-bezier(0, 0, 0.2, 1);
}
@keyframes jjripple {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    80% {
        transform: scale(1);
    }
    100% {
        opacity: 0;
    }
}
</style>
<style lang="scss" scoped>
button {
    background-color: dodgerblue;
    color: white;
    padding: 10px 20px;
    border: 0;
    font-size: 14px;
    cursor: pointer;
}

</style>
