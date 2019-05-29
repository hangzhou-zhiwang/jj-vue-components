<template>
    <div>
      <badge 
       v-for="(item,index) in badgeList"
       :key="index" 
       :value="item.val"
       :isDot="index==2"
       :color="index==1?'#4081ff':'#fa5555'"
       >{{item.key}}
       </badge>  
    </div>
</template>

<script>
import badge from "_c/badge";

export default {
  data() {
    return {
      badgeList: [
        {
          key: "badge1",
          val: "10"
        },
        {
          key: "badge1",
          val: "10"
        },
        {
          key: "badge1",
          val: "10"
        }
      ]
    };
  },
  components: {
    badge
  },
  methods: {}
};
</script>
