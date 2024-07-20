<template>
  <div class="layoutIndex">

    <!-- dance图片 -->
    <ul class="preImg">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="main">
    </div>
<router-view></router-view>
<!-- dance图片加载位置 -->
<van-badge
class="img"
v-show="true"
:class="{'bg01':isDance01,'bg02':isDance02,'bg03':isDance03,'bg04':isDance04}"
:style="{'left':danceLeft,'top':danceTop}"
>

  <div class="child">
  </div>
  <template #content>
      <div class="dialogContent">
        {{ dialog }}
      </div>
    </template>
</van-badge>

    <!-- 媒体音乐播放 -->
    <audio ref="playAudio">
      <source src="@/assets/audio01.mp3">
    </audio>
  <van-button plain type="primary" @click="update" class="btn-pri">瞅一瞅吃什么</van-button>

    <!-- 排行榜 -->
    <van-button plain type="info" class="btn-inf" @click="handleGo">
      {{ preferFood }}
      <van-tag type="success" class="tag-suc">top推荐</van-tag>
    </van-button>
  </div>
</template>

<script>

import echarts from 'echarts'
import { pieOption } from '@/utils/piechart'
import { randomInt } from '@/utils/randomIndex'
import { getDialog, getJudgeDialog } from '@/utils/getDialog'
import { mapState } from 'vuex'
import { Dialog } from 'vant'

export default {
  name: 'layoutIndex',
  mounted () {
    this.myChart = echarts.init(document.getElementById('main'))
    this.myChart.setOption(pieOption)
    // piecharts检测
    this.myChart.on('click', (params) => {
      console.log(params)
    })
  },
  destroyed () {
    clearInterval(this.timer)
  },
  data () {
    return {
      myChart: null,
      show: false,
      timer: null,
      timerFlag: true,
      isDance: false,
      isDance01: true,
      isDance02: false,
      isDance03: false,
      isDance04: false,
      danceLeft: '152px',
      danceTop: '188px',
      dialog: '哈喽',
      msg: '',
      maxIndex: 0,
      maxValue: 0,
      preferFood: ''
    }
  },
  computed: {
    ...mapState('pieInfo', ['food'])
  },
  methods: {
    // 随机选择食物函数
    update () {
      if (this.timerFlag === false) {
        return
      }
      this.danceLeft = '152px'
      this.danceTop = '188px'
      this.isDance = false
      this.isDance01 = true
      this.isDance02 = false
      this.isDance03 = false
      this.isDance04 = false
      // 播放音乐
      this.playMusic()
      // 随机选择后可以再次选择
      this.timerFlag = false
      // 随机选择食物下标
      let i = 0
      this.timer = setInterval(() => {
        i++
        // 是否是大数
        const isMore = randomInt(0, 1)
        const index = randomInt(0, 11)
        let newValue = 0
        if (isMore) {
          newValue = randomInt(500, 1000)
        } else {
          newValue = randomInt(100, 280)
        }
        if (newValue > this.maxValue) {
          this.maxIndex = index
          this.maxValue = newValue
          this.preferFood = this.food[index].name
        }
        // console.log(index)
        // 更新维护piechart的数据
        this.$store.commit('pieInfo/randomUpdate', { index: index, newValue: newValue })
        console.log(index)
        // 更新视图
        this.myChart.setOption(pieOption, true)
        if (i === 7) {
          // 跳舞
          this.isDance = true
        } else if (i === 9) {
          // 切换图片
          this.isDance01 = false
          this.isDance02 = true
        } else if (i === 10) {
          // 随时间获取开场白
          this.dialog = getDialog()
        } else if (i === 11) {
          // 切换图片
          this.isDance02 = false
          this.isDance04 = true
        } else if (i === 12) {
          // 更换位置
          // 第一句对白
          this.dialog = getJudgeDialog(index)
          this.danceLeft = '260px'
          this.danceTop = '50px'
        } else if (i === 15) {
          // 切换图片
          this.isDance04 = false
          this.isDance03 = true
        } else if (i === 16) {
          // 第二句对白
          this.dialog = getJudgeDialog(index)
        } else if (i === 19) {
          // 第三句对白
          this.dialog = '       ' + getJudgeDialog(index)
        } else if (i === 20) {
          // 更换位置
          this.danceLeft = '0px'
          this.danceTop = '50px'
        } else if (i === 21) {
          this.isDance04 = false
          this.isDance01 = true
        } else if (i === 22) {
          // 第四句对白
          this.dialog = '       ' + getJudgeDialog(index)
        } else if (i === 24) {
          // 更换位置
          this.danceLeft = '152px'
          this.danceTop = '188px'
          // 第五句对白
          this.dialog = '       ' + getJudgeDialog(index)
        } else if (i === 25) {
          this.isDance01 = false
          this.isDance02 = true
        } else if (i === 27) {
          this.isDance02 = false
          this.isDance03 = true
        } else if (i === 28) {
          this.danceTop = '280px'
          this.danceLeft = '200px'
        } else if (i === 30) {
          this.danceTop = '66px'
          this.danceLeft = '-100px'
        } else if (i === 31) {
          this.danceTop = '66px'
          this.danceLeft = '-200px'
        } else if (i === 32) {
          this.msg = '你可以选择吃' + this.$store.getters.food[this.maxIndex].name + '喔哈哈哈，' + this.$store.getters.food[this.maxIndex].name + '以' + this.$store.getters.food[this.maxIndex].value + '的票数胜出~'
          // 清除定时器
          this.success()
          console.log('定时器被清除')
          this.timerFlag = true
          clearInterval(this.timer)
          this.timer = null
          clearInterval(this.timer2)
        }
      }, 800)
    },
    // Popup调用
    showPopup () {
      this.show = true
    },
    // 播放音乐
    playMusic () {
      this.$refs.playAudio.play()
    },
    // 成功选择美食
    success () {
      Dialog({ message: this.msg })
    },
    handleGo () {
      location.href = 'https://www.xiaohongshu.com/explore/65c02c60000000000a032cf1?app_platform=android&ignoreEngage=true&app_version=8.45.0&share_from_user_hidden=true&xsec_source=app_share&type=normal&xsec_token=CBl-_7diYJ7Y76DApYNwRYOKj80sZSfJUSyAUG6HVpe6g=&author_share=1&xhsshare=WeixinSession&shareRedId=N0tIMUQ1N0s2NzUyOTgwNjY0OThIPDlP&apptime=1721439828&share_id=349cbdf9ca12487fb295df635baa7fce&wechatWid=0932d1fa217d078b9e06d4622a4dfaaa&wechatOrigin=menu'
    }
  }

}
</script>

