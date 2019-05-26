<template>
	<div style="padding:10px;">
		<code-box :link="$_c+'/Chart/MapChina.vue'">
			<map-china></map-china>
		</code-box>
	</div>
</template>

<script>
import MapChina from '_c/Chart/MapChina/index'

export default {
	components: {
		MapChina
	}
}
</script>
