<template>
    <div>
        <card  v-for="(item,index) in cardList" :key="index"  class="box-card">
            <div slot="header">
                <span>卡片头部</span>
            </div>
            <div>
                {{'列表内容 ' + item }}
            </div>
        </card>
    </div>
</template>

<script>
import card from "_c/card";

export default {
  data() {
    return {
      cardList: ["tag1", "tag2", "tag3"]
    };
  },
  components: {
    card
  },
  methods: {}
};
</script>
<style scoped>
.box-card {
  margin-bottom: 20px;
  max-width: 300px;
}
</style>

