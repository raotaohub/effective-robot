import Scanner from "./Scanner"
import nestTokens from "./nestTokens"

export default function parseTemplateToTokens(templateStr) {
  var scanner = new Scanner(templateStr)
  var tokens = []
  var words
  while (!scanner.eos()) {
    words = scanner.scanUtil("{{")

    if (words.length) {
      tokens.push(["text", words])
    }
    scanner.scan("{{")

    words = scanner.scanUtil("}}")
    if (words !== '') {
      /*
      * 这里要把数组标识给识出来。
      * ["text","#students"] 替换成 ["#","students"]
      * ["text","/students"] 替换成 ["/","students"]
      */
      if (words[0] === "#") {

        tokens.push(["#", words.substring(1)])

      } else if (words[0] === "/") {

        tokens.push(["/", words.substring(1)])

      } else {

        tokens.push(["name", words])
      }
    }
    scanner.scan("}}")
  }
  // 下一步转换成带嵌套的数组
  return nestTokens(tokens)
}