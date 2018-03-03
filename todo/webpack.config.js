const path = require('path');

let env = process.env.NODE_ENV;
// process.env 用于读取系统环境变量


module.exports = require(path.resolve(__dirname, 'cfg', env));
// path.resolve 将相对路径转换为绝对路径
// __dirname 指代当前目录
// 格式: path.resolve([from...], to)