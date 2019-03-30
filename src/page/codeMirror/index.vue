<template>
	<div style="padding:10px;">
        <code-box :link="$_c+'/codeMirror/index.vue'">
		    <code-mirror></code-mirror>
        </code-box>
	</div>
</template>

<script>
import CodeMirror from '_c/codeMirror/index'

export default {
	components: {
		CodeMirror
    }
}
</script>
