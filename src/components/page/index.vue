<template>
    <div>
        <ul class=pagination>
            <!-- <li :class="{'disabled': current == 1}">
                <a href="javascript:;"
                    @click="setCurrent(1)"> 首页 </a>
            </li> -->
            <li :class="{'disabled': current == 1}">
                <a href="javascript:;"
                    @click="setCurrent(current - 1)"> < </a>
            </li>
            <li v-for="(p,index) in grouplist" :key="index"
                :class="{'active': current == p.val}">
                <a href="javascript:;"
                    @click="setCurrent(p.val)"> {{ p.text }} </a>
            </li>
            <li :class="{'disabled': current == page}">
                <a href="javascript:;"
                    @click="setCurrent(current + 1)"> ></a>
            </li>
            <!-- <li :class="{'disabled': current == page}">
                <a href="javascript:;"
                    @click="setCurrent(page)"> 末页 </a>
            </li> -->
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: this.currentPage
        }
    },
    props: {
        total: {// 数据总条数
            type: Number,
            default: 0
        },
        display: {// 每页显示条数
            type: Number,
            default: 20
        },
        currentPage: {// 当前页码
            type: Number,
            default: 1
        },
        pagegroup: {// 分页条数
            type: Number,
            default: 5,
            coerce: function (v) {
                v = v > 0 ? v : 5;
                return v % 2 === 1 ? v : v + 1;
            }
        }
    },
    watch:{
        currentPage(){
            this.current = this.currentPage
        }
    },
    computed: {
        page: function () { // 总页数
            return Math.ceil(this.total / this.display);
        },
        grouplist: function () { // 获取分页页码
            var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
            if (len <= this.pagegroup) {
                while (len--) {
                    temp.push({ text: this.page - len, val: this.page - len });
                }
                ;
                return temp;
            }
            while (len--) {
                temp.push(this.page - len);
            }
            ;
            var idx = temp.indexOf(center);
            (idx < count) && (center = center + count - idx);
            (this.current > this.page - count) && (center = this.page - count);
            temp = temp.splice(center - count - 1, this.pagegroup);
            do {
                var t = temp.shift();
                list.push({
                    text: t,
                    val: t
                });
            } while (temp.length);
            // if (this.page > this.pagegroup) {
            //     (this.current > count + 1) && list.unshift({ text: '<', val: list[0].val - 1 });
            //     (this.current < this.page - count) && list.push({ text: '>', val: list[list.length - 1].val + 1 });
            // }
            return list;
        }
    },
    methods: {
        setCurrent: function (idx) {
            if (this.current != idx && idx > 0 && idx < this.page + 1) {
                this.current = idx;
                this.$emit('pagechange', this.current);
            }
        }
    }
}
</script>

<style lang="scss" scoped>

$width:28px;
li {
    list-style-type: none;;
}
.pagination {
    overflow: hidden;
    display: table;
    margin: 0 auto;
    /*width: 100%;*/
    height: 50px;

    li {
        float: left;
        height: $width;
        margin: 3px;
        color: #666;
        cursor: pointer;
        min-width: 11px;
        border: 1px solid #e6e6e6;
        background: #fff;
        border-radius: 5px;
        transition: all 0.3s;
        &.active {
            border: 1px solid #0099cc;
            a {
                color: #0099cc;
            }
        }
        &:hover {
            border: 1px solid #0099cc;
            a {
                color: #0099cc;
            }
        }
        a {
            display: block;
            text-align: center;
            line-height: $width;
            font-size: 12px;
            padding: 0px 10px;
            text-decoration: none;
            color: #333;
        }
    }
    .disabled{
        a{
            color: #c7c7c7;
            cursor:not-allowed
        }
        &:hover {
            background: #f7f7f7;
            border: 1px solid #e6e6e6;
            a {
                color: #c7c7c7;
            }
        }
    }
}
</style>


