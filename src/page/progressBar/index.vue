<template>
	<div style="padding:10px;">
        <code-box :link="$_c+'/progressBar/index.vue'">
		    <progressBar></progressBar>
        </code-box>
	</div>
</template>

<script>
import progressBar from '_c/progressBar/index'

export default {
	components: {
		progressBar
    }
}
</script>
