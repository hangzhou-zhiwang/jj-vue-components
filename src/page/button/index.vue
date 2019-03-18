<template>
	<div style="padding:10px;">
		<code-box :link="$_c+'/Button/Button.vue'">
			<button-default style="display:inline-block;"></button-default>
		</code-box>
	</div>
</template>

<script>
import ButtonDefault from '_c/Button/Button'

export default {
	components: {
		ButtonDefault
	}
}
</script>
