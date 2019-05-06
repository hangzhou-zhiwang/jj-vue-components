<template>
	<div id=app>
		<div class=side-menu>
            <h4 style="text-align:center;">WEB组件库</h4>
			<ul class="router-list">
				<router-link to="/button" tag="li">按钮</router-link>
				<router-link to="/select" tag="li">选择框</router-link>
                <router-link to="/checkbox" tag="li">单选/多选</router-link>
                <router-link to="/switch" tag="li">开关</router-link>
				<router-link to="/banner" tag="li">轮播</router-link>
                <router-link to="/text" tag="li">文本</router-link>
                <router-link to="/image" tag="li">图片</router-link>
                <router-link to="/modal" tag="li">模态窗</router-link>
                <router-link to="/rotate" tag="li">旋转</router-link>
                <!-- <router-link to="/lucky" tag="li">抽奖</router-link> -->
                <router-link to="/editor" tag="li">编辑器</router-link>
                <router-link to="/reg" tag="li">正则</router-link>
                <router-link to="/monacoEditor" tag="li">MonacoEditor</router-link>
                <router-link to="/noData" tag="li">无数据</router-link>
                <router-link to="/codeMirror" tag="li">codeMirror</router-link>
                <router-link to="/draggableTree" tag="li">draggableTree</router-link>
                <router-link to="/countDown" tag="li">倒计时</router-link>
                <router-link to="/progressBar" tag="li">进度条</router-link>
                <router-link to="/tag" tag="li">tag</router-link>
                <router-link to="/breadcrumb" tag="li">面包屑</router-link>
                <router-link to="/badge" tag="li">Badge 标记</router-link>
                <router-link to="/alert" tag="li">Alert警告</router-link>
                <router-link to="/card" tag="li">card卡片</router-link>
                <router-link to="/message" tag="li">message</router-link>
                
                
			</ul>
		</div>
		<router-view class=content></router-view>
	</div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss" scoped>
$slide-width: 120px;
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
  .side-menu {
    overflow-x: hidden;
    overflow-y: auto;
  }
}
.content {
  position: absolute;
  left: $slide-width;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
}

.side-menu {
  position: absolute;
  left: 0px;
  top: 0;
  right: $slide-width;
  bottom: 0;
  width: $slide-width;
  ul {
    padding: 10px;
    width: calc(100% - 20px);
  }
  li {
    list-style: none;
    width: 100%;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    &.router-link-active {
      background: #a0b3d6;
      color: #fff;
      border-radius: 10px;
    }
  }
}
</style>