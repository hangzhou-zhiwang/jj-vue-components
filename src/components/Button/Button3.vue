<template>
    <a href="#" class="hvr-bob">{{value}}</a>
</template>
<script>
// 三宝
export default {
    props:{
        value:{
            default:''
        }
    }
};
</script>
<style lang="scss" scoped>
.hvr-bob:hover,
.hvr-bob:focus,
.hvr-bob:active {
    -webkit-animation-name: hvr-bob-float, hvr-bob;
    animation-name: hvr-bob-float, hvr-bob;
    -webkit-animation-duration: 0.3s, 1.5s;
    animation-duration: 0.3s, 1.5s;
    -webkit-animation-delay: 0s, 0.3s;
    animation-delay: 0s, 0.3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
}
.hvr-bob {
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
p,
[class^="hvr-"] {
    font-family: roboto, sans-serif;
}
a {
    color: #2098d1;
    text-decoration: none;
}
@keyframes hvr-bob-float {
    100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
}
@keyframes hvr-bob {
    0% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    50% {
        -webkit-transform: translateY(-4px);
        transform: translateY(-4px);
    }
    100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
}
</style>
