const mongoose = require('mongoose');
const Todo = require('../models/todo.js');
const Router = require('koa-router');
const convert = require('koa-convert');
const compose = require('koa-compose');

//ctx.body might be very important?
module.exports= function api(){
  const router = new Router();
  router.get('/api', function(ctx){
    ctx.body = '<h1>hello</h1>';
  })
  router.post('/api/save', function(ctx){
    //console.log(ctx.request.body);
    ctx.body = 'ok';
    let name = ctx.request.body.name,
        image = ctx.request.body.image,
        date = ctx.request.body.date,
        totalTime = ctx.request.body.totalTime,
        comment = ctx.request.body.comment;
    const newPlan = new Todo({
      name,
      image,
      date,
      totalTime,
      comment,
      created: new Date().getTime()
    })
    newPlan.save((err, res)=>{
      if(!err){
        //console.log(res);
      }
    });
  })
  .delete('/api/del/:idx', async function(ctx){
    let idx = ~~ctx.params.idx;
    //console.log(ctx.params);
    ctx.body = 'ok';
    let res = await Todo.find()
      .sort({created: 1})
      .skip(idx);
          if(res){
            res[0].remove();
          } else {
          console.log('No found!');
        }
  })
  .get('/api/query', async function (ctx){
    let planArr = await Todo.find();
    console.log(planArr);
    if(planArr.length !== 0){
      let totalTime = await planArr.map(x=>x.totalTime).reduce((x,y)=>x+y);
      //console.log(totalTime);
      ctx.body = {
        planArr,
        totalTime,
      }
    }
    else{
      ctx.body = {
        planArr: [],
        totalTime: 0,
      }
    }
  })

return convert.compose([
  router.routes(),
  router.allowedMethods(),
])
}