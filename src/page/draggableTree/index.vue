<template>
	<div style="padding:10px;">
        <code-box :link="$_c+'/draggableTree/index.vue'">
		    <draggable-tree :data='list'></draggable-tree>
        </code-box>
	</div>
</template>

<script>
import DraggableTree from '_c/draggableTree/index'

export default {
    data(){
        return {
            list:[]
        }
    },
	components: {
		DraggableTree
    }
}
</script>
