<template>
	<div style="padding:10px;">
		<code-box :link="$_c+'/Editor/EditorWang.vue'">
			<editor-wang style="display:inline-block;"></editor-wang>
		</code-box>
		<editor-sql :language="'sql'"
		      :codes="'Create'"></editor-sql>
	</div>
</template>

<script>
import EditorWang from '_c/Editor/EditorWang'
import EditorSql from '_c/Editor/EditorSql'

export default {
	components: {
		EditorWang,
		EditorSql
	}
}
</script>
