<template>
    <div>
        <Dropdown-menu :menuTitle="下拉菜单" :menuList="list"></Dropdown-menu>
    </div>
</template>
<script>
import DropdownMenu from "_c/DropdownMenu"
export default {
    components:{
        DropdownMenu
    },
    data(){
        return{
            list: [
                "111",
                "222",
                "333"
            ]
        }
    }
}
</script>
