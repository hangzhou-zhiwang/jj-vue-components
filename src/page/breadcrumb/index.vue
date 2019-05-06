<template>
    <div>
      <breadcrumb 
       :separator="'>'"
       v-for="(item,index) in breadcrumbList"
       :key="index" 
       :to="{ path: '/tag' }"
       >{{item}}
       </breadcrumb>  
    </div>
</template>

<script>
import breadcrumb from "_c/breadcrumb";

export default {
  data() {
    return {
      breadcrumbList: ["tag1", "tag2", "tag3"]
    };
  },
  components: {
    breadcrumb
  },
  methods: {
  }
};
</script>
