<template>
    <div class="adTree">
        <ad-tree :data="list" 
            :indent="40"
            cross-tree="cross-tree">
            <card slot-scope="{data, store}">
                <template v-if="!data.isDragPlaceHolder">
                    <!-- 内容可自定义 -->
                    <span>名称：</span>
                    <Input v-model="data.name"
                            style="width:150px;margin-right:5px;"
                            placeholder="请输入名称" />
                    <span>数量：</span>
                    <Input v-model='data.num' :max="99" :min="0" />  
                    <!-- 编辑按钮 -->
                    <button v-show="data"
                        @click="toDelete(data)"
                        class='editButton'>删除</button>
                </template>
            </card>
        </ad-tree>
        <div style="text-align:center;">
            <Button type="default"
                icon="md-add"
                @click="addRely"
                style="font-size:12px;padding:2px 14px;">添加</Button>
        </div>
    </div>
</template>
<script>
import { DraggableTree } from 'vue-draggable-nested-tree'
export default {
    data(){
        return{
            list:[]
        }
    },
    components: {
        AdTree: DraggableTree,
    },
    props:{
        data:{
            type:Array,
            default:[]
        }
    },
    watch:{
        //父组件引用组件那边添加v-if条件，会监听不到
        data(){
            this.list=this.data
        }
    },
    mounted(){
        
    },
    computed:{
        transConfig(){
            let res=[]
            this.list.forEach(item=>{
                res.push({
                    name:item.name, 
                    num:item.num,
                })
            })
            return res
        }
    },
    methods:{
        addRely(){
            this.list.push({name: '',num:0})
            this.$nextTick(() => {
                document.querySelector(".adTree .tree").scrollTop = document.querySelector(".adTree .tree .tree-node-children").clientHeight
            })
        },
        toDelete(item){
            if (this.list.findIndex(v => v._id === item._id) >= 0) {
                this.list.splice(this.list.findIndex(v => v._id === item._id), 1);
            }   
        }   
    }
}
</script>
<style lang="scss" scoped>
.adTree {
    padding-bottom:10px;
    margin: 0 0px 20px 30px;
    width: 660px;
    border: 1px solid #eee;
    box-shadow: 0 0 8px #eaeaea;
    .tree {
        height: 300px;
        padding: 8px;
        //box-shadow: 0 0 8px #eaeaea;
        overflow: auto;
        margin-bottom: 12px;
        border: 1px solid #eee;
        .editButton{
            // color:#ed4014;
            // font-size:22px;
            // position: relative;
            // top: -2px;
            // cursor: pointer;
            display:inline-block;
            margin-left:10px;
        } 
    }
}
</style>


