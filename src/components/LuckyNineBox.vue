<template>
  <div class="luckDraw">
    <title-bar :title="title"></title-bar>
    <div class="container">
      <div class="turntable-wrapper">
        <div class="luck-wrapper">
          <p class="integral">我的积分: <span>1000</span></p>
          <ul class="nineGrid">
            <li class="row">
              <div v-for="(n, key) in 3" :key="n" :class="index === key ? `active` : ``">
                <div class="wrapper">
                  <img src="../../assets/luck-icon.png" alt="">
                  <p>8金转</p>
                </div>
                <div class="mask"></div>
              </div>
            </li>
            <li class="row">
              <div :class="index === 7 ? 'active': ''">
                <div class="wrapper">
                  <img src="../../assets/luck-icon.png" alt="">
                  <p>128金转</p>
                </div>
                <div class="mask"></div>
              </div>
              <div class="getLuck" @click="startLottery">
                <p>立即<br>抽奖</p>
              </div>
               <div :class="index === 3 ? 'active': ''">
                <div class="wrapper">
                  <img src="../../assets/luck-icon.png" alt="">
                  <p>128金转</p>
                </div>
                <div class="mask"></div>
              </div>
            </li>
            <li class="row">
              <div v-for="(n, key) in 3" :key="n" :class="index === 6-key ? `active` : ``">
                <div class="wrapper">
                  <img src="../../assets/luck-icon.png" alt="">
                  <p>256金转</p>
                </div>
                <div class="mask"></div>
              </div>
            </li>
          </ul>
        </div>

        <p class="share">分享领积分 <i class="icon-go"></i></p>

        <div class="rule">
          <p class="rule-title">活动规则</p>
          <ul class="rule-main">
            <li>1、活动时间：2017年9月8日起；</li>
            <li>2、活动期间，股事汇用户每次抽奖消耗20积分，抽奖次数不限</li>
            <li>3、金钻可用于向投顾提问、送礼、赞赏；</li>
            <li>4、积分赚取：每日签到、分享文章/问答/直播间、点赞、金钻充值均可获得积分哦</li>
            <li>5、活动最终解释权归股事汇所有。</li>
          </ul>
        </div>

        <div></div>
      </div>

      <LuckToast :showToast="showToast" :toastType="toastType" @closeToast="closeToast" @startLottery="startLottery"></LuckToast>
    </div>
  </div>
