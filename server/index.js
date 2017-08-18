const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const router = require('koa-router')();
const cors = require('koa-cors');
const Todo = require('../models/todo.js');
const api = require('./api.js');

const app = new Koa();
app.use(cors());
app.use(bodyParser());


mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/vue-tutorial').catch(err => {
  console.log(err);
});


app.use(api());
app.listen(3000);
console.log('Server successfully listens at 3000...')