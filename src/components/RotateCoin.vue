<template>
    <div>
        <div class="euro">
            <article class="back"></article>
            <article class="middle" style="transform: translateZ(1px)"></article>
            <article class="middle" style="transform: translateZ(2px)"></article>
            <article class="middle" style="transform: translateZ(3px)"></article>
            <article class="middle" style="transform: translateZ(4px)"></article>
            <article class="middle" style="transform: translateZ(5px)"></article>
            <article class="middle" style="transform: translateZ(6px)"></article>
            <article class="middle" style="transform: translateZ(7px)"></article>
            <article class="middle" style="transform: translateZ(8px)"></article>
            <article class="middle" style="transform: translateZ(9px)"></article>
            <article class="front"></article>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.euro {
    width: 150px;
    height: 150px;
    margin-left: -75px;
    margin-top: -75px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    animation: spin 2.5s linear infinite;
}
.back {
    background-image: url("http://wow.techbrood.com/uploads/160101/backeuro.png");
    width: 150px;
    height: 150px;
}
.middle {
    background-image: url("http://wow.techbrood.com/uploads/160101/faceeuro.png");
    width: 150px;
    height: 150px;
    transform: translateZ(1px);
    position: absolute;
    top: 0;
}
.front {
    background-image: url("http://wow.techbrood.com/uploads/160101/faceeuro.png");
    height: 150px;
    position: absolute;
    top: 0;
    transform: translateZ(10px);
    width: 150px;
}
@keyframes spin {
    0% {
        transform: rotateX(0deg);
    }
    100% {
        transform: rotateX(360deg);
    }
}
</style>
