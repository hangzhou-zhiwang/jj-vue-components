<template>
    <div>
      <tags 
      v-for="(tag,index) in tagsList"
      closable @close="handleClose(index)"
      :key="index" 
      :color="tagColor">{{tag}}</tags>  
    </div>
</template>

<script>
import tags from "_c/tags";

export default {
  data() {
    return {
      tagsList: ["标签一", "标签二", "标签三"],
      tagColor: "#f8f8f8"
    };
  },
  components: {
    tags
  },
  methods: {
    handleClose(index) {
      this.tagsList.splice(index, 1);
    }
  }
};
</script>
