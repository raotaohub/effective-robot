// 解析 .表达式 例 a.b.c
export default function parsePath(data, path) {

  if (path.indexOf('.') !== -1 && path !== '.') {
    let names = path.split('.')
    let temp = data

    for (let i = 0; i < names.length; i++) {
      temp = temp[names[i]]
    }
    console.log(temp)
    return temp

  }
  return data[path]

}