const path = require('path');
const webpack = require('webpack');
//  webpack-dev-server 是一个小型的Node.js Express 服务器
const webpackDevMiddleware = require('webpack-dev-middleware');  // 用于服务于webpack的包
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./cfg/dev');
const {dfPath} = require('./cfg/default');


let app = new (require('express'))();
let port = 9001;

config.entry.unshift('webpack-hot-middleware/client?reload=true');

let compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {publicPath: '/assets/'}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => res.sendFile(dfPath.src + '/index.html'));

app.listen(port, (error)=>{
    if(!error){
        console.log("");
    }
});