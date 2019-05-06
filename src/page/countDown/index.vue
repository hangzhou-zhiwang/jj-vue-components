<template>
	<div style="padding:10px;">
        <code-box :link="$_c+'/countDown/index.vue'">
		    <count-down></count-down>
        </code-box>
	</div>
</template>

<script>
import CountDown from '_c/countDown/index'

export default {
	components: {
		CountDown
    }
}
</script>
