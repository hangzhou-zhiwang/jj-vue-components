<template>
    <div>
      <alert 
       v-for="(item,index) in alertList"
       :key="index" 
       :title="item.key"
       :type="item.type"
       @close="callback"
       ></alert>  
    </div>
</template>

<script>
import alert from "_c/alert";

export default {
  data() {
    return {
      alertList: [
        {
          key: "alert1",
          val: "10",
          type: "success"
        },
        {
          key: "alert2",
          val: "10",
          type: "error"
        },
        {
          key: "alert3",
          val: "10",
          type: "warning"
        }
      ]
    };
  },
  components: {
    alert
  },
  methods: {
    callback() {
      console.log("callback");
    }
  }
};
</script>
