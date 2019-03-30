<template>
    <div>
        <img v-show="nodata" src=@/assets/img/icon/nodata.png />
        <img v-show="loading" src=@/assets/img/loading/loading.gif />
    </div>
</template>
<script>
export default {
    props:{
        loading:{
            type:Boolean,
            default:false,
        },
        nodata:{
            type:Boolean,
            default:false,
        }
    }
}
</script>
<style lang="scss" scoped>
div{
    text-align: center;
}

</style>

