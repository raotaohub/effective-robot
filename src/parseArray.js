import renderTemplate from "./renderTemplate"
import parsePath from "./pasrePath"
/*
* 
* 
*/
export default function parseArray(t, data) {
  let resultStr = ''

  let v = parsePath(data, t[1])

  for (let i = 0; i < v.length; i++) {
    // 将t中的数组 遍历 i 次，这样就循环出了i条t[2]的内容
    resultStr += renderTemplate(t[2], {
      ...v[i],
      ".": v[i]
    })
  }

  return resultStr
}