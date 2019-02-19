<template>
    <div>
        <!-- 一个接一个的轮播，最少渲染的效果 -->
        <one-by-one></one-by-one>
    </div>
</template>

<script>
import OneByOne from "_c/Banner/BannerList";

export default {
    components: {
        OneByOne
    }
};
</script>
