<template>
    <div>
        <p>
            <input type="text"
                ref=searchReg
                v-model.trim="searchReg"
                class="jj-input"
                placeholder="正则快速搜索">
        </p>
        <p v-for="(item,index) in resList"
            :key="index">
            <span>{{item.name}}</span>
            ：
            <span>{{item.val}}</span>
        </p>
    </div>
</template>
<script>
export default {
    data: () => ({
        searchReg: '',
        regList: [{
            name: '大于0的数字',
            val: '/^\+?[1-9][0-9]*$/'
        },{
            name: '手机号（1开头的11位数字）',
            val: '/^1\d{10}$/'
        },{
            name: 'IP',
            val: '/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/'
        },{
            name: '邮箱',
            val: '/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/'
        },{
            name: '只能包括英文字符、数字、下划线、减号：',
            val: '/^[a-zA-Z0-9_-]{1,}$/'
        },{
            name:'数字、大小写英文或符号任意两种以上的组合(单引号，双引号，反斜杠)除外',
            val:'/^(?![a-zA-z]+$)(?!\d+$)(?![~`!@#\$%\^&\*\(\)\-_=\+\[\]\{\}\|;:,\.<>\?/]+$)[a-zA-Z\d~`!@#\$%\^&\*\(\)\-_=\+\[\]\{\}\|;:,\.<>\?/]+$/'
        },{
            name:'qq',
            val:'/^[1-9][0-9]{4,11}$/'
        }]
        
    }),
    computed:{
        resList(){
            let arr=[]
            this.regList.forEach(item=>{
                if(item.name.toString().indexOf(this.searchReg+'')>-1){
                    arr.push(item)
                }
            })
            return arr
        }
    }
}
</script>

<style lang="scss" scoped>
p {
    padding-left: 20px;
    text-align: left;
    span:first-child {
        font-weight: 600;
    }
}
.jj-input{
    border:1px solid #a0d6b0b4;
    height: 1.8rem;
    line-height: 1.8rem;
    padding-left:.4rem;
    padding-right:.4rem;
    border-radius: 4px;
    transition: all .2s;
    &:focus,&:active{
        border:1px solid #6ed48d;
        outline: none;
    }
}
</style>
