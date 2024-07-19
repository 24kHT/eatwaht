<template>
  <div class="app">
    <van-cell is-link @click="showPopup" v-show="false">展示弹出层</van-cell>
<van-popup v-model="show"
round> <div>点击"瞅一瞅吃什么",为你推荐菜谱~</div></van-popup>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: false
    }
  },
  mounted () {
    this.showPopup()
  },
  methods: {
    showPopup () {
      this.show = true
    }
  }
}
</script>

<style lang="less">
.van-popup {
  width: 280px;
  height: 150px;
  div {
    margin-top: 60px;
    text-align: center;
  }
}
</style>
