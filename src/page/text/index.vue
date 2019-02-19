<template>
	<div style="padding:10px;">
		<code-box :link="$_c+'/TextRolling.vue'">
            <text-rolling style="display:inline-block;"></text-rolling>
		</code-box>
	</div>
</template>

<script>
import TextRolling from '_c/Text/TextRolling'

export default {
	components: {
		TextRolling
	}
}
</script>
