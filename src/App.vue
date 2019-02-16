<template>
	<div id=app>
		<div class=side-menu>
			<ul>
				<router-link to="/button" tag="li">按钮</router-link>
				<router-link to="/select" tag="li">选择框</router-link>
				<router-link to="/banner" tag="li">轮播</router-link>
                <router-link to="/rotate" tag="li">旋转</router-link>
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
    left: 80px;
    top: 0;
    right: 0;
    bottom: 0;
}

.side-menu {
    position: absolute;
    left: 0px;
    top: 0;
    right: 80px;
    bottom: 0;
	width: 80px;
	ul{
		width: 100%;
	}
    li {
        list-style: none;
		width:100%;
		height: 40px;
        cursor: pointer;
    }
}
</style>