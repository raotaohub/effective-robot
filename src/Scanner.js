export default class Scanner {
  constructor(templateStr) {
    this.templateStr = templateStr
    this.pos = 0
    this.tail = templateStr
  }
  // 负责跳过 {{  }}
  scan(tag) {
    if (this.tail.indexOf(tag) === 0) {
      this.pos += tag.length
      this.tail = this.templateStr.substring(this.pos)
    }
  }
  // 扫描到 {{  }} 
  scanUtil(stopTag) {
    const pos_backup = this.pos
    while (this.tail.indexOf(stopTag) !== 0 && !this.eos()) {
      this.pos++
      this.tail = this.templateStr.substring(this.pos)
    }
    // 返回从 pos_backup 到 this.pos的位置的字符串 不包括this.pos位置的字符串
    return this.templateStr.substring(pos_backup, this.pos)
  }

  eos() {
    return this.pos >= this.templateStr.length
  }

}