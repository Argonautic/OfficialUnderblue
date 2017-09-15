const express = require('express');
/*const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');*/
const path = require('path');

const app = express();

app.use(express.static('dist'));
//app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'dist/index.html'))
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server's up, yo"));