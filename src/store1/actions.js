import * as types from './mutation-types'
import mongoose from 'mongoose'
//import Todo from '../../models/todo.js'

export default{
  addTotalTime({ commit }, time){
  	commit(types.ADD_TOTAL_TIME, time);
  },
  decTotalTime({ commit }, time){
  	commit(types.DEC_TOTAL_TIME, time);
  },
  savePlan({ commit }, plan){
  	/*let todo = new Todo({
  	  ...plan,
  	  name: 'KEN',
  	  avatar: '../assets/logo.png'
  	})
  	todo.save();*/
  	commit(types.SAVE_PLAN, plan);
  },
  deletePlan({ commit }, plan){
  	commit(types.DELETE_PLAN, plan);
  }
};