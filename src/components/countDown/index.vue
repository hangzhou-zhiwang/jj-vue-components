<template>
    <div v-text='num'></div>   
</template>
<script>
export default {
    data:()=>({
        num:10
    }),
    mounted(){
        this.countDown();
    },
    methods:{
        countDown(){
            let timer=setTimeout(()=>{
                this.num=this.num-1;
                if(this.num==0){
                    clearTimeout(timer);
                }else{
                    this.countDown();
                }
            },1000)
        }
    }
}
</script>
<style>

</style>
