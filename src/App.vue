<template>
	<div id=app>
		<div class=side-menu>
            <h4 style="text-align:center;">WEB组件库</h4>
			<ul>
				<router-link to="/button" tag="li">按钮</router-link>
				<router-link to="/select" tag="li">选择框</router-link>
				<router-link to="/banner" tag="li">轮播</router-link>
                <router-link to="/rotate" tag="li">旋转</router-link>
                <router-link to="/text" tag="li">文本</router-link>
                <!-- <router-link to="/lucky" tag="li">抽奖</router-link> -->
                <router-link to="/editor" tag="li">编辑器</router-link>
			</ul>
		</div>
		<router-view class=content></router-view>
	</div>
</template>

<script>

export default {
	name: 'app'
}
</script>

<style lang="scss" scoped>
$slide-width:100px;
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.content {
    position: absolute;
    left: $slide-width;
    top: 0;
    right: 0;
    bottom: 0;
    padding:10px;
}

.side-menu {
    position: absolute;
    left: 0px;
    top: 0;
    right: $slide-width;
    bottom: 0;
	width: $slide-width;
	ul{
        padding:10px;
		width: calc(100% - 20px);
	}
    li {
        list-style: none;
		width:100%;
		height: 40px;
        line-height: 40px;
        cursor: pointer;
        &.router-link-active{
            background: #a0b3d6;
            color:#fff;
            border-radius: 10px;
        }
    }
}
</style>