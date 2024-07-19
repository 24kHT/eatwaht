export default {
  namespaced: true,
  state () {
    return {
      food: [
        { name: '糖醋小排', value: 1 },
        { name: '凉皮凉菜', value: 1 },
        { name: '京酱肉丝', value: 1 },
        { name: '火锅', value: 1 },
        { name: '饺子包子', value: 1 },
        { name: '麻婆豆腐', value: 1 },
        { name: '土豆炒肉', value: 1 },
        { name: '糖醋里脊', value: 1 },
        { name: '水煮面条', value: 1 },
        { name: '汤圆', value: 1 },
        { name: '尖椒肉丝', value: 1 },
        { name: '豆芽金针菇', value: 1 }]
    }
  },
  mutations: {
    randomUpdate (state, obj) {
      if (state.food && state.food[obj.index]) { state.food[obj.index].value = obj.newValue }
    }
  },
  actions: {},
  getters: {}
}
