const express = require('express');
const app = express();
const yanxuan = require('./json/yanxuan.json')
const imageList = require('./json/imageList.json')

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/getyanxuan', (req, res) => {
  res.send(yanxuan)
});
app.get('/getimagelist', (req, res) => {
  res.send(imageList)
});

app.listen('5432', () => {
  console.log('express启动')
})