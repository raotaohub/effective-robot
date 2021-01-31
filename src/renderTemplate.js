import parsePath from "./pasrePath"
import parseArray from "./parseArray"

export default function renderTemplate(tokens, data) {
  let resultStr = ''
  console.log(tokens, data)
  for (let i = 0; i < tokens.length; i++) {
    let t = tokens[i]
    console.log(t)
    if (t[0] == 'text') {
      resultStr += t[1]

    }
    if (t[0] == 'name') {
      resultStr += parsePath(data, t[1])

    }
    if (t[0] == '#') {
      resultStr += parseArray(t, data)
    }
  }
  console.log(resultStr)
  return resultStr
}