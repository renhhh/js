// isStatic：检测数据是不是除了symbol外的原始数据
function isStatic(value) {
    return(
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        typeof value === 'undefined' ||
        value === null
    )
}

// isPrimitive：检测数据是不是原始数据
function isPrimitive(value) {
    return isStatic(value) || typeof value === 'symbol'
}

// isObject：判断数据是不是引用类型的数据 (例如： arrays, functions, objects, regexes, new Number(0),以及 new String(''))
function isObject(value) {
    let type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}

// isObjectLike：检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"
function isObjectLike(value) {
    return value != null && typeof value == 'object';
}

// getRawType：获取数据类型，返回结果为 Number、String、Object、Array等
function getRawType(value) {
    return Object.prototype.toString.call(value).slice(8, -1)
}
//getoRawType([]) ==> Array

// isPlainObject：判断数据是不是Object类型的数据
function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

// isArray：判断数据是不是数组类型的数据
function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]'
}

// isRegExp：判断数据是不是正则对象
function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]'
}

// isDate：判断数据是不是时间对象
function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]'
}

// isNative：判断 value 是不是浏览器内置函数
// 内置函数toString后的主体代码块为 [native code] ，而非内置函数则为相关代码，所以非内置函数可以进行拷贝(toString后掐头去尾再由Function转)
function isNative(value) {
    return typeof value === 'function' && /native code/.test(value.toString())
}

// isFunction：检查 value 是不是函数
function isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]'
}

// isLength：检查 value 是否为有效的类数组长度
function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= Number.MAX_SAFE_INTEGER;
}

// isArrayLike：检查 value 是否是类数组
// 如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，大于等于 0，小于或等于 Number.MAX_SAFE_INTEGER。这里字符串也将被当作类数组。
function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}