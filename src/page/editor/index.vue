<template>
	<div style="padding:10px;">
		<code-box :link="$_c+'/Editor/EditorWang.vue'">
            <editor-wang style="display:inline-block;"></editor-wang>
		</code-box>
	</div>
</template>

<script>
import EditorWang from '_c/Editor/EditorWang'

export default {
	components: {
		EditorWang
	}
}
</script>
