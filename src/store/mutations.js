import * as types from './mutation-types'

export default {
  [types.ADD_TOTAL_TIME](state, time){
    state.totalTime = state.totalTime + ~~time
  },
  [types.DEC_TOTAL_TIME](state, time){
  	state.totalTime = state.totalTime - time
  },
  [types.SAVE_PLAN] (state, plan){
    const avatar = '../assets/logo.png';
    state.list.push(
      Object.assign({name:'KEN', image: avatar}, plan)
    );
  },
  [types.DELETE_PLAN] (state, idx){
  	state.list.splice(idx, 1);
  },
  [types.GET_ALL_PLANS] (state, {plans, time}){
    state.list = plans;
    state.totalTime = time;
  }
};