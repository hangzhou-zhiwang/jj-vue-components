<template>
    <div>
        <code-box :link="$_c+'/Switch/SwitchIos.vue'">
            <switch-ios v-model="bool"></switch-ios>
        </code-box>
    </div>
</template>

<script>
import SwitchIos from '_c/Switch/SwitchIos'
export default {
    components: {
        SwitchIos
    },
    data: () => ({
        bool: true
    })
}
</script>

<style lang="scss">
</style>

