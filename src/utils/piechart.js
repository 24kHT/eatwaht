// 获取echarts插件样式配置
import store from '@/store'

export const pieOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  color:
  [
    '#5470c6',
    '#91cc75',
    '#fac858',
    '#ee6666',
    '#73c0de',
    '#3ba272',
    '#fc8452',
    '#9a60b4',
    '#FDE6E0',
    '#B7E8BD'
  ],
  series: [
    {
      name: '这个美食推荐力度',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: store.getters.food,
      animation: true,
      animationDuration: 5000, // 设置动画持续时间为 1 秒
      animationEasing: 'bounceOut' // 使用 quint 缓动函数
    }
  ],
  animationDurationUpdate: 3000,
  animationEasingUpdate: 'bounceOut'
}
