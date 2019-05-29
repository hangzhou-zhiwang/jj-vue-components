<template>
    <a class="large red button">{{value}}</a>
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
.wall-of-buttons a.button {
    display: inline-block;
    margin: 0 10px 9px 0;
}
.red.button {
    animation-name: redPulse;
    animation-duration: 1s;
}
.red.button {
    background-color: #e33100;
}
.large.button {
    font-size: 14px;
    padding: 8px 19px 9px;
}
a.button {
    animation-duration: 2s;
    animation-iteration-count: infinite;
}
.button {
    background: #222;
    display: inline-block;
    padding: 5px 15px 6px;
    color: #fff !important;
    font-size: 13px;
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    border-radius: 5px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    position: relative;
    cursor: pointer;
    overflow: visible;
    width: auto;
}
.wall-of-buttons {
    width: 100%;
    height: 180px;
    text-align: center;
}
// body {
//     background: #333;
//     text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
// }
// html {
//     color: -internal-root-color;
// }
@keyframes redPulse {
    0% {
        background-color: #bc330d;
        box-shadow: 0 0 9px #333;
    }
    50% {
        background-color: #e33100;
        box-shadow: 0 0 18px #e33100;
    }
    100% {
        background-color: #bc330d;
        box-shadow: 0 0 9px #333;
    }
}
</style>
