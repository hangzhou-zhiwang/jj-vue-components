<template>
    <a href="#" class="hvr-buzz">{{ value }}</a>
</template>
<script>
// 三宝
export default {
    props: {
        value: {
            default: ""
        }
    }
};
</script>
<style lang="scss" scoped>
.hvr-buzz:hover,
.hvr-buzz:focus,
.hvr-buzz:active {
    -webkit-animation-name: hvr-buzz;
    animation-name: hvr-buzz;
    -webkit-animation-duration: 0.15s;
    animation-duration: 0.15s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}
.hvr-buzz {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
}
[class^="hvr-"] {
    margin: 0.4em;
    padding: 1em;
    cursor: pointer;
    background: #e1e1e1;
    text-decoration: none;
    color: #666;
    -webkit-tap-highlight-color: transparent;
}

a {
    color: #2098d1;
    text-decoration: none;
}

@keyframes hvr-buzz {
    50% {
        -webkit-transform: translateX(3px) rotate(2deg);
        transform: translateX(3px) rotate(2deg);
    }
    100% {
        -webkit-transform: translateX(-3px) rotate(-2deg);
        transform: translateX(-3px) rotate(-2deg);
    }
}
</style>
