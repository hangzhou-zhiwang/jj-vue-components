<template>
    <div
        :style="{'width':oneWidth*showNum+'px'}">
        <ul ref="ul"
            :style="{'width':oneWidth*(showNum+1)+'px'}">
            <li 
                :style="{'width':oneWidth+'px'}"
                v-for="(item,index) in list" v-if="index<=showNum" :key="index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 8],
            showNum:6,
            oneWidth: 100
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            setTimeout(() => {
                this.move();
                this.init();
            }, 3000);
        },
        setTransition() {
            this.$refs.ul.style.transition = 'all .3s';
        },
        removeTransition() {
            this.$refs.ul.style.transition = 'none';
        },
        move() {
            this.setTransition()
            this.$refs.ul.style.left = `-${this.oneWidth}px`;
            setTimeout(() => {
                this.next();
            }, 400);
        },
        next() {
            this.removeTransition()
            let first=this.list[0]
            this.list.splice(0, 1);
            this.list.push(first)
            this.$refs.ul.style.left = '0';
        }
    }
};
</script>
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}
$height: 400px;
div {
    overflow: hidden;
    height: $height;
    margin: auto;
    position: relative;
}
ul {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
    li {
        list-style: none;
        height: 100%;
        float: left;
        background: #eaeaea;
        border-right: 1px solid #fff;
        box-sizing: border-box;
    }
}
</style>
