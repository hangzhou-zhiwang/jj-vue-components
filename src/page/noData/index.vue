<template>
    <div style="padding:10px;">
        <code-box :link="$_c+'/noData/noData.vue'">
		    <no-data :nodata="true" :loading="true"></no-data>
        </code-box>
    </div>
</template>

<script>
import NoData from '_c/noData/noData'

export default {
	components: {
		NoData
    }
}
</script>
