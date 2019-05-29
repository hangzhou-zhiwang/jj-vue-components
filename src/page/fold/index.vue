<template>
  <div>
    <ul class="newslist">
      <li
        class="group-title"
        v-for="(item,index) in newsList"
        :key="index"
        @click="selectGroup(index)"
      >
        <div class="title">
          <img
            src="@/assets/img/icon/u4054.png"
            alt
            class="title-img"
            :class="{'img-rotate':item.showContent}"
          >
          <span style="margin-left:5px;">{{item.title}}</span>
        </div>
        <ul class="option" v-show="item.showContent">
          <li v-for="(im,idx) in item.list" :key="idx">
            <span style="margin-left:5px;">{{im.title}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsList: [
        {
          title: "分组1",
          showContent: false,
          list: [{ title: "网吧1" }, { title: "网吧2" }, { title: "网吧3" }]
        },
        {
          title: "分组2",
          showContent: false,
          list: [{ title: "网吧1" }, { title: "网吧2" }, { title: "网吧3" }]
        }
      ]
    };
  },
  methods: {
    selectGroup(index) {
      if (this.newsList[index].showContent == true) {
        setTimeout(() => {
            this.newsList[index].showContent = false;
        }, 300);
      } else {
        for (let i = 0; i < this.newsList.length; i++) {
          this.newsList[i].showContent = false;
        }
        this.newsList[index].showContent = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
li {
  list-style-type: none;
}
.newslist li p {
  font-size: 14px;
  color: #555;
  line-height: 25px;
  height: 50px;
  overflow: hidden;
  transition: height 0.3s;
}
.group-title {
  margin-top: 7px;
  line-height: 30px;
  font-size: 12px;
  cursor: pointer;
  .title {
    transition: background-color 0.5s;
    .title-img {
        // transform: rotate(90deg);
        transition: transform .3s;
    }
  }
  .title:hover {
    background-color: #fff;
    transition: background-color 0.5s;
  }
}
.option {
  line-height: 30px;
  li {
    width: 100%;
    transition: background-color 0.5s;
    cursor: pointer;
    img {
      margin-left: 10px;
    }
  }
  li:hover {
    background-color: #fff;
    transition: background-color 0.5s;
  }
}
.img-rotate {
  transform: rotate(90deg);
  transition: all 0.3s;
}
</style>
