import Axios from 'axios';
var qs = require('qs');
export default {
  getAllPlans(){
  	return Axios.get('/api/query');
  },
  savePlan(plan){
  	return Axios.post('/api/save', plan);
  },
  deletePlan(idx){
  	return Axios.delete('/api/del/' + idx);
  }
}