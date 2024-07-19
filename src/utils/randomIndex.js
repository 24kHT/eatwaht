export const randomInt = (min, max) => {
  min = Math.ceil(min) // 向上取整，确保范围包括 min
  max = Math.floor(max) // 向下取整，确保范围包括 max
  return Math.floor(Math.random() * (max - min + 1)) + min
}
