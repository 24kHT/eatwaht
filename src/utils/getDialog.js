// 判断上午还是下午
export const getDialog = () => {
  const now = new Date()
  const hours = now.getHours()
  if (hours >= 0 && hours < 8) {
    return '早上好，让我来看看早餐吃什么比较好'
  } else if (hours >= 10 && hours <= 12) {
    return '中午好，中午吃顿大餐吧'
  } else if (hours > 12 && hours <= 16) {
    return '下午好，喝杯下午茶，快乐又轻松'
  } else if (hours > 16 && hours <= 19) {
    return '晚上好，我们一起来瞅瞅晚上吃什么好'
  } else if (hours > 19 && hours <= 22) {
    return '晚上运动运动吧，比如说打打羽毛球'
  } else {
    return '晚上记得早点休息，养精蓄锐方能成为栋梁'
  }
}

// 根据随机食物获取对话
export const getJudgeDialog = (index) => {
  if (index === 0) {
    return '糖醋小排是吾姐的拿手菜，味道自然不用多说'
  } else if (index === 1) {
    return '凉皮凉菜偶尔吃吃还可以，不能经常吃'
  } else if (index === 2) {
    return '京酱肉丝我老妈做的贼棒，推荐这道菜'
  } else if (index === 3) {
    return '火锅也是可以可以的，配上冰镇的饮料无敌了'
  } else if (index === 4) {
    return '饺子包子适合早餐吃，搭配豆浆牛奶味道更佳'
  } else if (index === 5) {
    return '麻婆豆腐自己做比较容易翻车，但不妨碍这是道美食'
  } else if (index === 6) {
    return '土豆炒肉，朴实无华'
  } else if (index === 7) {
    return '甜甜的糖醋里脊搭配着白米饭好吃极了'
  } else if (index === 8) {
    return '水煮面条是幸运美食，简单奢华'
  } else if (index === 9) {
    return '甜甜的汤圆是不是想到了过年'
  } else if (index === 10) {
    return '想起了我老爸做的虎皮辣椒，搭配着米饭，味道爽口'
  } else if (index === 11) {
    return '味道不错，无敌美味'
  }
}
