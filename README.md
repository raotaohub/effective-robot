# [100行代码，实现支持嵌套的模板引擎](https://github.com/raotaohub/study_mustach/commit/f30e144f7d83906bda2ccc616e47c273f2fd8278)

mustache.js是一个JS模板引擎系统，何为模板引擎系统？

经常使用Vue的朋友一定知道，v-for这个指令，它可以根据用户给定的数组，进行迅循环生成对应的html文档结构，通常有数组中有多少个元素它就能对应生成多少组模板中的html代码。
mustache.js便是这样的一个库。不过这是一个弱逻辑的模板引擎不支持解析js代码等。
它的出现带了了巨大的轰动，后续的所有模板引擎系统都是建立在这套系统之上。
<br>

### mustache的思路

```js
// 模板
var template = ` 
<div>
	{{#list}}
		<p>
			{{item}}
		</p>
	{{/list}}

</div>

` 
var data = {
    list:["光阴的故事","童年","红尘滚滚","你的样子","恋曲1980",]
}
// 转换为用数组表示的tokens
[
    ["text","<div>"],
    ["#","list",[
        ["text","<p>"],
        ["name","item"],
        ["text","</p>"],
    ]]
]

// 再通过遍历和循环(遇到#便循环)，得出一个DOM字符串

`
<div>
	<p>光阴的故事</p>
    <p>童年</p>
    <p>红尘滚滚</p>
    <p>恋曲1980</p>
</div>
`
// 最后通过插入innerHTML来熏染到视图上

```

### 基本语法实例

```js
  var templateStr2 =
    `
  <div>
    <ul>
      {{#song}}
      <li>
        {{dream}}
        <ol>
          {{#star}}
          <li>{{.}}</li>
           {{/star}}
        </ol>
      </li>
      {{/song}}
    </ul>
  </div>
`
  var data2 = {
    song: [
      {"dream": "永远年轻", "star": ['崔健', '窦唯']},
      {"dream": "永远热泪盈眶", "star": ['高旗&超载', '呼吸', '郑钧']},
      {"dream": "虾米永远爱你", "star": ['罗大佑', '范宗沛']},
    ]
  }
  
  let domStr = templateEngine.render(templateStr2, data2) // 调用渲染函数
  let dom = document.getElementById('container')	
  dom.innerHTML = domStr// 将DOM字符串插入节点
```

转换为HTML

```html
  <div id="container">
      <ul>
      	<li>
      		永远年轻
			<ol>
      			<li>崔健</li>
				<li>窦唯</li>
      		</ol>
            永远热泪盈眶
			<ol>
      			<li>高旗&超载</li>
				<li>呼吸</li>
                <li>郑钧</li>
      		</ol>
            永远年轻
			<ol>
      			<li>罗大佑</li>
				<li>范宗沛</li>
      		</ol>
      	</li>
      </ul>
  <div>
```
