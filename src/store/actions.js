import * as types from './mutation-types'
import mongoose from 'mongoose'
import $ from './api.js'
export default{
  addTotalTime({ commit }, time){
  	commit(types.ADD_TOTAL_TIME, time);
  },
  decTotalTime({ commit }, time){
  	commit(types.DEC_TOTAL_TIME, time);
  },
  savePlan({ commit }, plan){
    $.savePlan(plan).then(res => {
      commit(types.SAVE_PLAN, plan);
    });
  },
  deletePlan({ commit }, idx){
    $.deletePlan(idx).then(res => {
      commit(types.DELETE_PLAN, idx);
    });
  },
  getAllPlans({ commit }){
    $.getAllPlans().then(res => {
      commit(types.GET_ALL_PLANS, {plans: res.data.planArr, time: res.data.totalTime});
    })
  }
};