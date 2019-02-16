<template>
    <div style="display:inline-block;">
        <div style="display:inline-block;padding:10px;">
            <slot></slot>
        </div>
        <a v-show="link"
            :href="link"
            target="_blank">&lt;/&gt;</a>
    </div>
</template>
<script>
export default {
    props: {
        link: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
    color:#333;
}
</style>



