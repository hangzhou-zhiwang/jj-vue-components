<template>
    <div>
        <!-- <input type="checkbox"
            id="checkbox_c1"
            class="chk_3">
        <label for="checkbox_c1"></label> -->
        <switch-ios v-model="bool"></switch-ios>
    </div>
</template>

<script>
import SwitchIos from '_c/Switch/SwitchIos'
export default {
    components:{
        SwitchIos
    },
    data:()=>({
        bool:true
    })
}
</script>

<style lang="scss">

</style>

