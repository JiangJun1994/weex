<template>
  <div class="content" > 
      <web :src="src" class="web"></web>
  </div>
</template>

<style>
  .content {width:600px; height:600px;}
  .web {width:600px; height:600px}
</style>

<script>
  export default {
    data: {
      src:"http://imooc.com",
    },
    methods: {
      
    }
  }
</script>