</template>
<script>
export default {
  name: 'luckDraw',

  components: {
    TitleBar,
    LuckToast,
  },

  data () {
    return {
      title: '积分转盘',
      index: -1,    // 当前转动到哪个位置，起点位置
      count: 8,    // 总共有多少个位置
      timer: 0,    // 每次转动定时器
      speed: 200,   // 初始转动速度
      times: 0,    // 转动次数
      cycle: 50,   // 转动基本次数：即至少需要转动多少次再进入抽奖环节
      prize: -1,   // 中奖位置
      click: true,
      showToast: false,
      toastType: 'luck',
    }
  },

  props: {

  },


  methods: {
    // 开始抽奖
    startLottery () {
      if (!this.click) {
        return
      }
      this.closeToast()
      this.speed = 200
      this.click = false
      this.startRoll()
    },

    // 开始转动
    startRoll () {
      this.times += 1  // 转动次数
      this.oneRoll()  // 转动过程调用的每一次转动方法，这里是第一次调用初始化

      // 如果当前转动次数达到要求 && 目前转到的位置是中奖位置
      if (this.times > this.cycle + 10 && this.prize === this.index) {
        clearTimeout(this.timer)   // 清除转动定时器，停止转动
        this.prize = -1
        this.times = 0
        this.click = true
        this.showToast = true
        this.toastType = 'comeOn'
        console.log('你已经中奖了')
      } else {
        if (this.times < this.cycle) {
          this.speed -= 10   // 加快转动速度
        } else if (this.times === this.cycle) {    // 随机获得一个中奖位置
          const index = parseInt(Math.random() * 10, 0) || 0
          this.prize = index
          if (this.prize > 7) {
            this.prize = 7
          }
          console.log(`中奖位置${this.prize}`)
        } else if (this.times > this.cycle + 10 &&
          ((this.prize === 0 && this.index === 7) || this.prize === this.index + 1)) {
          this.speed += 110
        } else {
          this.speed += 20
        }

        if (this.speed < 40) {
          this.speed = 40
        }
        this.timer = setTimeout(this.startRoll, this.speed)
      }
    },

    // 每一次转动
    oneRoll () {
      let index = this.index  // 当前转动到哪个位置
      const count = this.count  // 总共有多少个位置
      index += 1
      if (index > count - 1) {
        index = 0
      }
      this.index = index
    },

    // 关闭弹出框
    closeToast () {
      this.showToast = false
    },
  },

  beforeMount () {

  },

  created () {

  },

  beforeDestroy () {

  },
}
</script>
<style lang="scss" scoped>
.luckDraw {

  .turntable-wrapper {
    padding: 0 px3rem(38);
    position: relative;
    @include background-cover("background-luck.png");
    padding-top: px3rem(121);

    .luck-wrapper {
      width: px3rem(300);
      height: px3rem(377);
      margin: 0 auto;
      position: relative;
      @include background-cover("background-turntable.png");

      .integral {
        width: 100%;
        color: #6d2d00;
        font-size: px3rem(16);
        font-weight: normal;
        text-align: center;
        position: absolute;
        top: px3rem(58);

        span {
          font-weight: 600;
          color: #ff2f4d;
        }
      }

      .nineGrid {
        position: absolute;
        top: px3rem(86);
        left: 50%;
        margin-left: px3rem(-130);
        width: px3rem(260);
        height: px3rem(260);

        li {
          height: px3rem(80);
          display: flex;
          margin-top: px3rem(5);

          > div {
            flex: 1;
            margin-right: px3rem(5);
            height: 100%;
            text-align: center;
            position: relative;

            .wrapper {
              width: 100%;
              height: 100%;
              margin: 0;
              @include background-cover("background-grid.png");
            }

            img {
              width: px3rem(46);
              height: px3rem(38);
              vertical-align: middle;
              margin-top: px3rem(8);
            }

            .mask {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.5;
              border-radius: px3rem(10);
              background-color: #000;
              display: none;
            }
          }

          > div.active {
            .mask {
              display: block;
            }
          }

          > div:first-child {
            margin-left: px3rem(5);
          }

          > div.getLuck {
            @include background-cover("background-getLuck.png");
            font-size: 0;

            p {
              font-size: px3rem(20);
              font-weight: 600;
              color: #fff;
              line-height: 1.1;
              margin-top: px3rem(11);
            }
          }
        }

        li:last-child {
          margin-bottom: px3rem(5);
        }
      }
    }

    .share {
      width: px3rem(160);
      height: px3rem(42);
      margin: 0 auto;
      text-align: center;
      line-height:px3rem(42);
      @include background-cover("luckShrae.png");
      margin-top: px3rem(22);
      color: #6d2d00;
      font-size: px3rem(16);
      font-weight: 600;

      .icon-go {
        @include size(30);
        @include background-cover("goShare-icon.png");

        display: inline-block;
        vertical-align: middle;
        margin-bottom: px3rem(2);
      }
    }

    .rule {
      margin-top: px3rem(14);
      color: #fff;
      font-size: px3rem(14);
      padding-bottom: px3rem(39);

      .rule-title {
        text-align: center;
        position: relative;
        font-size: px3rem(16);
        margin-bottom: px3rem(14);
      }

      .rule-title:before,
      .rule-title:after {
        content: '';
        position: absolute;
        top: 52%;
        background: #fff;
        width: 30%;
        height: px3rem(1);
      }

      .rule-title:before {
        left: 0;
      }

      .rule-title:after {
        right: 0;
      }
    }
  }
}
</style>

