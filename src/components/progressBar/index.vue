<template>
    <!--外层容器-->
    <div id="wrapper">
        <!--进度条容器-->
        <div id="progressbar">
            <!--用来模仿进度条推进效果的进度条元素-->
            <div id="fill" ref='fill' v-text='text'></div>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>({
        count:0,
        text:''
    }),
    mounted(){
        this.init();
    },
    methods:{
        init(){
            let timer=setTimeout(()=>{
                this.count++;
                this.text=this.count+'%';
                if(this.count==100){
                    clearTimeout(timer)
                }else{
                    this.init();
                }
            },17)
        }
    }
}
</script>
<style lang='scss' scoped>
#wrapper{
    position: relative;
    width:200px;
    height:100px;
    border:1px solid darkgray;
}
#progressbar{
    position: absolute;
    top:50%;
    left:50%;
    margin-left:-90px;
    margin-top:-10px;
    width:180px;
    height:18px;
    border:1px solid darkgray;

}
/*在进度条元素上调用动画*/
#fill{
    animation: move 2s;
    text-align: center;
    background-color: #6caf00;
}
/*实现元素宽度的过渡动画效果*/
@keyframes move {
    0%{
        width:0;

    }
    100%{
        width:100%;
    }
}
</style>
