<script>
import AppSecond from "./components/componentfirst.vue";
export default{
  data(){
    return{
      text: 'I am app'
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
