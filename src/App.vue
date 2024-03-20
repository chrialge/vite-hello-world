<script>
import AppSecond from "./App-2.vue";
export default{
  data(){
    return{
      text: 'I am second component'
    }
  },
  components:{
    AppSecond
  }
}
</script>

<template>
  <div>
    <h1>{{text}}</h1>
  </div>
  <AppSecond />
</template>

<style>

</style>
