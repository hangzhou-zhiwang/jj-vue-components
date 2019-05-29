
<template>
    <div style="position:relative;overflow:hidden;position:relative;display:inline-block;">
        <div
            class="zoom-image"
            :style="{
                'background-image':'url('+src+')',
                'padding-bottom':percent+'%',
                'width':width,
                'height':height}"
        ></div>
    </div>
</template>

<script>
// 三宝
// 按照分辨率自适应居中
export default {
    props: ["src", "percent","width","height"],
};
</script>

<style lang="scss" scoped>
.zoom-image{
    width:100%;
    height: 100%;
    padding-bottom: 100%;
    overflow:hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
