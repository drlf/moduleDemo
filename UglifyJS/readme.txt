
用UglifyJS解析/压缩/格式化你的Javascript
http://www.csser.com/board/4f3f516e38a5ebc978000509
UglifyJS是基于 NodeJS 的Javascript语法解析/压缩/格式化工具，它支持任何CommonJS模块系统的Javascript平台（实现自己的CommonJS平台也非难事）。 UglifyJS通过解析重新生成JS代码的语法树，你可以通过AST以了解更多代码情况，或者自己来做一个不同的实现。UglifyJS解析器是在 parse-js.js 中实现的，它是非常优秀的 pars

安装
npm install uglify-js


使用代码方式
要想在Javascript中使用UglifyJS类库，参考下面的示例（以NodeJS为例）：

var jsp = require("uglify-js").parser;
var pro = require("uglify-js").uglify;

var orig_code = "Javascript代码";
var ast = jsp.parse(orig_code); // 解析代码返回初始的AST
ast = pro.ast_mangle(ast); // 获取变量名称打乱的AST
ast = pro.ast_squeeze(ast); // 获取经过压缩优化的AST
var final_code = pro.gen_code(ast); // 压缩后的代码

命令行方式使用
glifyJS提供了命令行工具，支持shell脚本的操作需要：

uglifyjs [ 选项... ] [ 文件名 ]
最后一个参数是要处理的JS文件名，如果不指定，则从标准输入（STDIN）读取。
例子：
uglifyjs -b -o 1.js 1601TransCode.js 

支持的选项 ：

-b 或 --beautify - 输出格式化代码，当传入该参数，下面的附加选项用于更美观的控制格式化：
-i N 或 --indent N - 缩进级别（空格数量）
-q 或 --quote-keys - 是否用引号引起字符串对象的键（默认只会引起不能被正确标志的键名）
--ascii -默认 UglifyJS 不处理字符编码而直接输出 Unicode 字符，通过传入该参数将非ASCII编码的字符转化为\cXXXX的序列（输出总按照UTF8编码，但传入该选项能得到ASCII编码的输出）。
-nm 或 --no-mangle - 不改变变量名称
-ns 或 --no-squeeze - 不调用 ast_squeeze() 函数（该函数会做多种优化使得结果更小，可读性略有降低）
-mt 或 --mangle-toplevel - 在顶级作用域打乱变量名称（默认不开启）
--no-seqs - 当调用 ast_squeeze() 将会合并多个语句块为一个语句块，如 "a=10; b=20; foo()" 将被转换为 "a=10,b=20,foo()"
--no-dead-code - 默认 UglifyJS 将会删除不被用到的代码，传入该参数禁用此功能。
-nc 或 --no-copyright - 默认 uglifyjs 会在输出后的代码中添加版权信息等注释代码，传入该参数禁用此功能。
-o 文件名 或 --output 文件名 - 指定输出文件名，如果不指定，则打印到标准输出（STDOUT）
--overwrite - 如果传入的JS代码来自文件而不是标准输入，传入该参数，输出会覆盖该文件。
--ast - 传入该参数会得到抽象的语法树而不是Javascript，对调试或了解内部代码很有用。
-v 或 --verbose - 在标准错误输出一些信息（目前的版本仅输出操作用时）
--extra - 开启附加优化，这些优化并未得到全面的测试。
--unsafe - 开启其他附加优化，这些优化已知在特定情况下并不安全，目前仅支持：
foo.toString() ==> foo+””
--max-line-len （默认32K字节） - 在32K字节出增加换行符，传入0禁用此功能。
--reserved-names - 一些类库会依赖一些变量，该参数指定的名称不会被混淆掉，多个用逗号隔开。