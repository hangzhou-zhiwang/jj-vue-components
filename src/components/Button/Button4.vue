<template>
    <a href="#" class="hvr-pulse">{{value}}</a>
</template>
<script>
// 三宝
export default {
    props:{
        value:{
            default:''
        }
    }
}
</script>
<style lang="scss" scoped>
.hvr-pulse:hover, .hvr-pulse:focus, .hvr-pulse:active {
    -webkit-animation-name: hvr-pulse;
    animation-name: hvr-pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}
.hvr-pulse {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
}
[class^=hvr-] {
    margin: .4em;
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

@keyframes hvr-pulse {
    25% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
75% {
    -webkit-transform: scale(.9);
    transform: scale(.9);
}
}

</style>
