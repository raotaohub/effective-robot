export default function nestTokens(tokens) {
  var nestedTokens = []
  var stack = []
  var collector = nestedTokens // 两个指针，当遇到#号时就将 collector 指向#对应的那个数组 遇到 / 就指回stack中最后一个元素

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    switch (token[0]) {
      case "#":
        collector.push(token) // 同时 collector 也入栈
        stack.push(token)    // 遇到#就入栈
        collector = token[2] = []// 然后把collector指针指向 tonken的下标2新创建从数组
        break
      case "/":
        stack.pop() // 弹出栈顶的元素 ，然后把collector指向栈顶元素的下标2的位置
        collector = stack.length > 0 ? stack[stack.length - 1][2] : nestedTokens
        break
      default:
        collector.push(token)
    }
  }
  return nestedTokens
}