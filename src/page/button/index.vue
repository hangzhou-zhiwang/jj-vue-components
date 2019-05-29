<template>
	<div style="padding:10px;">
		<code-box :link="$_c+'/Button/Button.vue'" class="com-line">
			<button-default value="按钮 ( 3D按压 )" style="display:inline-block;"></button-default>
		</code-box>
		<code-box :link="$_c+'/Button/Button1.vue'" class="com-line">
			<button-1 value="按钮 ( 呼吸灯 )" style="display:inline-block;"></button-1>
		</code-box>
		<code-box :link="$_c+'/Button/Button2.vue'" class="com-line">
			<button-2 value="按钮 ( 点击-水波纹 )" style="display:inline-block;"></button-2>
		</code-box>
		<code-box :link="$_c+'/Button/Button3.vue'" class="com-line">
			<button-3 value="按钮 ( 悬浮-腾空 )" style="display:inline-block;"></button-3>
		</code-box>
		<code-box :link="$_c+'/Button/Button4.vue'" class="com-line">
			<button-4 value="按钮 ( 悬浮-心跳 )" style="display:inline-block;"></button-4>
		</code-box>
		<code-box :link="$_c+'/Button/Button5.vue'" class="com-line">
			<button-5 value="按钮 ( 悬浮-摇晃 )" style="display:inline-block;"></button-5>
		</code-box>
	</div>
</template>

<script>
import ButtonDefault from '_c/Button/Button'
import Button1 from '_c/Button/Button1'
import Button2 from '_c/Button/Button2'
import Button3 from '_c/Button/Button3'
import Button4 from '_c/Button/Button4'
import Button5 from '_c/Button/Button5'

export default {
	components: {
		ButtonDefault,
		Button1,
		Button2,
		Button3,
		Button4,
		Button5
	}
}
</script>
<style lang="scss" scoped>
.com-line{
	display: block!important;
	margin-bottom:10px;
}
</style>
