<template>
    <div>
        <p>自适应宽高居中</p>
        <div style="text-align:center;">
            <code-box :link="$_c+'/Image/ImageSizeCenter.vue'">
                <image-size-center :width="'200px'"
                    :height="'200px'"
                    :percent="0.6"
                    :src="imgSrc"></image-size-center>
            </code-box>
        </div>
    </div>
</template>
<script>
import ImageSizeCenter from '_c/Image/ImageSizeCenter'
export default {
    components: {
        ImageSizeCenter
    },
    data: () => ({
        imgSrc: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551712521013&di=a1926b4c4038a090b57fca288768e4fe&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F68%2F59%2F71X58PICNjx_1024.jpg`
    })
}
</script>

