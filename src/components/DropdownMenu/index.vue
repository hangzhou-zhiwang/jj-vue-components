<template>
    <div>
        <div class="mune-box">
            <button v-text="menuTitle"></button>
            <ul>
                <li v-for="(item,index) in menuList" :key="index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        menuTitle:{
            type:String,
            default: "下拉菜单"
        },
        menuList:{
            type:Object,
            default: [
                "111"
            ]
        }
    },
    data(){
        return{
        }
    }
}
</script>
<style lang="scss" scoped>
ul,li,button{
    margin: 0;
    padding: 0;
}
li {
    list-style-type: none;
}
.mune-box {
    position: relative;
    width: 100px;
    cursor: pointer;
    button {
        width: 100%;
        background: rgb(107, 154, 199);
        border: none;
        line-height: 30px;
        outline: none;
        border-radius: 5px;
    }
    
    ul {
        display: none;
        position: absolute;
        top: 32px;
        width: 100%;
        padding: 5px 0;
        background-color: rgba(169, 223, 248, 0.3);
        box-shadow: 0 1px 2px rgba(0,0,0,.3);
        border-radius: 5px;
        transition: all .3s;
        li {
            line-height: 25px;
        }
        li:hover{
            background-color: rgba(0,0,0,.3);
        }
    }
}
.mune-box:hover ul {
    display:block;
    animation-name: fold-in;
    animation-duration: 0.2s;
}
@keyframes fold-in {
    0% {
        height: 0;
        transform: translate3d(0, -30px, 0);
        opacity: 0;
    }
    100% {
        transform: translate3d(0, 4px, 0);
        opacity: 1;
        height: auto;
    }
}
@keyframes fold-out {
    0% {
        transform: translate3d(0, 4px, 0);
        opacity: 1;
    }
    100% {
        transform: translate3d(0, -30px, 0);
        opacity: 0;
    }
}
</style>