<style lang="less" scoped>
.layoutIndex{
  .preImg {
    position: fixed;
    left: -1000px;
    :nth-child(1) {
      width: 1px;
      height: 1px;
      background-image: url('@/assets/images/dance01.gif');
    }
    :nth-child(2) {
      width: 1px;
      height: 1px;
      background-image: url('@/assets/images/dance02.gif');
    }
    :nth-child(3) {
      width: 1px;
      height: 1px;
      background-image: url('@/assets/images/dance03.gif');
    }
    :nth-child(4) {
      width: 1px;
      height: 1px;
      background-image: url('@/assets/images/dance04.gif');
    }
  }
  width: 375px;
  height:500px;
  #main{
    width: 100%;
    height: 100%;
  }
  .van-popup {
    height: 100%;
    width: 50%;
  }
  .img {
    position: fixed;
    width: 80px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 9;
    transition-property: left,top;
    transition-duration: 2s;
    transition-timing-function:cubic-bezier(.29, 1.01, 5, -0.68);
  }
  .bg01 {
    background-image: url('@/assets/images/dance01.gif')
  }
  .bg02 {
    background-image: url('@/assets/images/dance02.gif')
  }
  .bg03 {
    background-image: url('@/assets/images/dance03.gif')
  }
  .bg04 {
    background-image: url('@/assets/images/dance04.gif')
  }
  .dialogContent{
    margin: 8px;
  }
  .btn-pri {
    position: fixed;
    bottom: 100px;
    right: 10px;
    z-index: 9;
  }
  .btn-inf {
    width: 200px;
    height: 20px;
    position: relative;
    left: 0;
    text-align: left;
    .tag-suc {
      position: absolute;
      right: 0;
      top:0;
    }
  }
}

</style>
