//format <string> 一个类似 printf 的格式字符串。
//util.format() 方法返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式。
//第一个参数是一个字符串，包含零个或多个占位符。 每个占位符会被对应参数转换后的值所替换。 支持的占位符有：

//%s - 字符串。
//%d - 数值（整数或浮点数）。
//%i - Integer.
//%f - Floating point value.
//%j - JSON。如果参数包含循环引用，则用字符串 '[Circular]' 替换。
//%o - Object. 具有通用JavaScript对象格式化的对象的字符串表示形式。类似于使用util.inspect()
//     选项为{showHidden:true,depth:4,showProxy:true}。这将显示完整的对象包括非可枚举符号和属性。
//%O - Object. 具有通用JavaScript对象格式化的对象的字符串表示形式。类似于使用util.iinspect()
//     并不包含选项。这将显示完整的对象，但不包括非可枚举符号和属性。
//%% - 单个百分号（'%'）。不消耗参数。
//如果占位符没有对应的参数，则占位符不被替换。

//util.format('%s:%s', 'foo');
// 返回: 'foo:%s'

// 如果传入 util.format() 方法的参数比占位符的数量多，则多出的参数会被强制转换为字符串，然后拼接到返回的字符串，
// 参数之间用一个空格分隔。过多的类型为'object'或'symbol'(除了null)的参数会被util.inspect()转化。
//
// util.format('%s:%s', 'foo', 'bar', 'baz'); // 'foo:bar baz'
// 如果第一个参数不是一个字符串，则 util.format() 返回一个所有参数用空格分隔并连在一起的字符串。 每个参数都使用 util.inspect() 转换为一个字符串。
//
// util.format(1, 2, 3); // '1 2 3'

//如果只有一个参数传递给util.format()，它是没有任何格式返回的。
// util.format('%% %s'); // '%% %s'
