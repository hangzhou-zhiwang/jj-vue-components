<template>
	<div style="padding:10px;">
        <code-box :link="$_c+'/vue-monaco-editor/index.vue'">
		    <monaco-editor></monaco-editor>
        </code-box>
	</div>
</template>

<script>
import MonacoEditor from '_c/vue-monaco-editor/index'

export default {
	components: {
		MonacoEditor
    }
}
</script>
