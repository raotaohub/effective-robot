import parseTemplateToTokens from "./parseTemplateToTokens"
import renderTemplate from "./renderTemplate"
window.templateEngine = {

  render(templateStr, data) {
    // 得到tokens数组
    var tokens = parseTemplateToTokens(templateStr)
    // 解析成DOM字符串
    var domStr = renderTemplate(tokens, data)

    return domStr
  }

}


