<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>

    <div class="panel-body">
      <h1 class="text-center">{{ time }}小时</h1>
    </div>
  </div>
</template>

<script>
  export default{
    computed:{
      time(){
        if(this.$store.state.list.length === 0){
          this.$store.dispatch('getAllPlans');
        }
        console.log(this.$store.state.totalTime);
      	return this.$store.state.totalTime;
      }
    }
  }
</script>